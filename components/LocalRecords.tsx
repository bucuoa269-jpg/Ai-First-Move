'use client';
import { useEffect, useState } from 'react';
import { opportunities } from '@/lib/data';
import OpportunityCard from './OpportunityCard';
import { ClearLocalData } from './ShareButtons';
export default function LocalRecords(){
  const [ids,setIds]=useState<string[]>([]); const [history,setHistory]=useState<string[]>([]);
  useEffect(()=>{setIds(JSON.parse(localStorage.getItem('ai-firstmove-saved')||'[]'));setHistory(JSON.parse(localStorage.getItem('ai-firstmove-history')||'[]'));},[]);
  const saved=opportunities.filter(x=>ids.includes(x.id));
  return <><div className="detail-grid"><div><h2 className="section-title">我的收藏</h2><div className="feed" style={{marginTop:16}}>{saved.length?saved.map(x=><OpportunityCard key={x.id} item={x}/>):<div className="empty">还没有收藏。打开任意机会卡，点击“收藏”即可保存在本机。</div>}</div></div><aside className="detail-side"><div className="panel"><h3 style={{marginTop:0}}>最近搜索</h3>{history.length?<ol style={{paddingLeft:20,color:'#475467'}}>{history.map(x=><li key={x}>{x}</li>)}</ol>:<p style={{color:'#667085'}}>还没有本地搜索记录。</p>}<ClearLocalData/></div></aside></div></>;
}
