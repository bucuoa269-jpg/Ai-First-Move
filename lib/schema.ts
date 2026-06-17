import { z } from 'zod';

export const SourceRefSchema = z.object({
  name: z.string().min(1),
  url: z.string().min(1),
  kind: z.enum(['official','professional','case','social'])
});

export const OpportunitySchema = z.object({
  id: z.string().min(1), slug: z.string().regex(/^[a-z0-9-]+$/), title: z.string().min(2), summary: z.string().min(8), insight: z.string().min(5),
  type: z.enum(['side_hustle','startup','job','competition','event','creator_program','global_case']),
  domains: z.array(z.string()).min(1), audienceTags: z.array(z.string()).min(1), country: z.string(), city: z.string().optional(), online: z.boolean(),
  sourceLevel: z.enum(['S','A','B','C','D']), verificationStatus: z.enum(['verified','partially_verified','pending_verification','closing_soon','ended','ongoing']),
  officialUrl: z.string().url().optional(), discoverySources: z.array(SourceRefSchema), confirmationSources: z.array(SourceRefSchema),
  publishedAt: z.string().optional(), deadlineAt: z.string().optional(), lastVerifiedAt: z.string(), startupCost: z.string(), timeToValidate: z.string(),
  difficulty: z.number().int().min(1).max(5), demandEvidence: z.string(), monetizationPaths: z.array(z.string()), whoPays: z.string(), firstCustomerPath: z.string(),
  minimumDeliverable: z.string(), actionPlan3Days: z.array(z.string()).min(1), actionPlan7Days: z.array(z.string()).min(1), stopConditions: z.array(z.string()).min(1),
  risks: z.array(z.string()).min(1), score: z.number().min(0).max(100), editorial: z.boolean().optional(), originalMarket: z.string().optional(), targetMarket: z.string().optional()
}).superRefine((item, ctx) => {
  if (item.sourceLevel === 'S' && !item.officialUrl) ctx.addIssue({ code: 'custom', message: 'S级记录必须提供官方入口', path: ['officialUrl'] });
  if (item.editorial && item.sourceLevel === 'S') ctx.addIssue({ code: 'custom', message: '编辑分析不得标为S级', path: ['sourceLevel'] });
});
