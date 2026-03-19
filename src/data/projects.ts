export interface Project {
  title: string;
  category: string;
  description: string;
  accent: 'cyan' | 'amber';
  current?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Grym — Personal NanoClaw Deployment',
    category: 'AI / Agents',
    accent: 'amber',
    current: true,
    featured: true,
    description:
      'Personal deployment of the NanoClaw AI agent framework, customised and branded as Grym. Runs on TrueNAS Scale as a systemd service. Routes inbound Discord messages to Claude agents executing in isolated Linux containers via the Claude Agent SDK. Each Discord group has its own CLAUDE.md memory file and per-group model configuration (Sonnet vs Opus, default vs high effort). Integrated with grym-sidecar for mid-turn status broadcasting.',
  },
  {
    title: 'grym-sidecar — Go Discord Status Relay',
    category: 'Infrastructure / Homelab',
    accent: 'cyan',
    current: true,
    description:
      'Lightweight always-on HTTP relay service written in Go using only the standard library (zero external dependencies). Runs alongside NanoClaw as a systemd service. Exposes three endpoints: POST /push (updates in-memory status and optionally routes a formatted message to a Discord channel), GET /status (JSON status), and POST /announce (arbitrary Discord message). Includes a heartbeat goroutine that posts to an ops channel while processing, and automatic stale-state detection with auto-reset after a configurable timeout.',
  },
  {
    title: 'Forge Studio — Real-time AI Video Effects Engine',
    category: 'Systems Programming',
    accent: 'amber',
    current: true,
    featured: true,
    description:
      'Real-time AI video effects engine and virtual production studio for Linux (internal codename: Project Null-Latency). Rust/Tauri v2 backend manages GStreamer pipelines, ONNX Runtime inference, and virtual camera output via dual-backend support (v4l2loopback + PipeWire). AI segmentation runs in a Python sidecar (MediaPipe Selfie Segmenter) over a Unix domain socket. Svelte 5 frontend provides two modes: a camera studio (NVIDIA Broadcast-style) and a scene editor (OBS-style). Outputs to virtual camera, MJPEG preview stream (:9002), WebRTC (:9001), and MKV recording.',
  },
  {
    title: 'Pixel Bridge — D&D Character-Driven Multiplayer Game Engine',
    category: 'Game Dev / Real-time',
    accent: 'cyan',
    current: true,
    featured: true,
    description:
      'Multiplayer game engine where real D&D Beyond and Pathbuilder 2e character sheets drive gameplay. A Go server handles WebSocket connections, a real-time world tick loop, combat system, spatial hash, ability resolver (54 abilities), buff/debuff system, mob AI with pathfinding, and death/respawn — 122 passing tests. Character ingestion pipeline parses actual D&D Beyond and Pathbuilder 2e exports and translates stats into game mechanics. Unreal Engine 5 C++ game client. Wire protocol: WebSocket + Protobuf. Persistence: pure Go SQLite.',
  },
  {
    title: 'service-golem — Platform Engineering API Scaffold',
    category: 'Developer Tooling',
    accent: 'amber',
    description:
      'Go HTTP API server scaffold using GoFiber v2 with auto-generated Swagger/OpenAPI documentation via swaggo. A reusable starting point for platform engineering automation services, with structured routing and self-documenting endpoints baked in from the start.',
  },
  {
    title: 'Satisfactory Server on AWS — Automated EC2 Lifecycle',
    category: 'IaC',
    accent: 'cyan',
    description:
      'AWS CDK project that fully automates a Satisfactory dedicated server on EC2. Features: VPC and network provisioning, auto-shutdown when the server is idle, S3 game file backups, and a Lambda + API Gateway endpoint to start the server from a browser. Access via Session Manager (no external SSH exposure). Running cost approximately $5/month at two hours of play per day.',
  },
  {
    title: 'Award Flight Optimizer — Research & Tooling',
    category: 'Full-Stack Web',
    accent: 'amber',
    description:
      'Research project and working web application for optimising award flight searches. Go backend integrates with the Amadeus API and seats.aero for live availability data. Includes a transfer partner optimizer, composite scoring model, and alert engine with SSE push. SvelteKit frontend with components for availability search, transfer path cards, cabin badges, and budget indicators. Deployed with Docker Compose and Caddy.',
  },
  {
    title: 'tf-k3d — Local Kubernetes Lab with Terraform',
    category: 'IaC',
    accent: 'cyan',
    description:
      'Terraform configuration for a local K3s/k3d Kubernetes cluster. Provisions Traefik ingress, Flux GitOps, Weave Gitops UI, Linkerd service mesh, and Cert Manager — a production-representative stack running locally for experimentation and learning. Default configuration: one control plane node and three worker nodes.',
  },
];
