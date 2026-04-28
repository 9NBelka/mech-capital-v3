import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/ua', '/en', '/ru'],
    },
    sitemap: 'https://mech.capital/sitemap.xml',
  };
}
