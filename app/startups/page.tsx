import SectionPage from '@/components/SectionPage'; import { opportunities } from '@/lib/data';
export default function Page(){ return <SectionPage eyebrow="低成本创业实验" title="不先注册公司，先完成一次证伪" description="把AI热点转化为问题假设、目标客户、最小可售产品、7天MVP和停止条件。" items={opportunities.filter(x=>x.type==='startup')} note="创业实验不构成投资或收益建议。优先访谈、预售和真实使用，再决定是否扩大投入。"/>; }
