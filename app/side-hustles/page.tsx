import SectionPage from '@/components/SectionPage'; import { opportunities } from '@/lib/data';
export default function Page(){ return <SectionPage eyebrow="求稳，不贩卖幻想" title="稳副业：先找到付款人，再做交付" description="优先选择低成本、1—7天可验证、不依赖侵权搬运和虚假宣传的服务。所有商业方向均为编辑分析，不代表保证收入。" items={opportunities.filter(x=>x.type==='side_hustle')} note="副业卡展示的是待验证商业假设。完成有效访谈或获得真实定金之前，不要把‘有人可能需要’当成‘市场已经成立’。"/>; }
