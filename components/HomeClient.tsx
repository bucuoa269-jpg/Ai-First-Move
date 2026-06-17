'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, BriefcaseBusiness, Building2, CalendarClock, CheckCircle2, ChevronRight, FileUp, Globe2, MapPinned, Mic, MicOff, Search, ShieldCheck, Sparkles, Timer, Trophy, X } from 'lucide-react';
import { cities, opportunities, typeLabels } from '@/lib/data';
import { interviews } from '@/lib/interviews';
import type { Opportunity, OpportunityType } from '@/lib/types';
import OpportunityCard from './OpportunityCard';

const filters: Array<{ label: string; value: 'all' | OpportunityType }> = [
  { label: '全部机会', value: 'all' }, { label: '稳副业', value: 'side_hustle' }, { label: '创业实验', value: 'startup' }, { label: '找工作', value: 'job' }, { label: '比赛', value: 'competition' }, { label: '全球/时间机器', value: 'global_case' }
];

function scoreForQuery(item: Opportunity, query: string) {
  const q = query.toLowerCase();
  let score = item.score;
  const corpus = [item.title, item.summary, item.insight, item.city || '', item.country, ...item.domains, ...item.audienceTags, typeLabels[item.type]].join(' ').toLowerCase();
  const tokens = q.split(/[\s，。,.、;；]+/).filter(Boolean);
  tokens.forEach(token => { if (corpus.includes(token)) score += 14; });
  const maps: Array<[RegExp, (i: Opportunity) => boolean, number]> = [
    [/副业|赚钱|变现/, i => i.type === 'side_hustle', 22], [/创业|产品|mvp/i, i => i.type === 'startup', 22], [/工作|岗位|实习|校招/, i => i.type === 'job', 24], [/比赛|黑客松|大赛/, i => ['competition','event','creator_program'].includes(i.type), 24], [/视频|剪辑/, i => i.domains.some(d => d.includes('视频')), 18], [/编程|开发|代码/, i => i.domains.some(d => /编程|智能体|算法/.test(d)), 18], [/成都/, i => i.city === '成都' || i.online, 16], [/杭州/, i => i.city === '杭州' || i.online, 16], [/深圳/, i => i.city === '深圳' || i.online, 16], [/北京/, i => i.city === '北京' || i.online, 16], [/不出镜/, i => i.audienceTags.includes('不想出镜') || !i.domains.includes('内容创作'), 10], [/低成本|预算.?[0-3]00|0元/, i => /0—|0—低|0元/.test(i.startupCost), 14], [/官方/, i => i.sourceLevel === 'S', 18], [/出海|海外|全球/, i => i.country.includes('全球') || i.domains.includes('AI出海'), 20]
  ];
  maps.forEach(([regex, fn, bonus]) => { if (regex.test(q) && fn(item)) score += bonus; });
  return score;
}

