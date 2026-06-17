import SiteShell from '@/components/SiteShell';

const levels = [
  ['S · 一手官方','政府、高校、主办方、企业官网、官方招聘页、官方产品文档、原始仓库与论文。','不代表内容永远有效，仍需检查截止和页面更新。'],
  ['A · 高可信专业','有方法说明的研究报告、权威行业媒体、专业机构和企业官方公众号。','适合解释背景，但涉及报名、岗位和价格时应回到官方页。'],
  ['B · 可追溯案例 / 编辑分析','创业者复盘、公开产品案例，或AI先机基于公开能力提出的商业实验。','不能当作普遍收益结论，必须用访谈、预售或真实使用验证。'],
  ['C · 社交线索','小红书、抖音、B站、社群和单个收入截图。','只用于发现线索，发布前需寻找官方或独立确认来源。'],
  ['D · 高风险','保证收益、拉人头、冒充官方、隐藏项目内容、侵权搬运。','默认不推荐，仅用于风险教育。']
];
export default function Page(){return <SiteShell><main className="container"><section className="page-hero"><span className="eyebrow">Source Ledger</span><h1>信源不是装饰，而是产品的底座</h1><p>每条信息同时记录“在哪里发现”和“由什么确认”。官方链接优先，但官方来源也可能过期，因此仍需显示最后核验时间。</p></section><section className="section" style={{paddingTop:10}}><div className="feed">{levels.map((l,i)=><article className="op-card" key={l[0]}><div className="op-title-row"><span className={`badge ${['s','a','b','c','d'][i]}`}>{l[0]}</span></div><h3>{l[1]}</h3><p>{l[2]}</p></article>)}</div></section><section className="section"><div className="detail-main"><h2>综合机会分</h2><p>信源可靠度 25 + 信息新鲜度 15 + 青年执行度 15 + 行动清晰度 10 + 需求与变现证据 15 + 本地适配度 10 + 时间窗口 5 + 安全合规 5 − 风险扣分 0—30。</p><h2>编辑原则</h2><ul><li>招聘超过30天要求复核，岗位状态以企业官网为准。</li><li>比赛每天检查截止状态，提交前再次核对官方规则。</li><li>社交内容只能作为线索或案例，不能自动升级为事实。</li><li>编辑分析必须标明“待验证”，不得写成保证收入。</li><li>赞助、返佣和广告不改变信源等级与编辑评分。</li></ul></div></section></main></SiteShell>}
