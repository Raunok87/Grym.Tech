export interface Project {
  title: string;
  category: string;
  description: string;
  accent: 'cyan' | 'amber';
  current?: boolean;
}

export const projects: Project[] = [
  {
    title: 'VPN Infrastructure',
    category: 'Networking',
    accent: 'cyan',
    description:
      'Replaced bastion host access with a VPN solution across Dev, Staging, and Production. Became foundational for secure connectivity to CloudSQL, GKE clusters, and integration engines — later extended for direct customer connectivity.',
  },
  {
    title: 'Terraform Automation & IaC Pipeline',
    category: 'IaC',
    accent: 'amber',
    description:
      'Built the Terraform deployment pipeline from scratch across all environments. Evolved from basic runs into a fully automated infrastructure pipeline with drift detection, cost estimation, and AI-powered review.',
  },
  {
    title: 'ML Inference Platform',
    category: 'ML Platform',
    accent: 'cyan',
    description:
      'Stood up private GKE clusters for Triton-based ML inference workloads. Built Terraform modules with proper networking, security groups, node pools, and service mesh. Took the first inference system from zero to production.',
  },
  {
    title: 'GKE Lifecycle Management',
    category: 'Kubernetes',
    accent: 'amber',
    description:
      'Ongoing upgrade campaigns across API and ML GKE clusters through multiple Kubernetes versions. Capacity planning, node pool management, and zero-downtime maintenance across all environments.',
  },
  {
    title: 'Source Control Migration',
    category: 'CI/CD',
    accent: 'cyan',
    description:
      'Led the migration of infrastructure repositories from Bitbucket to GitHub. Stood up self-hosted runners and laid the groundwork for GitHub Actions-based CI/CD.',
  },
  {
    title: 'Network Egress Redesign',
    category: 'Networking',
    accent: 'amber',
    description:
      "Major redesign of network egress across all environments. Converted cloud functions, App Engine, and GKE workloads to static egress IPs via NAT gateways — addressing infrastructure that wasn't designed for the growth the company experienced.",
  },
  {
    title: 'CloudSQL Security Hardening',
    category: 'Security',
    accent: 'cyan',
    description:
      'Identified CloudSQL instances with public IPs and overly permissive access. Removed public endpoints, routed all traffic internally, and coordinated a production maintenance window to migrate every dependent service.',
  },
  {
    title: 'Customer Network Integrations',
    category: 'Networking',
    accent: 'amber',
    description:
      'Recurring cross-functional work enabling enterprise customer connectivity — VPN tunnels, static IP routing for cloud functions, and firewall rules for healthcare system integrations. Complex GCP networking at the boundary of trust.',
  },
  {
    title: 'Reliability & Observability',
    category: 'Observability',
    accent: 'cyan',
    description:
      'Led a dedicated effort to raise the bar on monitoring and observability across the stack. Delivered proactive alerting, deep cloud function instrumentation, and optimized traffic patterns to improve overall system resilience.',
  },
  {
    title: 'Credential Hygiene & Key Rotation',
    category: 'Security',
    accent: 'amber',
    description:
      'Led production maintenance for rotating service account keys, identifying inactive accounts, and coordinating key rotations with dependent engineering teams across the organization.',
  },
  {
    title: 'Security Command Center Enterprise',
    category: 'Security',
    accent: 'cyan',
    description:
      'Led full onboarding of GCP Security Command Center Enterprise — a strategic leap forward in cloud security posture. Foundational for upcoming compliance and regulatory efforts.',
  },
  {
    title: 'Internal Developer Portal',
    category: 'Developer Experience',
    accent: 'amber',
    current: true,
    description:
      'Full-stack IDP with plugin architecture — Go/Fiber backend, React frontend. Centralized platform for infrastructure visibility, deployments, drift detection, audit logging, GitOps integration, and agent monitoring. Deployed behind IAP on Cloud Run.',
  },
  {
    title: 'Platform Team & Leadership',
    category: 'Leadership',
    accent: 'cyan',
    current: true,
    description:
      'Built and grew the platform engineering organization. Regular "State of the Platform" communications, engineering office hours, hands-on mentoring, and a culture of recognizing the team\'s contributions.',
  },
];
