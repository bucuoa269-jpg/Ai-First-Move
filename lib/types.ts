export type OpportunityType = 'side_hustle' | 'startup' | 'job' | 'competition' | 'event' | 'creator_program' | 'global_case';
export type SourceLevel = 'S' | 'A' | 'B' | 'C' | 'D';
export type VerificationStatus = 'verified' | 'partially_verified' | 'pending_verification' | 'closing_soon' | 'ended' | 'ongoing';

export interface SourceRef {
  name: string;
  url: string;
  kind: 'official' | 'professional' | 'case' | 'social';
}

export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  summary: string;
  insight: string;
  type: OpportunityType;
  domains: string[];
  audienceTags: string[];
  country: string;
  city?: string;
  online: boolean;
  sourceLevel: SourceLevel;
  verificationStatus: VerificationStatus;
  officialUrl?: string;
  discoverySources: SourceRef[];
  confirmationSources: SourceRef[];
  publishedAt?: string;
  deadlineAt?: string;
  lastVerifiedAt: string;
  startupCost: string;
  timeToValidate: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  demandEvidence: string;
  monetizationPaths: string[];
  whoPays: string;
  firstCustomerPath: string;
  minimumDeliverable: string;
  actionPlan3Days: string[];
  actionPlan7Days: string[];
  stopConditions: string[];
  risks: string[];
  score: number;
  editorial?: boolean;
  originalMarket?: string;
  targetMarket?: string;
}

export interface CityInfo {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  note: string;
}
