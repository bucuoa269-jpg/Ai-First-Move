import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import { cities, opportunities } from '@/lib/data';
import { ArrowRight, MapPinned } from 'lucide-react';

export default function Page(){
  return <SiteShell><main className="container"><section className="page-hero"><span className="eyebrow">城市机会地图</span><h1>把全国信息，变成你能到达的机会</h1><p>从北京、上海、深圳、杭州到成都、长沙、武汉等城市，按官方招聘、赛事活动和本地服务实验建立索引。城市标签只是导航，必须由真实数据持续校正。</p></section>
  <section className="section" style={{paddingTop:10}}><div className="city-strip" style={{gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))'}}>{cities.map(city=>{
    const count=opportunities.filter(x=>x.city===city.name).length;
    return <Link className="city-card" href={`/cities/${city.slug}/`} key={city.slug}><MapPinned size={21} color="#2563eb"/><strong style={{marginTop:12}}>{city.name}</strong><span>{city.tagline}</span><div className="tag-row">{city.tags.map(t=><i className="mini-tag" key={t}>{t}</i>)}</div><div className="op-actions" style={{marginTop:14}}><small style={{color:'#667085'}}>{count} 条城市直连机会</small><ArrowRight size={15} color="#2563eb"/></div></Link>})}</div></section></main></SiteShell>;
}
