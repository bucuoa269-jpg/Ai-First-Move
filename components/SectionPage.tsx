import SiteShell from './SiteShell';
import ExplorerClient from './ExplorerClient';
import type { Opportunity } from '@/lib/types';

export default function SectionPage({ eyebrow, title, description, items, note }: { eyebrow: string; title: string; description: string; items: Opportunity[]; note?: string }) {
  return <SiteShell><main className="container"><section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p>{note && <div className="notice" style={{maxWidth:860,marginTop:18}}>{note}</div>}</section><section className="section" style={{paddingTop:10}}><ExplorerClient items={items}/></section></main></SiteShell>;
}
