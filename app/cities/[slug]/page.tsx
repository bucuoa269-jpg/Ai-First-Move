import { notFound } from 'next/navigation';
import SiteShell from '@/components/SiteShell';
import ExplorerClient from '@/components/ExplorerClient';
import { cities, cityBySlug, opportunities } from '@/lib/data';

export function generateStaticParams(){ return cities.map(city=>({slug:city.slug})); }

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const city=cityBySlug(slug); if(!city) notFound();
  const direct=opportunities.filter(x=>x.city===city.name);
  const relevant=[...direct,...opportunities.filter(x=>x.online && x.country==='中国' && !direct.includes(x)).slice(0,6)];
  return <SiteShell><main className="container"><section className="page-hero"><span className="eyebrow">城市机会 · {city.name}</span><h1>{city.name} AI 机会地图</h1><p>{city.tagline}。这里优先显示城市直连岗位、活动和本地商业实验，同时补充可远程参与的全国官方机会。</p><div className="tag-row" style={{marginTop:16}}>{city.tags.map(t=><span className="badge type" key={t}>{t}</span>)}</div><div className="notice" style={{marginTop:18,maxWidth:860}}>{city.note} 当前城市页是可用的数据结构首版，企业数量、活动密度和生活成本尚需后续持续核验。</div></section><section className="section" style={{paddingTop:10}}><ExplorerClient items={relevant}/></section></main></SiteShell>;
}
