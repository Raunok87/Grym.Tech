export interface Project {
  title: string;
  category: string;
  description: string;
  accent: 'cyan' | 'amber';
  current?: boolean;
  featured?: boolean;
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: 'Project Gambit — JARVIS-Inspired Personal AI Assistant',
    category: 'AI / Systems Engineering',
    accent: 'amber',
    current: true,
    featured: true,
    description:
      'Three-language AI assistant spanning two machines (Colossus desktop + homelab server). Electron shell with a Go sidecar on :9300 (HTTP endpoints, WebSocket bridge, SSE push) and a Python voice runtime. Full voice pipeline: wake word detection (OpenWakeWord) → STT (Whisper) → LLM (Claude with a tunable personality system) → TTS (Kokoro, am_onyx voice) — end-to-end verified. Svelte 5 widget dashboard with a StatusOrb reflecting 5 pipeline states, voice activity visualization, system status, and personality controls (cajun_frequency, humor_level, verbosity sliders with live LLM guideline preview). Personality system: Remy LeBeau identity with tunable Cajun dialect frequency, humor level, and formality. Integration gateway handles Docker container management, system monitoring, and media stack awareness via MCP-compatible tool protocol. 455 tests across the stack (330 voice + 104 gateway + 21 Go). 100+ PRs, 6 gap analysis cycles, solo-built.',
    tech: ['Electron', 'Go', 'Python', 'Svelte 5', 'Claude API', 'Whisper', 'Kokoro TTS', 'WebSocket', 'SSE'],
  },
  {
    title: 'Grym — Autonomous AI Infrastructure Agent',
    category: 'AI / Infrastructure',
    accent: 'cyan',
    current: true,
    featured: true,
    description:
      'Personal deployment of the Hermes Agent framework running on a homelab (Ubuntu 24.04, Ryzen 7 7700, ZFS pool). Discord presence across 10+ channels — each scoped to a domain (homelab ops, project work, client repos, ops log). SSH access to the homelab host, GitHub API integration, autonomous PR creation (branch → commit → PR — never merges its own). 150+ skills covering SSH bootstrap, media stack troubleshooting, cron job management, and more. GitOps model: merge-to-main auto-deploys via self-hosted GitHub Actions runners. Manages real infrastructure: Docker compose stacks, ZFS datasets, Caddy reverse proxy, AdGuard DNS, Cloudflare DDNS, Tailscale mesh. Has built and shipped code across 5+ repos autonomously (gambit, sysw, homelab, null-latency, grym-tech).',
    tech: ['Hermes Agent', 'Docker', 'SSH', 'GitHub Actions', 'Discord', 'ZFS', 'Tailscale', 'Caddy'],
  },
  {
    title: 'sysw — Stuff You Should Watch',
    category: 'Full-Stack / Open Source',
    accent: 'amber',
    current: true,
    featured: true,
    description:
      'Self-hosted media companion app. SvelteKit 5 frontend + Go backend + PostgreSQL + Claude AI recommendations. Arr stack integration (Radarr + Sonarr) with a bidirectional sync engine: FullSync reconciliation, webhook processing, and TVDB→TMDB crosswalk. AI-powered recommendations where Claude analyzes your collection and viewing patterns and explains WHY it recommends something by referencing titles in your actual library. Per-user isolation, privacy-first architecture — AI opt-in defaults to OFF, AI-generated content visibly badged. 7 PRs shipped for arr integration alone. Features include SourceBadge, Send to Radarr/Sonarr action, Ready to Watch lane, scheduled poll sync, and per-user quality profiles. Open-source after beta.',
    tech: ['SvelteKit 5', 'Go', 'PostgreSQL', 'Claude API', 'TMDB', 'Radarr', 'Sonarr'],
  },
  {
    title: 'Forge Studio / Project Null-Latency — Real-time AI Video Effects Engine',
    category: 'Systems Programming / Computer Vision',
    accent: 'cyan',
    current: true,
    featured: true,
    description:
      'Real-time AI video effects engine and virtual production studio for Linux. Rust backend manages GStreamer pipelines, ONNX Runtime inference, and virtual camera output via dual-backend support (v4l2loopback + PipeWire). AI segmentation runs in a Python sidecar (MediaPipe Selfie Segmenter) over a Unix domain socket. Svelte 5 frontend provides two modes: a camera studio (NVIDIA Broadcast-style background replacement, blur, effects) and a scene editor (OBS-style compositing). Outputs to virtual camera, MJPEG preview stream (:9002), WebRTC (:9001), and MKV recording. Zero-copy frame pipeline with a latency target of <16ms per frame.',
    tech: ['Rust', 'GStreamer', 'ONNX Runtime', 'MediaPipe', 'Svelte 5', 'WebRTC', 'PipeWire'],
  },
  {
    title: 'Pixel Bridge — D&D Character-Driven Multiplayer Game Engine',
    category: 'Game Dev / Real-time',
    accent: 'amber',
    current: true,
    featured: true,
    description:
      'Multiplayer game engine where real D&D Beyond and Pathbuilder 2e character sheets drive gameplay. Go server handles WebSocket connections, a real-time world tick loop, combat system, spatial hash, 54-ability resolver, buff/debuff system, mob AI with pathfinding, and death/respawn — 122 passing tests. Character ingestion pipeline parses actual D&D Beyond and Pathbuilder 2e exports and translates stats, abilities, and modifiers into game mechanics. Unreal Engine 5 C++ game client. Wire protocol: WebSocket + Protobuf. Persistence: pure Go SQLite.',
    tech: ['Go', 'Unreal Engine 5', 'C++', 'WebSocket', 'Protobuf', 'SQLite'],
  },
  {
    title: 'Builders Portal — Internal Developer Platform',
    category: 'Platform Engineering',
    accent: 'cyan',
    featured: true,
    description:
      'Solo-built Internal Developer Platform at Abridge AI. Go/Fiber backend, React/Vite frontend, Cloud SQL. 187 merged PRs in ~4 months as sole primary contributor. 16 backend plugins, 24 frontend pages, full RBAC, and immutable audit logging. 102 MCP tools auto-generated from the OpenAPI spec — AI agents connect via Private Service Connect tunnel, fully private, no public internet. Features: Terraform run visualization with cost impact, push-button deployment wizard with dependency graphs, ArgoCD dashboard with sync triggers, cloud asset inventory, image catalog with SBOM integration, and a gamification leaderboard turning drift remediation into a competitive sport. Replaced manual Terraform workflows with self-service for all of engineering.',
    tech: ['Go', 'React', 'Vite', 'Cloud SQL', 'MCP', 'ArgoCD', 'Terraform', 'GCP'],
  },
  {
    title: 'Homelab Infrastructure',
    category: 'Infrastructure / Self-hosting',
    accent: 'amber',
    current: true,
    description:
      'Production-grade homelab on Ubuntu 24.04 — Ryzen 7 7700, 58GB RAM, ZFS pool with 2×8TB stripe (14.4TB usable). Docker compose stacks: Hermes/Grym agent, Caddy (wildcard Let\'s Encrypt via DNS-01), AdGuard Home, Plex, Jellyfin, Sonarr, Radarr, SABnzbd. Tailscale mesh for remote access, Cloudflare DDNS, split DNS between internal and external resolution. GitOps: merge-to-main deploys via GitHub Actions self-hosted runner. rclone backup to Google Cloud Storage.',
  },
  {
    title: 'Award Flight Optimizer',
    category: 'Full-Stack Web',
    accent: 'cyan',
    description:
      'Award flight search optimizer. Go backend integrates with the Amadeus API and seats.aero for live availability data. Transfer partner optimizer finds the cheapest credit card point transfer path, composite scoring model ranks results, and an alert engine pushes updates via SSE. SvelteKit frontend with availability search, transfer path cards, cabin badges, and budget indicators. Deployed with Docker Compose and Caddy.',
  },
  {
    title: 'Satisfactory Server on AWS',
    category: 'IaC',
    accent: 'amber',
    description:
      'AWS CDK project that fully automates a Satisfactory dedicated server on EC2. Auto-shutdown when the server is idle, S3 game file backups, and a Lambda + API Gateway endpoint to start the server from a browser. Access via Session Manager — no external SSH exposure. Running cost approximately $5/month at two hours of play per day.',
  },
];
