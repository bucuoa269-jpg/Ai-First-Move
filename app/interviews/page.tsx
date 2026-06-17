import { ExternalLink, Headphones, ShieldCheck } from 'lucide-react';
import { interviews } from '@/lib/interviews';

export const metadata = {
  title: '深度访谈｜AI先机',
  description: '从播客与深度访谈中提炼真实创业过程、可迁移经验和不可复制因素。'
};

export default function InterviewsPage() {
  return (
    <main className="container">
      <section className="page-hero">
        <span className="eyebrow"><Headphones size={14}/> 案例不是结论 · 过程比标题重要</span>
        <h1>深度访谈</h1>
        <p>从公开播客和创业者访谈中提炼“第一位客户、交付路径、失败经验与迁移条件”。所有收入数字均按当事人自述处理，不代表普遍结果。</p>
      </section>

      <div className="notice" style={{marginBottom: 18}}>
        <strong>证据规则：</strong>访谈默认属于 B 级案例证据。节目可以帮助发现机会与理解过程，但不能替代官方规则、市场数据和独立核验。
      </div>

      <section className="interview-grid">
        {interviews.map(item => (
          <article className="interview-card" key={item.id}>
            <div className="interview-head">
              <div>
                <span className="badge b">B级 · 访谈案例</span>
                <h2>{item.title}</h2>
                <p>{item.show} · {item.guest} · {item.publishedAt} · {item.duration}</p>
              </div>
              <Headphones size={24}/>
            </div>
            <p className="interview-summary">{item.summary}</p>
            <div className="interview-signal"><strong>机会信号</strong><p>{item.opportunitySignal}</p></div>
            <div className="interview-columns">
              <div><h3>可迁移经验</h3><ul>{item.transferableLessons.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><h3>不能照搬</h3><ul>{item.nonTransferableNotes.map(x => <li key={x}>{x}</li>)}</ul></div>
            </div>
            <div className="tag-row">{item.tags.map(tag => <i className="mini-tag" key={tag}>{tag}</i>)}</div>
            <div className="interview-foot">
              <span><ShieldCheck size={14}/>{item.evidenceNote}</span>
              <a className="btn" href={item.url} target="_blank" rel="noreferrer">打开公开节目页 <ExternalLink size={14}/></a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
