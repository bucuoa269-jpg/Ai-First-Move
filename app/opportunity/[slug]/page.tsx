import { notFound } from 'next/navigation';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import ShareButtons from '@/components/ShareButtons';
import ShareCardPreview from '@/components/ShareCardPreview';
import Link from 'next/link';
import { opportunities, opportunityBySlug, typeLabels } from '@/lib/data';

export function generateStaticParams(){ return opportunities.map(item=>({slug:item.slug})); }

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const item=opportunityBySlug(slug); if(!item) notFound();
  return <SiteShell><main className="container"><section className="page-hero"><div className="op-title-row"><span className="badge type">{typeLabels[item.type]}</span><span className={`badge ${item.sourceLevel.toLowerCase()}`}>{item.sourceLevel} · {item.sourceLevel==='S'?'官方来源':item.editorial?'编辑分析':'专业/案例'}</span></div><h1>{item.title}</h1><p>{item.summary}</p><ShareButtons title={item.title}/></section>
  <div className="detail-grid"><article className="detail-main">
    <h2>AI先机判断</h2><p className="op-insight">{item.insight}</p>
    <h2>为什么值得关注</h2><p>{item.demandEvidence}</p>
    {item.editorial && <div className="notice">这是一张编辑分析或商业实验卡，不是官方收益结论。必须通过真实访谈、预售、定金或使用数据重新验证。</div>}
    <h2>第一位客户 / 第一份反馈从哪里来</h2><p>{item.firstCustomerPath}</p>
    <h2>最小交付物</h2><p>{item.minimumDeliverable}</p>
    <h2>3日启动计划</h2><ol className="step-list">{item.actionPlan3Days.map((s,i)=><li key={s}><span className="step-num">{i+1}</span><span>{s}</span></li>)}</ol>
    <h2>7日验证计划</h2><ol className="step-list">{item.actionPlan7Days.map((s,i)=><li key={s}><span className="step-num">{i+1}</span><span>{s}</span></li>)}</ol>
    <h2>停止条件</h2><ul>{item.stopConditions.map(s=><li key={s}>{s}</li>)}</ul>
    <h2>风险提示</h2><ul>{item.risks.map(s=><li key={s}>{s}</li>)}</ul>
    <h2>来源账本</h2><div className="source-ledger">{[...item.discoverySources,...item.confirmationSources].map((s,i)=>s.url.startsWith('http')?<a className="source-row" href={s.url} target="_blank" rel="noreferrer" key={`${s.url}-${i}`}><strong>{s.name}</strong><span>{s.kind==='official'?'官方/原始来源':s.kind==='professional'?'专业分析':'案例或线索'} · 打开核验 <ExternalLink size={11} style={{verticalAlign:'middle'}}/></span></a>:<Link className="source-row" href={s.url} key={`${s.url}-${i}`}><strong>{s.name}</strong><span>查看本站方法说明</span></Link>)}</div>
  </article>
  <aside className="detail-side">
    <div className="panel"><h3 style={{marginTop:0}}>机会摘要</h3><div className="info-grid"><div className="info-cell"><span>综合机会分</span><strong>{item.score}/100</strong></div><div className="info-cell"><span>信源等级</span><strong>{item.sourceLevel}</strong></div><div className="info-cell"><span>启动成本</span><strong>{item.startupCost}</strong></div><div className="info-cell"><span>验证周期</span><strong>{item.timeToValidate}</strong></div><div className="info-cell"><span>地区</span><strong>{item.city||item.country}</strong></div><div className="info-cell"><span>最后核验</span><strong>{item.lastVerifiedAt}</strong></div></div></div>
    <div className="panel"><h3 style={{marginTop:0}}>谁可能付钱</h3><p style={{color:'#475467',fontSize:14}}>{item.whoPays}</p><h3>可能的路径</h3><div className="tag-row">{item.monetizationPaths.map(x=><span className="mini-tag" key={x}>{x}</span>)}</div></div>
    {item.deadlineAt && <div className="panel"><h3 style={{marginTop:0}}>截止时间</h3><strong style={{fontSize:22}}>{item.deadlineAt}</strong><p style={{color:'#667085',fontSize:12}}>日期可能临时调整，提交前请再次核对官方页面。</p></div>}
    <ShareCardPreview title={item.title} score={item.score} level={item.sourceLevel} verified={item.lastVerifiedAt}/>
    {item.officialUrl && <a className="btn primary" href={item.officialUrl} target="_blank" rel="noreferrer">打开官方入口 <ExternalLink size={16}/></a>}
    <div className="notice"><ShieldCheck size={15} style={{verticalAlign:'middle',marginRight:5}}/>本站不保证收益。活动、岗位、资格和版权条款以官方页面为准。</div>
  </aside></div></main></SiteShell>;
}
