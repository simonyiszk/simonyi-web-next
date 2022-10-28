# simonyi-web-next

The next generation of the blog of Simonyi Károly College for Advanced Studies.

Production website: [simonyi.bme.hu](https://simonyi.bme.hu/)

Production admin website: [admin.simonyi.bme.hu](https://admin.simonyi.bme.hu/)

Production backend: [api.simonyi.bme.hu](https://api.simonyi.bme.hu/)

## Architecture

### Admin backend (folder `admin-backend`)

Backend is a common API for both admin-frontend and frontend. Backend is used for admin settings, like

- blog content: articles
- page content: front page, about us, vision etc.
- admin role settings

Tech Stack:

- NestJS
- Prisma
- TypeScript
- Docker

Deployed on [Kir-Dev](https://kir-dev.sch.bme.hu/)'s VM.

### Admin frontend (folder `admin-frontend`)

Tech Stack:

- React v18
- TypeScript v4

Deployed in [Kir-Dev's Vercel workspace](https://vercel.com/kir-dev).

Basic content management site.

### Frontend (folder `frontend`)

Tech Stack:

- React v18
- Next.js v12
- TypeScript v4

Deployed in [Kir-Dev's Vercel workspace](https://vercel.com/kir-dev).

UI design provided by [schdesign](https://schdesign.hu/) and coded by [Kir-Dev](https://kir-dev.sch.bme.hu/).

The design files are available at [Figma](https://www.figma.com/files/project/60439449/Simonyi-web).

## Support

When you have questions, contact kir-dev@sch.bme.hu (the maintainer) or info@simonyi.bme.hu (the product owner).

## Sponsors

<a href="https://vercel.com?utm_source=kir-dev&utm_campaign=oss"><img src=".github/pbv.svg" height="36" /></a>
