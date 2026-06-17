import { writeFileSync } from 'node:fs';
import { cities, opportunities } from '../lib/data';
import { interviews } from '../lib/interviews';

const uniqueSources = new Map<string, { name: string; url: string; kind: string }>();
for (const item of opportunities) {
  for (const source of [...item.discoverySources, ...item.confirmationSources]) {
    uniqueSources.set(source.url, source);
  }
}
const topics = Array.from(new Set(opportunities.flatMap(item => item.domains))).sort().map((name, index) => ({ id: `topic-${index+1}`, name }));
const interviewExport = { generatedAt: '2026-06-18', count: interviews.length, note: '只保存公开节目链接与原创结构化摘要，不复制逐字稿；收入数字按当事人自述处理。', records: interviews };
writeFileSync('data/opportunities.json', JSON.stringify({ generatedAt: '2026-06-18', count: opportunities.length, records: opportunities }, null, 2));
writeFileSync('data/cities.json', JSON.stringify({ generatedAt: '2026-06-18', count: cities.length, records: cities }, null, 2));
writeFileSync('data/sources.json', JSON.stringify({ generatedAt: '2026-06-18', count: uniqueSources.size, records: [...uniqueSources.values()] }, null, 2));
writeFileSync('data/topics.json', JSON.stringify({ generatedAt: '2026-06-18', count: topics.length, records: topics }, null, 2));
writeFileSync('data/interviews.json', JSON.stringify(interviewExport, null, 2));
writeFileSync('data/competitions.json', JSON.stringify({ generatedAt: '2026-06-18', records: opportunities.filter(item => ['competition','event','creator_program'].includes(item.type)) }, null, 2));
