#!/usr/bin/env python3
"""Generate assets/live-data.js from public pages, RSS and repository Issues.

Discovery signals never become S-level facts automatically. Official pages remain S,
professional feeds remain A/B, and search results remain C until independently checked.
"""
from __future__ import annotations

import concurrent.futures
import datetime as dt
import email.utils
import hashlib
import html
import json
import os
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / "config" / "sources.json"
OUTPUT = ROOT / "assets" / "live-data.js"
USER_AGENT = "AI-FirstMove-Updater/3.0 (+GitHub Actions; public-source aggregator)"
MAX_ITEMS = 48
TIMEOUT = int(os.getenv("AI_FIRSTMOVE_FETCH_TIMEOUT", "10"))


def now_iso() -> str:
    return dt.datetime.now(dt.timezone(dt.timedelta(hours=8))).replace(microsecond=0).isoformat()


def fetch(url: str, accept: str = "*/*") -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": accept})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as response:
        return response.read()


def clean_text(value: str | None) -> str:
    value = html.unescape(value or "")
    value = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def parse_date(value: str | None) -> str:
    if not value:
        return ""
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=dt.timezone.utc)
        return parsed.isoformat()
    except Exception:
        pass
    try:
        return dt.datetime.fromisoformat(value.replace("Z", "+00:00")).isoformat()
    except Exception:
        return value[:32]


def host(url: str) -> str:
    return urllib.parse.urlparse(url).netloc.lower().removeprefix("www.")


def stable_id(prefix: str, value: str) -> str:
    return f"{prefix}-{hashlib.sha1(value.encode('utf-8')).hexdigest()[:12]}"


def parse_feed(raw: bytes, meta: dict[str, Any], captured: str) -> list[dict[str, Any]]:
    root = ET.fromstring(raw)
    nodes = root.findall(".//item")
    if not nodes:
        nodes = root.findall(".//{http://www.w3.org/2005/Atom}entry")
    items: list[dict[str, Any]] = []
    for node in nodes[:18]:
        title = clean_text(node.findtext("title") or node.findtext("{http://www.w3.org/2005/Atom}title"))
        link = clean_text(node.findtext("link"))
        if not link:
            atom_link = node.find("{http://www.w3.org/2005/Atom}link")
            if atom_link is not None:
                link = atom_link.attrib.get("href", "")
        description = clean_text(
            node.findtext("description") or node.findtext("summary")
            or node.findtext("{http://www.w3.org/2005/Atom}summary")
            or node.findtext("{http://www.w3.org/2005/Atom}content")
        )[:220]
        published = parse_date(
            node.findtext("pubDate") or node.findtext("published") or node.findtext("updated")
            or node.findtext("{http://www.w3.org/2005/Atom}published")
            or node.findtext("{http://www.w3.org/2005/Atom}updated")
        )
        if not title or not link:
            continue
        items.append({
            "id": stable_id("rss", link), "title": title, "summary": description or "打开原始来源查看详情。",
            "url": link, "platform": meta["platform"], "sourceLevel": meta.get("sourceLevel", "A"),
            "publishedAt": published, "capturedAt": captured, "kind": meta.get("kind", "AI资讯"),
            "city": "全球" if "全球" in meta.get("kind", "") else "线上",
            "crossValidation": {"count": 1, "status": "原始发布源" if meta.get("sourceLevel") == "S" else "专业来源"}
        })
    return items


def google_news_feed(query: str) -> str:
    params = urllib.parse.urlencode({"q": query, "hl": "zh-CN", "gl": "CN", "ceid": "CN:zh-Hans"})
    return f"https://news.google.com/rss/search?{params}"


