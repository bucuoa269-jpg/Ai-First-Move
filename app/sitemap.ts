export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { cities, opportunities } from '@/lib/data';
export default function sitemap():MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-firstmove.example'; const fixed=['','feed','side-hustles','startups','jobs','competitions','cities','time-machine','global','interviews','sources','about','local']; return [...fixed.map(path=>({url:`${base}/${path}`,lastModified:new Date('2026-06-18')})),...opportunities.map(x=>({url:`${base}/opportunity/${x.slug}`,lastModified:new Date(x.lastVerifiedAt)})),...cities.map(x=>({url:`${base}/cities/${x.slug}`,lastModified:new Date('2026-06-18')}))]; }
