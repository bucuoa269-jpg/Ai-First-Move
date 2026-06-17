'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Opportunity, OpportunityType } from '@/lib/types';
import OpportunityCard from './OpportunityCard';

export default function ExplorerClient({ items, emptyText = '暂无符合条件的已核验机会。' }: { items: Opportunity[]; emptyText?: string }) {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('all');
  const [city, setCity] = useState('all');
  const [sort, setSort] = useState('score');
  const cities = Array.from(new Set(items.map(x => x.city).filter(Boolean))) as string[];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let base = items.filter(item => (level === 'all' || item.sourceLevel === level) && (city === 'all' || item.city === city));
    let arr = base;
    if (q) {
      const fuse = new Fuse(base, { keys: ['title','summary','insight','city','domains','audienceTags'], threshold: 0.36, ignoreLocation: true });
      arr = fuse.search(q).map(result => result.item);
    }
    arr = [...arr].sort((a,b) => sort === 'score' ? b.score-a.score : (b.lastVerifiedAt || '').localeCompare(a.lastVerifiedAt || ''));
    return arr;
  }, [items, query, level, city, sort]);
  return (
    <div className="workspace" style={{gridTemplateColumns:'210px minmax(0,1fr)'}}>
      <aside className="sidebar">
        <div className="filter-card">
          <h4>筛选</h4>
          <div style={{position:'relative',marginBottom:10}}><Search size={15} style={{position:'absolute',left:10,top:11,color:'#98a2b3'}}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="搜索关键词" style={{width:'100%',padding:'9px 10px 9px 32px',border:'1px solid var(--border)',borderRadius:10,outline:'none'}}/></div>
          <label style={{display:'grid',gap:5,fontSize:12,color:'#667085',marginBottom:10}}>信源等级<select className="select" value={level} onChange={e => setLevel(e.target.value)}><option value="all">全部等级</option><option value="S">S · 官方</option><option value="A">A · 专业</option><option value="B">B · 分析/案例</option></select></label>
          {cities.length > 0 && <label style={{display:'grid',gap:5,fontSize:12,color:'#667085'}}>城市<select className="select" value={city} onChange={e => setCity(e.target.value)}><option value="all">全部城市</option>{cities.map(c => <option key={c}>{c}</option>)}</select></label>}
        </div>
      </aside>
      <div className="feed">
        <div className="feed-toolbar"><strong>{filtered.length} 条机会</strong><label style={{display:'flex',alignItems:'center',gap:7,color:'#667085',fontSize:12}}><SlidersHorizontal size={14}/><select className="select" value={sort} onChange={e => setSort(e.target.value)}><option value="score">综合推荐</option><option value="fresh">最近核验</option></select></label></div>
        {filtered.length ? filtered.map(item => <OpportunityCard key={item.id} item={item}/>) : <div className="empty">{emptyText}</div>}
      </div>
    </div>
  );
}
