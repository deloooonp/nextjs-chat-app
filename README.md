# >private_chat

**Live Demo:** [https://your-project-name.vercel.app](https://your-project-name.vercel.app)

A secure, private, self-destructing chat room application built with Next.js 16 (React 19) and ElysiaJS.

## Features

- **Private & Secure**: Real-time private chat rooms.
- **Self-Destructing**: Rooms and messages are ephemeral.
- **Strict Capacity**: Maximum of 2 users per room to ensure true 1-on-1 privacy.
- **Bot Protection**: Automated bot detection to prevent scraping or lurking.
- **Anonymous Identity**: Automatically assigned randomized usernames.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Frontend**: React 19, [Tailwind CSS v4](https://tailwindcss.com), [React Query](https://tanstack.com/query/latest)
- **Backend**: [ElysiaJS](https://elysiajs.com) (with `@elysiajs/eden`)
- **Data/State**: [Upstash Redis](https://upstash.com/redis) & Realtime
- **Validation**: [Zod](https://zod.dev)
- **Utilities**: `nanoid`, `date-fns`

## Prerequisites

- Node.js 20+
- An [Upstash Redis](https://upstash.com) database (for connection metadata and real-time state)

## Getting Started

1. **Clone the repository and install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Set up Environment Variables:**

Create a `.env` or `.env.local` file based on your environment needs. Typically, you will need Upstash Redis credentials:
```env
# Upstash Redis URLs/Tokens for data storage and real-time sync
UPSTASH_REDIS_REST_URL=your_upstash_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_rest_token

# (Optional) Application URL
NEXT_PUBLIC_APPLICATION_URL=http://localhost:3000
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can instantly create a secure room from the main lobby.

## How it Works

- **Lobby**: The entry point where users can create a new secure room.
- **Room Proxy (`proxy.ts`)**: Middleware that validates room existence, blocks bots, and strictly enforces the 2-user capacity limit using Redis tracking.
- **Real-Time Communication**: Uses Upstash Realtime features embedded within Elysia routes to facilitate instant message delivery.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).
Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
