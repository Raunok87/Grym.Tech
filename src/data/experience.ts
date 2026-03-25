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

export interface PortalStat {
  value: string;
  label: string;
}

export interface ArchitectureHighlight {
  title: string;
  detail: string;
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
  summary: 'Day 1 platform hire at a healthcare AI company building ambient clinical documentation. Founded and grew the Platform Engineering organization, established the infrastructure and developer experience that scaled the product from a proof of concept to full production scaling to over 250 healthcare systems.',
};

export const buildersPortal = {
  title: 'Builders Portal — Internal Developer Platform',
  oneLiner: "Designed, built, and shipped Abridge's IDP as sole primary contributor — the operational control plane for all of engineering.",
  period: 'Nov 2025 – Present',
  capabilities: [
    { name: 'Push-Button Deployments', description: 'Collapsed environment setup from days of manual Terraform to a 4-step wizard: pick component, configure, preview YAML, one-click PR. Batch deploys with dependency graphs, deployment templates, and full rollback.' },
    { name: 'Service Catalog v2', description: 'Backstage-equivalent registry with ownership, tiers, compliance tracking, SLOs, and dependency mapping. Automatic GitHub sync, scorecards, and enrichment — the missing piece for ownership and compliance tracking at scale.' },
    { name: 'Infrastructure Visibility', description: 'Unified view for Terraform plan/apply/cost across all infra-atmos stacks. PR-grouped workflows with plan diffs, cost impact, and AI analysis.' },
    { name: 'MCP Server — AI Agent Integration', description: "Auto-generates 102 tools from the portal's OpenAPI spec. AI agents connect via Private Service Connect tunnel — fully private, per-user API keys, RBAC-scoped." },
    { name: 'ArgoCD & Cloud Asset Inventory', description: 'Real-time K8s app sync status with drill-down resource trees and IAP-protected sync triggers. Live GCP resource browser across compute, networking, data, and storage.' },
  ] as Capability[],
  stats: [
    { value: '187', label: 'merged PRs — 96% sole primary contributor' },
    { value: '~4 mo', label: 'initial commit → production platform' },
    { value: '16', label: 'backend plugins — modular, hot-addable' },
    { value: '24', label: 'frontend pages' },
    { value: '102', label: 'MCP tools auto-generated from OpenAPI' },
    { value: '10', label: 'Architecture Decision Records' },
    { value: '31', label: 'roadmap items across 5 tiers' },
  ] as PortalStat[],
  architecture: [
    {
      title: 'Plugin Architecture',
      detail: '16 modular plugins that register their own routes and auto-upgrade storage from in-memory to PostgreSQL. New capabilities are added without touching core code.',
    },
    {
      title: 'Production Migration — Zero Downtime',
      detail: 'Moved from dev project to abridge-operations with zero downtime (ADR-004). Separate prod/dev environments, dedicated runtime SAs, and independent Cloud SQL instances.',
    },
    {
      title: '31-Issue Roadmap — 5 Tiers',
      detail: 'Next priorities: self-serve secrets management, runbook execution, environment promotion, incident context linking, and cost dashboard — all tracked in Linear.',
    },
  ] as ArchitectureHighlight[],
  strategicValue: "This isn't a side project — it's the operational control plane for Abridge engineering. It replaces manual Terraform workflows with self-service, gives every engineer infrastructure visibility they didn't have before, and — with MCP — makes the entire platform programmable by AI agents.",
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
      'Senior technical resource for AWS and GCP, automation, and IaC; mentored engineers across teams.',
      'Migrated Postgres 9.x to 12 and to Aurora; moved in-memory stores to ElastiCache (Redis).',
      'Established GitOps patterns and reusable Terraform/Ansible/SSM modules; standardized CI for application and infrastructure.',
      'Built and maintained the BI data platform: Redshift, Fivetran, and in-house ETL; implemented streaming for near real-time replication.',
      'Owned CI/CD pipelines for application and IaC deployments.',
      'Partnered on PCI-DSS, HIPAA, SOC 2, and HITRUST; set patch/CVE remediation and incident standards with Security, Compliance, and Legal.',
      'Led backend infrastructure refactors to scale efficiently while managing costs; shifted the organization to a proactive platform engineering model.',
    ],
  },
  {
    company: 'Redox',
    title: 'DevOps Engineer',
    period: 'Mar 2019 – Jun 2021',
    location: 'Greenville, SC (Remote)',
    bullets: [
      'Led migration from Rancher to Kubernetes (kOps on AWS/EC2) with automated blue/green deploys, merge gates, coverage, and tests.',
      'Built an OAuth 2.0 SSO connector in Go for Kubernetes; centralized cluster authentication.',
      'AWS SME across EC2, RDS, EKS, ECS, API Gateway, Lambda, S3, Glacier, and related services.',
      'Authored outage playbooks and reliability runbooks; created an internal knowledge base.',
      'Drove CloudFormation (Troposphere) → Terraform migration of 100K+ lines; mentored via pairing and coaching.',
    ],
  },
  {
    company: 'TCGplayer',
    acquired: 'acquired by eBay',
    title: 'DevOps Engineer',
    period: 'Feb 2017 – Mar 2019',
    location: 'Atlanta, GA (Remote)',
    bullets: [
      'Built turnkey blue/green deployment pipelines for core e-commerce; increased deploy frequency and rollback safety.',
      'Converted 99% of infrastructure from on-prem Rackspace to AWS in ~12 months; codified networking, compute, and application stacks.',
      'Designed end-to-end observability: New Relic + client telemetry, Prometheus/Graphite + Grafana, and TICK/ELK for logging; led post-mortems.',
      'Established automated pipelines for code, servers, networking, and underlying plumbing; senior escalation owner through post-mortem.',
      'Created SCM strategies and CI/CD guardrails for the infra/devops team; embedded as AWS SME with delivery teams.',
    ],
  },
  {
    company: 'Website Pipeline',
    title: 'Systems Administrator / DevOps Engineer',
    period: 'Feb 2017 – Jan 2018',
    location: 'Greenville, SC',
    bullets: [
      'Architected Docker/Kubernetes infrastructure (workers/managers, config management, load balancers, firewalls, dev environments) including performance testing and automation.',
      'Operated an ElasticSearch cluster; integrated AWS and Azure; administered 1+ PB of storage across three domains and networks.',
      'Managed a Hyper-V estate of ~300 VMs and 100 physical servers across 3 data centers; implemented disaster recovery and ran quarterly recovery drills for 400+ servers.',
      'Owned the Microsoft web stack for 400+ sites (SSL, IIS bindings), DNS/DHCP/ADFS/Group Policy across 4 domains including PCI-scoped environments.',
    ],
  },
  {
    company: 'Earlier Experience',
    title: 'Systems Administration & DevOps',
    period: '2008 – 2017',
    location: '',
    bullets: [
      'Roles at Tribe513, M33, Robert Half/GHS, ZF Group, and others. Delivered Hyper-V and network architecture, enterprise SCCM deployments, multi-site Windows domain services (DHCP/DNS/ADFS/Group Policy), and large-scale patch and automation programs. Details available on request.',
    ],
  },
];
