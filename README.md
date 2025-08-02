# simonyi-web-next

The official website of Simonyi Károly College for Advanced Studies.

Check out live at: [simonyi.bme.hu](https://simonyi.bme.hu)

## Notable technologies

This project uses:

- [pnpm v10](https://yarnpkg.com/getting-started/install)
- [Next.js 15 with App Router](https://nextjs.org/docs/app)
- [Contentful v11](https://github.com/contentful/contentful.js)
- [Tailwind v4](https://tailwindcss.com/)

## Before starting

- PNPM: <https://pnpm.io/>
- Vercel CLI: <https://vercel.com/docs/cli>
- Node Version Manager
  - nvm: <https://github.com/nvm-sh/nvm>
  - fnm: <https://github.com/Schniz/fnm>

## Set up project

Install dependencies:

```bash
pnpm i
```

Link your local repository to the Vercel one.

```bash
vercel link
```

Pull the environment variables from Vercel.

```bash
vercel pull
```

Create a symbolic link to `.vercel/.env.development.local` to act as `.env`.

```bash
# Linux
ln -s .vercel/.env.development.local .env
# Windows PowerShell
New-Item -ItemType SymbolicLink -Value .vercel/.env.development.local -Path .env
```

## Start project

```bash
pnpm dev
```

- Frontend: [localhost:3000](http://localhost:3000)

## Sponsors

[![Powered by Vercel](public/vercel.svg "Powered by Vercel")](https://vercel.com?utm_source=kir-dev&utm_campaign=oss)
