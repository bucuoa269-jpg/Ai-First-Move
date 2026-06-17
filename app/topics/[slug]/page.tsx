import { notFound } from 'next/navigation';
import SectionPage from '@/components/SectionPage';
import { opportunities } from '@/lib/data';
const topics: Record<string,{name:string;keys:string[];description:string}> = {
  'ai-video':{name:'AI 视频',keys:['AI视频','动画','内容创作'],description:'创作比赛、视频服务、动画出海与本地商家内容。'},
  'ai-design':{name:'AI 设计',keys:['AI设计','PPT'],description:'海报、PPT、作品集和创作者活动。'},
  'ai-writing':{name:'AI 写作与商业表达',keys:['AI写作','PPT','商业计划书'],description:'从生成文字转向结构、证据和表达结果。'},
  'ai-coding':{name:'AI 编程',keys:['AI编程','算法','开源'],description:'比赛、学生资源、应用开发和作品集。'},
  'automation':{name:'AI 自动化与智能体',keys:['AI自动化','智能体'],description:'流程诊断、智能体比赛和企业提效实验。'},
  'ai-jobs':{name:'AI 求职',keys:['AI求职','实习'],description:'官方校招、日常实习和项目作品集。'},
  'ai-global':{name:'AI 出海',keys:['AI出海','出海'],description:'双语落地页、全球平台与机会迁移。'},
  'competitions':{name:'AI 比赛',keys:['比赛','高校赛事','黑客松'],description:'高校、平台和开发者赛事。'}
};
export function generateStaticParams(){return Object.keys(topics).map(slug=>({slug}));}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const topic=topics[slug]; if(!topic)notFound(); const items=opportunities.filter(x=>x.domains.some(d=>topic.keys.some(k=>d.includes(k)))||topic.keys.some(k=>x.title.includes(k))); return <SectionPage eyebrow="专题专栏" title={topic.name} description={topic.description} items={items}/>;}