export default function HomeClient() {
  const [filter, setFilter] = useState<'all' | OpportunityType>('all');
  const [sort, setSort] = useState('score');
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<Opportunity[] | null>(null);
  const [listening, setListening] = useState(false);
  const [fileMessage, setFileMessage] = useState('');
  const searchRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const fn = () => searchRef.current?.focus();
    window.addEventListener('ai-firstmove-focus-search', fn);
    const key = (e: KeyboardEvent) => { if (e.key === '/' && document.activeElement?.tagName !== 'TEXTAREA' && document.activeElement?.tagName !== 'INPUT') { e.preventDefault(); searchRef.current?.focus(); } };
    window.addEventListener('keydown', key);
    return () => { window.removeEventListener('ai-firstmove-focus-search', fn); window.removeEventListener('keydown', key); };
  }, []);

  const top = [...opportunities].filter(x => x.verificationStatus !== 'ended').sort((a,b) => b.score - a.score).slice(0,5);
  const closing = opportunities.filter(x => x.deadlineAt && new Date(x.deadlineAt) >= new Date('2026-06-18')).sort((a,b) => (a.deadlineAt || '').localeCompare(b.deadlineAt || '')).slice(0,4);
  const feed = useMemo(() => {
    let arr = filter === 'all' ? opportunities : opportunities.filter(item => item.type === filter || (filter === 'competition' && ['event','creator_program'].includes(item.type)));
    arr = arr.filter(item => item.verificationStatus !== 'ended');
    return [...arr].sort((a,b) => sort === 'fresh' ? (b.lastVerifiedAt || '').localeCompare(a.lastVerifiedAt || '') : b.score - a.score).slice(0,18);
  }, [filter, sort]);

  const runSearch = () => {
    const q = query.trim() || '大学生 低成本 官方机会';
    const ranked = [...opportunities].filter(x => x.verificationStatus !== 'ended').map(item => ({ item, score: scoreForQuery(item, q) })).sort((a,b) => b.score - a.score).slice(0,5).map(x => x.item);
    setRecommendations(ranked);
    const history = JSON.parse(localStorage.getItem('ai-firstmove-history') || '[]') as string[];
    localStorage.setItem('ai-firstmove-history', JSON.stringify([q, ...history.filter(x => x !== q)].slice(0,10)));
  };

  const startVoice = () => {
    const w = window as typeof window & { webkitSpeechRecognition?: new () => { lang: string; continuous: boolean; interimResults: boolean; start: () => void; stop: () => void; onresult: (event: { results: ArrayLike<{ 0: { transcript: string } }> }) => void; onend: () => void; onerror: () => void; } };
    if (!w.webkitSpeechRecognition) { setFileMessage('当前浏览器不支持语音输入，请使用 Chrome 或直接输入文字。'); return; }
    const recognition = new w.webkitSpeechRecognition();
    recognition.lang = 'zh-CN'; recognition.continuous = false; recognition.interimResults = false;
    recognition.onresult = e => setQuery(prev => `${prev} ${e.results[0][0].transcript}`.trim());
    recognition.onend = () => setListening(false); recognition.onerror = () => setListening(false);
    setListening(true); recognition.start();
  };

  const handleFile = async (file?: File) => {
    if (!file) return;
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext === 'txt' || ext === 'md') {
      const text = await file.text(); setQuery(text.slice(0,4000)); setFileMessage(`已读取 ${file.name}`);
    } else {
      setFileMessage('当前纯前端版仅直接解析 TXT/MD；PDF/DOCX 入口已保留，接入服务端解析后即可启用。');
    }
  };

  return (
    <>
      <section className="hero"><div className="container hero-grid">
        <div>
          <span className="eyebrow"><Sparkles size={14}/> 国内优先 · 全球参照 · 官方链接优先</span>
          <h1>今天的 AI 变化，<span className="gradient-text">和你有什么关系？</span></h1>
          <p className="hero-copy">聚合副业、创业、求职、比赛和城市机会。不是只告诉你发生了什么，而是告诉你：是否可信、谁适合、第一步做什么。</p>
          <div className="hero-actions"><button className="btn primary" onClick={() => searchRef.current?.focus()}><Bot size={17}/>问问 AI，帮我找机会</button><a className="btn ghost" href="#today">直接浏览今日机会 <ArrowRight size={16}/></a></div>
          <div className="hero-proof"><span><CheckCircle2 size={15}/>免注册、免登录</span><span><ShieldCheck size={15}/>官方来源优先</span><span><Timer size={15}/>显示截止与核验时间</span></div>
        </div>
        <div className="search-panel" id="ai-search">
          <div className="search-panel-head"><div><h3>AI 一键寻找机会</h3><small>无 API 也可用，本地标签与权重推荐</small></div><Bot size={21} color="#2563eb"/></div>
          <div className="search-box"><textarea ref={searchRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="例如：我在成都读大三，会剪视频，每周有10小时，预算200元，不想出镜，想找一个能尽快验证的AI副业。"/><button className="mic-btn" aria-label="语音输入" onClick={startVoice}>{listening ? <MicOff size={17}/> : <Mic size={17}/>}</button></div>
          <div className="search-tools"><label className="upload-label"><FileUp size={15}/>上传需求文档<input type="file" accept=".txt,.md,.pdf,.docx" onChange={e => handleFile(e.target.files?.[0])}/></label><button className="btn primary" onClick={runSearch}><Search size={16}/>开始匹配</button></div>
          {fileMessage && <div className="notice" style={{marginTop:10}}>{fileMessage}</div>}
          <div className="example-chips">
            {['成都｜会剪视频｜低成本副业','只看官方比赛｜仍可报名','杭州｜2027届｜AI产品实习','不出镜｜会写作｜7天验证'].map(text => <button key={text} className="chip" onClick={() => setQuery(text)}>{text}</button>)}
          </div>
        </div>
      </div></section>

      <main className="container">
        <div className="stats">
          <div className="stat"><strong>{opportunities.length}</strong><span>首批结构化机会</span></div>
          <div className="stat"><strong>{opportunities.filter(x => x.sourceLevel === 'S').length}</strong><span>S级官方入口</span></div>
          <div className="stat"><strong>{cities.length}</strong><span>首批城市索引</span></div>
          <div className="stat"><strong>0</strong><span>保证收益承诺</span></div>
        </div>

        <section className="section" id="today">
          <div className="section-head"><div><h2 className="section-title">今日最值得关注 TOP 5</h2><p className="section-kicker">按信源、时效、青年执行度和行动清晰度综合排序</p></div><Link className="text-link" href="/feed/">查看完整机会流 <ChevronRight size={15}/></Link></div>
          <div className="top-grid">
            <div className="top-list">{top.map((item,index) => <Link className="top-card" href={`/opportunity/${item.slug}/`} key={item.id}><span className="rank">{index+1}</span><div><h3>{item.title}</h3><p>{item.insight}</p></div><div className="score"><strong>{item.score}</strong><small>{item.sourceLevel}级</small></div></Link>)}</div>
            <aside className="deadline-panel"><CalendarClock size={23}/><h3>即将截止</h3><p>先处理有时间窗口的机会，再看长期项目。</p>{closing.map(item => <Link key={item.id} href={`/opportunity/${item.slug}/`} className="deadline-item"><strong>{item.title}</strong><span>{item.deadlineAt} · {item.sourceLevel}级来源</span></Link>)}</aside>
          </div>
        </section>

        <section className="section">
          <div className="section-head"><div><h2 className="section-title">机会流</h2><p className="section-kicker">官方活动与编辑分析严格分层，避免把推断伪装成事实</p></div></div>
          <div className="workspace">
            <aside className="sidebar"><div className="filter-card"><h4>机会类型</h4><div className="filter-list">{filters.map(f => <button key={f.value} className={`filter-btn ${filter===f.value?'active':''}`} onClick={() => setFilter(f.value)}><span>{f.label}</span><em>{f.value==='all'?opportunities.length:opportunities.filter(x => x.type===f.value).length}</em></button>)}</div></div></aside>
            <div className="feed"><div className="feed-toolbar"><strong>当前显示 {feed.length} 条</strong><select className="select" value={sort} onChange={e => setSort(e.target.value)}><option value="score">综合推荐</option><option value="fresh">最近核验</option></select></div>{feed.map(item => <OpportunityCard key={item.id} item={item}/>)}</div>
            <aside className="rightbar">
              <div className="aside-card"><h4>四条主线</h4><div className="aside-metric"><span className="aside-icon"><BriefcaseBusiness size={17}/></span><div><strong>稳副业</strong><span>先找付款人，再做交付</span></div></div><div className="aside-metric"><span className="aside-icon"><Building2 size={17}/></span><div><strong>创业实验</strong><span>7天MVP，不先注册公司</span></div></div><div className="aside-metric"><span className="aside-icon"><Trophy size={17}/></span><div><strong>比赛与求职</strong><span>作品集、资源和岗位</span></div></div></div>
              <div className="aside-card"><h4>城市雷达</h4><div className="city-cloud">{cities.map(city => <Link className="city-pill" key={city.slug} href={`/cities/${city.slug}/`}>{city.name}</Link>)}</div></div>
              <div className="aside-card"><h4>信息说明</h4><p style={{fontSize:12,color:'#667085',margin:0}}>S级代表官方原始来源；B级编辑分析必须由用户自行完成市场验证。</p><Link className="text-link" style={{marginTop:10}} href="/sources/">查看评分方法 <ChevronRight size={14}/></Link></div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="section-head"><div><h2 className="section-title">热门专题</h2><p className="section-kicker">从一个热门能力，直接查看副业、岗位、比赛与全球样板</p></div></div>
          <div className="topic-grid">
            {[
              ['AI 视频','ai-video','平台赛事、短片样片与本地商家内容'],
              ['AI 设计','ai-design','海报、PPT、作品集与创作者活动'],
              ['AI 写作与 PPT','ai-writing','商业表达、结构重写与文档服务'],
              ['AI 编程','ai-coding','应用开发、开源资源与黑客松'],
              ['自动化与智能体','automation','工作流诊断、交付与企业提效'],
              ['AI 求职','ai-jobs','校招、实习、城市岗位与作品集'],
              ['AI 出海','ai-global','全球平台、双语交付与机会迁移'],
              ['AI 比赛','competitions','高校、平台与开发者赛事']
            ].map(([name,slug,desc]) => <Link className="topic-card" href={`/topics/${slug}/`} key={slug}><span><Sparkles size={17}/></span><strong>{name}</strong><p>{desc}</p></Link>)}
          </div>
        </section>

        <section className="section">
          <div className="section-head"><div><h2 className="section-title">深度访谈</h2><p className="section-kicker">不只摘金句：提炼第一位客户、交付路径和不能照搬的条件</p></div><Link className="text-link" href="/interviews/">进入案例库 <ChevronRight size={15}/></Link></div>
          <div className="top-list">{interviews.map(item => <a className="top-card" href={item.url} target="_blank" rel="noreferrer" key={item.id}><span className="rank">B</span><div><h3>{item.title}</h3><p>{item.opportunitySignal}</p></div><div className="score"><strong>{item.show}</strong><small>{item.publishedAt}</small></div></a>)}</div>
        </section>

        <section className="section"><div className="section-head"><div><h2 className="section-title">城市机会</h2><p className="section-kicker">从全国泛资讯，走向可到达的岗位、活动和本地客户</p></div><Link className="text-link" href="/cities/">全部城市 <ChevronRight size={15}/></Link></div><div className="city-strip">{cities.slice(0,10).map(city => <Link className="city-card" href={`/cities/${city.slug}/`} key={city.slug}><strong>{city.name}</strong><span>{city.tagline}</span><div className="tag-row">{city.tags.map(tag => <i className="mini-tag" key={tag}>{tag}</i>)}</div></Link>)}</div></section>

        <section className="section"><div className="callout"><div><h2>时间机器：从“看见海外”到“完成本地验证”</h2><p>分析原市场证据、目标市场信号、支付与获客差异，再生成最小迁移实验。</p></div><Link className="btn primary" href="/time-machine/">查看机会迁移 <Globe2 size={17}/></Link></div></section>
      </main>

      {recommendations && <div className="recommend-drawer" role="dialog" aria-modal="true"><div className="recommend-panel"><div className="drawer-head"><div><small>本地推荐结果</small><h2>为你匹配的 5 条机会</h2></div><button className="icon-btn" onClick={() => setRecommendations(null)}><X size={18}/></button></div><div className="recommend-summary"><strong>你的需求</strong><p>{query || '大学生、低成本、官方机会'}</p></div><div className="feed">{recommendations.map(item => <OpportunityCard key={item.id} item={item}/>)}</div></div></div>}
    </>
  );
}
