# ASR Arena

Blind comparison of speech-to-text providers. Record or upload audio, compare two anonymous transcriptions side by side, and vote for the best one. Community votes feed into an ELO-based leaderboard.

## Providers

- Gladia
- ElevenLabs
- Deepgram
- AssemblyAI
- Soniox
- OpenAI Whisper

## Getting started

### Prerequisites

- Node.js 18+
- Docker (for PostgreSQL)

### Setup

```bash
# Install dependencies
npm install

# Start PostgreSQL
docker compose up -d

# Run database migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Seed providers
npx tsx prisma/seed.ts

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env`. The defaults work with the Docker Compose setup.

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `MOCK_MODE` | When `true`, transcriptions are mocked (no API keys needed) |

## Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 with Gladia design tokens
- **Database**: PostgreSQL + Prisma ORM
- **Deployment target**: Vercel + Supabase
