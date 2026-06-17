'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, Bookmark, Bot, Compass, Home, MapPinned, Moon, Search, Sparkles, Sun } from 'lucide-react';

const nav = [
  ['机会流', '/feed/'], ['稳副业', '/side-hustles/'], ['创业实验', '/startups/'], ['找工作', '/jobs/'],
  ['比赛雷达', '/competitions/'], ['城市地图', '/cities/'], ['时间机器', '/time-machine/'], ['全球视野', '/global/'], ['深度访谈', '/interviews/']
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = localStorage.getItem('ai-firstmove-theme'); const enabled = saved === 'dark'; setDark(enabled); document.documentElement.dataset.theme = enabled ? 'dark' : 'light'; }, []);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('ai-firstmove-theme', next ? 'dark' : 'light'); };
  const openSearch = () => {
    window.dispatchEvent(new CustomEvent('ai-firstmove-focus-search'));
    if (pathname !== '/') window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#ai-search`;
  };
  return (
    <div className="page">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="AI先机首页">
            <span className="logo-mark"><Sparkles size={18} /></span>
            <span>AI先机<small>AI FirstMove</small></span>
          </Link>
          <nav className="nav" aria-label="主导航">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="切换深色模式" onClick={toggleTheme}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
            <button className="icon-btn" aria-label="搜索" onClick={openSearch}><Search size={17} /></button>
            <Link className="icon-btn" aria-label="信源说明" href="/sources/"><Bell size={17} /></Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Link href="/" className="logo"><span className="logo-mark"><Sparkles size={18}/></span><span>AI先机<small>AI Native 青年机会地图</small></span></Link>
            <p>国内优先，全球参照。把 AI 热点转化为可核验、可执行的青年机会。</p>
            <p>不保证收益，不替代官方规则。比赛、岗位和活动请以官方页面为准。</p>
          </div>
          <div><h4>发现机会</h4><div className="footer-links"><Link href="/side-hustles/">稳副业</Link><Link href="/jobs/">找工作</Link><Link href="/competitions/">比赛雷达</Link></div></div>
          <div><h4>理解机会</h4><div className="footer-links"><Link href="/time-machine/">时间机器</Link><Link href="/global/">全球视野</Link><Link href="/interviews/">深度访谈</Link><Link href="/sources/">信源说明</Link></div></div>
          <div><h4>关于</h4><div className="footer-links"><Link href="/about/">产品与免责声明</Link><a href="mailto:feedback@example.com">反馈与纠错</a><Link href="/cities/">城市机会</Link></div></div>
        </div>
      </footer>
      <nav className="bottom-nav" aria-label="移动端导航">
        <Link className={pathname === '/' ? 'active' : ''} href="/"><Home size={18}/><span>今日</span></Link>
        <Link className={pathname.includes('side-hustles') ? 'active' : ''} href="/side-hustles/"><Compass size={18}/><span>分类</span></Link>
        <button className="active" onClick={openSearch}><Bot size={19}/><span>AI搜索</span></button>
        <Link className={pathname.includes('cities') ? 'active' : ''} href="/cities/"><MapPinned size={18}/><span>城市</span></Link>
        <Link className={pathname.includes('local') ? 'active' : ''} href="/local/"><Bookmark size={18}/><span>本地记录</span></Link>
      </nav>
    </div>
  );
}
