import SiteShell from '@/components/SiteShell'; import LocalRecords from '@/components/LocalRecords';
export default function Page(){return <SiteShell><main className="container"><section className="page-hero"><span className="eyebrow">仅保存在本机</span><h1>我的本地记录</h1><p>无需账号。收藏与最近搜索只保存在当前浏览器，你可以随时清除。</p></section><LocalRecords/></main></SiteShell>}
