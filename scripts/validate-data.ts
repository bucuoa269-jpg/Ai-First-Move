import { opportunities, cities } from '../lib/data';
import { OpportunitySchema } from '../lib/schema';

const slugs = new Set<string>();
for (const item of opportunities) {
  OpportunitySchema.parse(item);
  if (slugs.has(item.slug)) throw new Error(`重复slug: ${item.slug}`);
  slugs.add(item.slug);
  if (item.deadlineAt && Number.isNaN(Date.parse(item.deadlineAt))) throw new Error(`无效日期: ${item.slug}`);
}
const citySlugs = new Set<string>();
for (const city of cities) {
  if (citySlugs.has(city.slug)) throw new Error(`重复城市slug: ${city.slug}`);
  citySlugs.add(city.slug);
}
console.log(`Data validation passed: ${opportunities.length} opportunities, ${cities.length} cities.`);
