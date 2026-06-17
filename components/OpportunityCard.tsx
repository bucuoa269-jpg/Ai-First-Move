'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Bookmark, BookmarkCheck, CalendarClock, ExternalLink, MapPin, ShieldCheck, Timer, WalletCards } from 'lucide-react';
import type { Opportunity } from '@/lib/types';
import { typeLabels } from '@/lib/data';

const statusLabel: Record<Opportunity['verificationStatus'], string> = {
  verified: '已核验', partially_verified: '部分核验', pending_verification: '等待复核', closing_soon: '即将截止', ended: '已结束', ongoing: '持续开放'
};

export default function OpportunityCard({ item, compact = false }: { item: Opportunity; compact?: boolean }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('ai-firstmove-saved') || '[]') as string[];
    setSaved(ids.includes(item.id));
  }, [item.id]);
  const toggleSaved = () => {
    const ids = JSON.parse(localStorage.getItem('ai-firstmove-saved') || '[]') as string[];
    const next = ids.includes(item.id) ? ids.filter(id => id !== item.id) : [...ids, item.id];
    localStorage.setItem('ai-firstmove-saved', JSON.stringify(next));
    setSaved(next.includes(item.id));
  };
  return (
    <article className="op-card">
      <div className="op-card-head">
        <div>
          <div className="op-title-row">
            <span className="badge type">{typeLabels[item.type]}</span>
            <span className={`badge ${item.sourceLevel.toLowerCase()}`}>{item.sourceLevel} · {item.sourceLevel === 'S' ? '官方' : item.editorial ? '分析建议' : '专业/案例'}</span>
            {item.editorial && <span className="badge type">编辑分析</span>}
          </div>
          <Link href={`/opportunity/${item.slug}/`}><h3>{item.title}</h3></Link>
          <p>{item.summary}</p>
        </div>
        <div className="score"><strong>{item.score}</strong><small>机会分</small></div>
      </div>
      {!compact && <p className="op-insight"><strong>AI先机判断：</strong>{item.insight}</p>}
      <div className="op-meta">
        <span><ShieldCheck size={14}/>{statusLabel[item.verificationStatus]}</span>
        <span><MapPin size={14}/>{item.city || (item.online ? '线上' : item.country)}</span>
        <span><WalletCards size={14}/>{item.startupCost}</span>
        <span><Timer size={14}/>{item.timeToValidate}</span>
        {item.deadlineAt && <span><CalendarClock size={14}/>截止 {item.deadlineAt}</span>}
      </div>
      <div className="op-actions">
        <div className="op-actions-left">
          <button className={`small-btn ${saved ? 'saved' : ''}`} onClick={toggleSaved}>{saved ? <BookmarkCheck size={14}/> : <Bookmark size={14}/>} {saved ? '已收藏' : '收藏'}</button>
          <Link className="small-btn" href={`/opportunity/${item.slug}/`}>看行动方案</Link>
        </div>
        {item.officialUrl ? <a className="source-link" href={item.officialUrl} target="_blank" rel="noreferrer">官方入口 <ExternalLink size={13}/></a> : <Link className="source-link" href="/sources/">查看来源账本</Link>}
      </div>
    </article>
  );
}
