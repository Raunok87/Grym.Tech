export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  tooltip?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Platform Engineering',
    icon: '☁️',
    description: 'Designing the foundations teams build on',
    skills: [
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'Kubernetes', tooltip: 'kubectl get pods -A | wc -l → "too many"' },
      { name: 'Terraform', tooltip: 'terraform apply -auto-approve (on Fridays)' },
      { name: 'Helm' },
      { name: 'ArgoCD' },
      { name: 'Docker' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'Systems Programming',
    icon: '⚙️',
    description: 'Close to the metal, far from the crashes',
    skills: [
      { name: 'Rust', tooltip: 'The borrow checker is my co-pilot' },
      { name: 'Go', tooltip: 'if err != nil { // the Go mantra }' },
      { name: 'C/C++' },
      { name: 'Linux' },
      { name: 'Networking' },
      { name: 'Concurrency' },
    ],
  },
  {
    title: 'AI/ML & Computer Vision',
    icon: '🧠',
    description: 'Teaching machines to see and think',
    skills: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'OpenCV' },
      { name: 'LLMs' },
      { name: 'GPU Inference' },
      { name: 'MLOps' },
    ],
  },
  {
    title: 'Game Dev & Real-time',
    icon: '🎮',
    description: 'Where latency budgets are measured in frames',
    skills: [
      { name: 'Unreal Engine' },
      { name: 'Unity' },
      { name: 'Godot' },
      { name: 'Networking/Netcode' },
      { name: 'ECS Architecture' },
      { name: 'Shaders' },
    ],
  },
  {
    title: 'Full-Stack Web',
    icon: '🌐',
    description: 'From database to deploy button',
    skills: [
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'PostgreSQL' },
      { name: 'REST/GraphQL' },
    ],
  },
  {
    title: 'Infrastructure & Homelab',
    icon: '🏠',
    description: 'Production-grade infra, closet-grade budget',
    skills: [
      { name: 'Proxmox' },
      { name: 'Ansible' },
      { name: 'Networking' },
      { name: 'ZFS' },
      { name: 'Monitoring' },
      { name: 'Self-Hosting' },
    ],
  },
  {
    title: 'Data & Optimization',
    icon: '📊',
    description: 'Making numbers tell the truth, faster',
    skills: [
      { name: 'SQL' },
      { name: 'Data Pipelines' },
      { name: 'Performance Tuning' },
      { name: 'Observability' },
      { name: 'Cost Optimization' },
    ],
  },
];
