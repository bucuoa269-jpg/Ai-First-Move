'use client';

import { useState } from 'react';
import { Check, Copy, Share2, Trash2 } from 'lucide-react';

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const data = { title, text: `${title}｜AI先机`, url: window.location.href };
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(()=>setCopied(false),1500); }
  };
  const copy = async () => { await navigator.clipboard.writeText(`${title}\n${window.location.href}`); setCopied(true); setTimeout(()=>setCopied(false),1500); };
  return <div style={{display:'flex',gap:8,flexWrap:'wrap'}}><button className="small-btn" onClick={share}><Share2 size={14}/>分享</button><button className="small-btn" onClick={copy}>{copied?<Check size={14}/>:<Copy size={14}/>}复制摘要</button></div>;
}

export function ClearLocalData(){
  const [done,setDone]=useState(false);
  const clear=()=>{ localStorage.removeItem('ai-firstmove-saved'); localStorage.removeItem('ai-firstmove-history'); setDone(true); };
  return <button className="btn" onClick={clear}><Trash2 size={16}/>{done?'已清除本地记录':'清除收藏与搜索记录'}</button>;
}
