import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI先机｜AI Native 青年机会地图',
  description: '国内优先、全球参照。聚合AI副业、创业、求职、比赛与城市机会，展示官方链接、信源等级和第一步行动。',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-firstmove.example'),
  openGraph: {
    title: 'AI先机｜把 AI 热点，变成你今天能行动的机会',
    description: '面向大学生与毕业三年内年轻人的 AI 机会情报与行动平台。',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
