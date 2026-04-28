import { MetadataRoute } from 'next';

const BASE_URL = 'https://mech.capital';
const LANGS = ['ua', 'en', 'ru'];
const LAST_MOD = '2026-04-28';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MOD,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua`,
          en: `${BASE_URL}/en`,
          ru: `${BASE_URL}/ru`,
        },
      },
    },
    ...LANGS.map((lang) => ({
      url: `${BASE_URL}/${lang}`,
      lastModified: LAST_MOD,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua`,
          en: `${BASE_URL}/en`,
          ru: `${BASE_URL}/ru`,
        },
      },
    })),
  ];
}
