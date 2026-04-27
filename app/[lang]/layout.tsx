import { use } from 'react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      canonical: `https://mech.capital/${lang}`,
      languages: {
        uk: 'https://mech.capital/ua',
        ru: 'https://mech.capital/ru',
        en: 'https://mech.capital/en',
        'x-default': 'https://mech.capital/ua',
      },
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  return <div lang={lang}>{children}</div>;
}
