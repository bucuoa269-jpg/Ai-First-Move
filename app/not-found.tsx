import Link from 'next/link';
export default function NotFound(){return <main className="container" style={{padding:'120px 24px',textAlign:'center'}}><h1 style={{fontSize:64,margin:0}}>404</h1><p style={{color:'#667085'}}>这个机会可能已被归档或链接不存在。</p><Link className="btn primary" href="/">返回首页</Link></main>}
