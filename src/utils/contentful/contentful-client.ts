import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? 'No space ID',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? 'No access token',
  host: 'cdn.contentful.com',
  environment: process.env.CONTENTFUL_ENVIRONMENT
});
