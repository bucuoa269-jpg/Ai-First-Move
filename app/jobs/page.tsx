import SectionPage from '@/components/SectionPage'; import { opportunities } from '@/lib/data';
export default function Page(){ return <SectionPage eyebrow="官方招聘入口优先" title="AI 找工作：按城市、公司和能力索引" description="从官方校招与实习入口开始，按岗位关键词反推简历、作品集和项目证据。具体岗位会快速变化，请进入官网实时筛选。" items={opportunities.filter(x=>x.type==='job')} note="本站不提供收费内推，不保证录用。所有岗位状态以企业官方招聘页面为准。"/>; }
