export interface Win {
  title: string;
  category: string;
  body: string;
  accent: 'cyan' | 'amber';
}

export interface Capability {
  name: string;
  description: string;
}

export interface PriorRole {
  company: string;
  acquired?: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
}

export const abridgeRole = {
  company: 'Abridge AI, Inc.',
  title: 'Staff Platform Engineer',
  period: 'Feb 2023 – Present',
  location: 'Greenville, SC (Remote)',
  summary: 'Day 1 platform hire at a healthcare AI company building ambient clinical documentation. Founded and grew the Platform Engineering organization, established the infrastructure and developer experience that scaled the product from early customers to 250+ healthcare deployments.',
};

export const buildersPortal = {
  title: 'Builders Portal — Internal Developer Platform',
  oneLiner: "Designed, built, and shipped Abridge's IDP as sole primary contributor — the operational control plane for all of engineering.",
  period: 'Nov 2025 – Present',
  capabilities: [
    { name: 'Push-Button Deployments', description: 'Collapsed environment setup from days of manual Terraform to a 4-step wizard: pick component, configure, preview YAML, one-click PR. Batch deploys with dependency graphs, deployment templates, and full rollback.' },
    { name: 'Service Catalog', description: 'Backstage-style registry with ownership, tiers, compliance tracking, SLOs, and dependency mapping. Automatic GitHub sync, scorecards, and enrichment.' },
    { name: 'Infrastructure Visibility', description: 'Unified view for Terraform plan/apply/cost across all infra-atmos stacks. PR-grouped workflows with plan diffs, cost impact, and AI analysis.' },
    { name: 'MCP Server — AI Agent Integration', description: "Auto-generates 102 tools from the portal's OpenAPI spec. AI agents connect via Private Service Connect tunnel — fully private, per-user API keys, RBAC-scoped." },
    { name: 'ArgoCD & Cloud Asset Inventory', description: 'Real-time K8s app sync status with drill-down resource trees and IAP-protected sync triggers. Live GCP resource browser across compute, networking, data, and storage.' },
  ] as Capability[],
  strategicValue: 'Not a side project — the portal is becoming the operational control plane for Abridge engineering. With the MCP server, the entire platform is now programmable by AI agents.',
};

export const abridgeWins: Win[] = [
  {
    title: 'Founded & Scaled Platform Engineering',
    category: 'Leadership',
    accent: 'cyan',
    body: 'Day 1 hire with a mandate to build the platform organization from scratch. Grew the team from 1 to 25+ engineers over three years, establishing ownership boundaries, on-call rotations, paved-road tooling, and a culture of public recognition. Ran regular "State of the Platform" communications and engineering office hours.',
  },
  {
    title: 'ML Inference Platform',
    category: 'ML Platform',
    accent: 'amber',
    body: 'Stood up private GKE clusters for NVIDIA Triton-based inference workloads — took the first production ML inference system from zero to running. Built Terraform modules with proper networking, security groups, node pools, and service mesh. Partnered with MLOps on model deployment, promotion workflows, and runtime telemetry.',
  },
  {
    title: 'Enterprise Healthcare Partner Onboarding',
    category: 'Enterprise',
    accent: 'cyan',
    body: 'Unblocked a major healthcare enterprise partner by standing up a complete, isolated environment spanning 8+ repositories in a single week. Immediately enabled deal-critical integration testing and became the template for all subsequent enterprise onboarding.',
  },
  {
    title: 'FedRAMP & Regulated Market Readiness',
    category: 'Compliance',
    accent: 'amber',
    body: 'Led onboarding of GCP Security Command Center Enterprise as the foundation for regulated market entry. Contributed to SSP and POA&M, defined logging and monitoring controls, and supported 3PAO audits. Positioned the platform to pursue regulated government healthcare contracts.',
  },
  {
    title: 'Multi-region Reliability & Cost Governance',
    category: 'Platform',
    accent: 'cyan',
    body: 'Designed multi-region foundations, DR runbooks, and release strategies (blue/green, canary). Governed 8-figure/month cloud spend without slowing delivery, scaling from early PoC to 250+ customer deployments. Established the observability program — golden signals, SLOs, alerting, tracing — and served as incident commander for critical production events.',
  },
];

export const priorRoles: PriorRole[] = [
  {
    company: 'CallRail',
    title: 'Senior DevOps Engineer',
    period: 'Jun 2021 – Feb 2023',
    location: 'Greenville, SC (Remote)',
    bullets: [
      'Senior AWS/GCP technical resource; mentored engineers across teams and drove the shift to a proactive platform engineering model.',
      'Built and maintained the BI data platform — Redshift, Fivetran, and in-house ETL with near real-time streaming replication.',
      'Established GitOps patterns and reusable Terraform/Ansible/SSM modules; standardized CI across application and infrastructure.',
    ],
  },
  {
    company: 'Redox',
    title: 'DevOps Engineer',
    period: 'Mar 2019 – Jun 2021',
    location: 'Greenville, SC (Remote)',
    bullets: [
      'Led migration from Rancher to Kubernetes (kOps on AWS/EC2) with automated blue/green deploys and merge gates.',
      'Built an OAuth 2.0 SSO connector in Go for Kubernetes, centralizing cluster authentication.',
      'Drove CloudFormation (Troposphere) → Terraform migration of 100K+ lines of infrastructure code.',
    ],
  },
  {
    company: 'TCGplayer',
    acquired: 'acquired by eBay',
    title: 'DevOps Engineer',
    period: 'Feb 2017 – Mar 2019',
    location: 'Atlanta, GA (Remote)',
    bullets: [
      'Converted 99% of infrastructure from on-prem Rackspace to AWS in ~12 months; codified networking, compute, and application stacks.',
      'Built turnkey blue/green deployment pipelines for core e-commerce, increasing deploy frequency and rollback safety.',
      'Designed end-to-end observability — Prometheus/Graphite, Grafana, TICK/ELK — and led post-mortems.',
    ],
  },
  {
    company: 'Earlier Experience',
    title: 'Systems Administration & DevOps',
    period: '2008 – 2017',
    location: '',
    bullets: [
      'Roles at Website Pipeline, Tribe513, M33, and others. Delivered Hyper-V and network architecture, enterprise SCCM deployments, multi-site Windows domain services (DHCP/DNS/ADFS/Group Policy), and large-scale patch and automation programs.',
    ],
  },
];
