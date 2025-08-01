import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? 'No space ID',
  accessToken:
    (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? 'ErrorNoAccessToken',
  host:
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? 'cdn.contentful.com'
      : 'preview.contentful.com',
  environment: process.env.CONTENTFUL_ENVIRONMENT,
})
