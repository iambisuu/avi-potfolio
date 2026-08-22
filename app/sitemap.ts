import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Using the framer URL from earlier as the base, or a generic one. Let's use the one from the prompt.
  const baseUrl = 'https://humble-calendar-990661.framer.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}