def parse_issues(repo: str, token: str, captured: str) -> list[dict[str, Any]]:
    if not repo:
        return []
    url = f"https://api.github.com/repos/{repo}/issues?state=open&per_page=100&sort=updated"
    headers = {"User-Agent": USER_AGENT, "Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=TIMEOUT) as response:
        issues = json.load(response)
    rows = []
    for issue in issues:
        if "pull_request" in issue:
            continue
        labels = {label.get("name", "") for label in issue.get("labels", [])}
        title = issue.get("title", "")
        if not (title.startswith("[机会]") or labels.intersection({"机会", "opportunity", "线索"})):
            continue
        rows.append({
            "id": f"issue-{issue['number']}", "title": title.removeprefix("[机会]").strip(),
            "summary": clean_text(issue.get("body", ""))[:220] or "用户提交的机会线索，需要编辑复核。",
            "url": issue["html_url"], "platform": "GitHub Issues", "sourceLevel": "C",
            "publishedAt": issue.get("created_at", ""), "capturedAt": captured, "kind": "用户线索", "city": "待识别",
            "crossValidation": {"count": 1, "status": "用户提交·待确认"}
        })
    return rows


def title_tokens(title: str) -> set[str]:
    normalized = re.sub(r"[^\w\u4e00-\u9fff]+", "", title.lower())
    return {normalized[i:i+2] for i in range(max(0, len(normalized)-1)) if len(normalized[i:i+2]) == 2}


def enrich_cross_validation(items: list[dict[str, Any]]) -> None:
    token_sets = [title_tokens(item["title"]) for item in items]
    for index, item in enumerate(items):
        domains = {host(item["url"])}
        for other_index, other in enumerate(items):
            if index == other_index:
                continue
            a, b = token_sets[index], token_sets[other_index]
            if not a or not b:
                continue
            similarity = len(a & b) / max(1, len(a | b))
            if similarity >= 0.34:
                domains.add(host(other["url"]))
        if len(domains) >= 2:
            item["crossValidation"] = {"count": len(domains), "status": "多来源交叉出现"}


def dedupe(items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    result, seen = [], set()
    for item in items:
        key = re.sub(r"\W+", "", item["title"].lower())[:70] or item["url"]
        if key in seen:
            continue
        seen.add(key)
        result.append(item)
    return result


def task_official(page: dict[str, Any], captured: str) -> tuple[list[dict[str, Any]], list[str]]:
    error = []
    status = "官方页面可访问"
    try:
        fetch(page["url"], "text/html,*/*")
    except Exception as exc:
        status = "官方页面本轮访问失败·保留待复核"
        error.append(f"page {page['url']}: {exc}")
    row = {
        "id": stable_id("official", page["url"]), "title": page["title"], "summary": page["summary"],
        "url": page["url"], "platform": page["platform"], "sourceLevel": page.get("sourceLevel", "S"),
        "publishedAt": page.get("publishedAt", ""), "capturedAt": captured, "kind": page.get("kind", "官方机会"),
        "city": page.get("city", "线上"), "crossValidation": {"count": 1, "status": status}
    }
    return [row], error


def task_feed(feed: dict[str, Any], captured: str) -> tuple[list[dict[str, Any]], list[str]]:
    try:
        raw = fetch(feed["url"], "application/rss+xml,application/atom+xml,text/xml,*/*")
        return parse_feed(raw, feed, captured), []
    except Exception as exc:
        return [], [f"feed {feed['url']}: {exc}"]


def task_query(query: str, captured: str) -> tuple[list[dict[str, Any]], list[str]]:
    try:
        meta = {"platform": "Google News 线索", "kind": "自动发现", "sourceLevel": "C"}
        rows = parse_feed(fetch(google_news_feed(query), "application/rss+xml,text/xml,*/*"), meta, captured)[:8]
        for row in rows:
            row["summary"] = f"自动发现线索：{row['summary']} 发布前必须继续寻找官方或独立确认来源。"
            row["crossValidation"] = {"count": 1, "status": "自动发现·待确认"}
        return rows, []
    except Exception as exc:
        return [], [f"query {query}: {exc}"]


def main() -> int:
    config = json.loads(CONFIG.read_text(encoding="utf-8"))
    captured = now_iso()
    items: list[dict[str, Any]] = []
    errors: list[str] = []
    jobs = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        for page in config.get("monitored_pages", []):
            jobs.append(executor.submit(task_official, page, captured))
        for feed in config.get("rss_feeds", []):
            jobs.append(executor.submit(task_feed, feed, captured))
        for query in config.get("discovery_queries", []):
            jobs.append(executor.submit(task_query, query, captured))
        for job in concurrent.futures.as_completed(jobs):
            rows, task_errors = job.result()
            items.extend(rows)
            errors.extend(task_errors)

    try:
        items.extend(parse_issues(os.getenv("GITHUB_REPOSITORY", ""), os.getenv("GITHUB_TOKEN", ""), captured))
    except Exception as exc:
        errors.append(f"issues: {exc}")

    items = dedupe(items)
    enrich_cross_validation(items)
    items.sort(key=lambda item: (item.get("publishedAt", ""), item.get("sourceLevel") == "S"), reverse=True)
    payload = {
        "generatedAt": captured,
        "cadence": "GitHub Actions 每6小时检查；Issue 提交、编辑或加标签后立即更新",
        "items": items[:MAX_ITEMS],
        "health": {"sourceCount": len(config.get("monitored_pages", [])) + len(config.get("rss_feeds", [])), "errors": errors[:12]}
    }
    OUTPUT.write_text("window.AI_FIRSTMOVE_LIVE = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"generated {len(payload['items'])} items; {len(errors)} source errors")
    for error in errors:
        print(f"warning: {error}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
