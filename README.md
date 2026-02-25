# Samco - HP Store

Samco Computers is a trusted local computer store offering brand-new and fairly used laptops, desktops, and tech devices at affordable prices.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Better Auth**, **Neon Postgres**, **Drizzle ORM**, and **Zustand**.

## Getting Started

1. Clone the repo and install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your Neon Postgres connection string:
```bash
cp .env.example .env
```

3. Push the database schema and seed data:
```bash
npm run db:push
npm run db:seed
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the HP Store.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Drizzle ORM** - Type-safe SQL queries
- **Neon Postgres** - Serverless Postgres database
- **Better Auth** - Authentication (email/password)
- **Zustand** - Lightweight client state management
- **ESLint** - Code linting
