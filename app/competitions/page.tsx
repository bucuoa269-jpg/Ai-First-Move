import SectionPage from '@/components/SectionPage'; import { opportunities } from '@/lib/data';
export default function Page(){ return <SectionPage eyebrow="比赛、黑客松与创作者激励" title="比赛雷达：奖金之外，更重要的是作品与连接" description="聚合高校赛事、开发者挑战和平台创作活动，显示官方入口、资格、截止状态与版权提醒。" items={opportunities.filter(x=>['competition','event','creator_program'].includes(x.type))} note="截止时间与规则可能临时调整。报名、提交作品和授权前，必须再次打开官方页面核对。"/>; }
