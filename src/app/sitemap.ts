import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://simonyi.bme.hu/hu',
    },
    {
      url: 'https://simonyi.bme.hu/hu/about-us',
    },
    {
      url: 'https://simonyi.bme.hu/hu/blog',
    },
    {
      url: 'https://simonyi.bme.hu/en',
    },
    {
      url: 'https://simonyi.bme.hu/en/about-us',
    },
    {
      url: 'https://simonyi.bme.hu/en/blog',
    },
  ]
}
