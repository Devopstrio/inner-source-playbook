export enum ContributionType {
  CODE = "CODE",
  DOCUMENTATION = "DOCUMENTATION",
  REVIEW = "REVIEW",
  ISSUE = "ISSUE",
  MENTORSHIP = "MENTORSHIP"
}

export enum RepoMaturity {
  SEED = "SEED",
  GROWING = "GROWING",
  STABLE = "STABLE",
  ARCHIVED = "ARCHIVED"
}

export interface Contribution {
  id: string;
  contributorId: string;
  repoId: string;
  type: ContributionType;
  score: number;
  timestamp: string;
}

export interface RepositoryMetadata {
  id: string;
  name: string;
  owner: string;
  maturity: RepoMaturity;
  reuseCount: number;
  innerSourceScore: number; // 0-100
  isDiscoverable: boolean;
  hasPlaybook: boolean;
}

export interface Contributor {
  id: string;
  username: string;
  team: string;
  rank: number;
  totalContributions: number;
  badges: string[];
}

export interface OnboardingStatus {
  id: string;
  developerId: string;
  step: string;
  status: "PENDING" | "COMPLETED";
  completedAt?: string;
}
