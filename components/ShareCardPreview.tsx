'use client';
import { useState } from 'react';
import { Square, RectangleVertical } from 'lucide-react';
export default function ShareCardPreview({title,score,level,verified}:{title:string;score:number;level:string;verified:string}){
  const [shape,setShape]=useState<'vertical'|'square'>('vertical');
  return <div className="panel"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10}}><h3 style={{margin:0}}>分享卡预览</h3><div style={{display:'flex',gap:5}}><button className={`small-btn ${shape==='vertical'?'saved':''}`} onClick={()=>setShape('vertical')} aria-label="9比16"><RectangleVertical size={14}/></button><button className={`small-btn ${shape==='square'?'saved':''}`} onClick={()=>setShape('square')} aria-label="1比1"><Square size={14}/></button></div></div><div className={`share-preview ${shape}`}><div><span>AI先机 · {level}级来源</span><h4>{title}</h4></div><div><strong>{score}</strong><small>综合机会分</small><p>最后核验 {verified}<br/>信息以官方页面为准</p></div></div><p style={{color:'#667085',fontSize:11,marginBottom:0}}>V2.1将加入PNG导出；当前可使用系统分享或复制链接。</p></div>;
}
