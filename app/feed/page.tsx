import SectionPage from '@/components/SectionPage';
import { opportunities } from '@/lib/data';
export default function Page(){ return <SectionPage eyebrow="完整机会流" title="从一条信息，到一次真实行动" description="查看首批经过结构化的官方机会与编辑分析。S级是官方原始来源，B级分析必须通过用户访谈和市场实验重新验证。" items={opportunities.filter(x=>x.verificationStatus!=='ended')}/>; }
