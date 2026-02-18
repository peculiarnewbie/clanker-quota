# Clanker Quota

AI Coding Assistant Usage Dashboard - monitor your Claude, Codex, and Z.AI subscription quotas in one place.

## Features

- **Unified Dashboard**: See all your AI coding assistant quotas in one view
- **Real-time Updates**: Auto-refresh every 5 minutes + manual refresh button
- **Visual Indicators**: Color-coded progress bars (green → yellow → red)
- **Reset Timers**: See when your quotas reset
- **Local-first**: Credentials never leave your machine

## Quick Start

```bash
bun install
bun run dev
```

Open http://localhost:3000 in your browser.

## Credential Setup

### Claude Code
Run `claude` and authenticate. Credentials are stored in `~/.claude/.credentials.json`.

### OpenAI Codex
Run `codex login` to authenticate via ChatGPT subscription. Credentials are stored in `~/.codex/auth.json`.

Alternatively, set `OPENAI_API_KEY` environment variable (but subscription quota API requires OAuth).

### Z.AI
Create `~/.zai/config.json`:
```json
{
  "apiKey": "your-api-key"
}
```

Or set one of these environment variables: `ZAI_API_KEY`, `ZAI_KEY`, `ZHIPU_API_KEY`, `ZHIPUAI_API_KEY`.

## Tech Stack

- **Backend**: Bun.serve() with HTML imports
- **Frontend**: SolidJS
- **Styling**: Tailwind CSS

## API Endpoints

- `GET /api/usage` - Get all services' usage
- `GET /api/usage/claude` - Get Claude usage only
- `GET /api/usage/codex` - Get Codex usage only  
- `GET /api/usage/zai` - Get Z.AI usage only

## How It Works

The app reads OAuth tokens/API keys from the same locations as the official CLIs:

| Service | Auth Source | API Endpoint |
|---------|-------------|--------------|
| Claude | `~/.claude/.credentials.json` | `api.anthropic.com/api/oauth/usage` |
| Codex | `~/.codex/auth.json` | `chatgpt.com/backend-api/wham/usage` |
| Z.AI | `~/.zai/config.json` or env var | `api.z.ai/api/monitor/usage/quota/limit` |

## Development

```bash
bun run dev    # Start dev server with HMR
bun run start  # Start production server
```
