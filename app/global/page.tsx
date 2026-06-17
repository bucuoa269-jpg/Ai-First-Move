import SectionPage from '@/components/SectionPage'; import { opportunities } from '@/lib/data';
export default function Page(){ return <SectionPage eyebrow="全球视野" title="看见先发市场，但把行动落在国内" description="关注学生资源、开源展示、全球黑客松和竞赛生态；目的不是追逐所有海外热点，而是寻找可迁移的产品机制与能力标准。" items={opportunities.filter(x=>x.type==='global_case')} />; }
