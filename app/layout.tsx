import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'MECH Capital — Інвестиції в автосервісний бізнес',
  description:
    'MECH Capital залучає pre-seed/seed інвестиції для масштабування MECHorbit — операційної системи для автосервісів з підтвердженим попитом. 70 заявок, глобальний ринок.',
  keywords: ['mech capital', 'інвестиції', 'автосервіс', 'стартап', 'pre-seed', 'MECHorbit'],
  authors: [{ name: 'MECH Capital' }],
  robots: { index: true, follow: true },

  openGraph: {
    title: 'MECH Capital — Інвестиції в автосервісний бізнес',
    description:
      'Pre-seed/seed раунд. Два перевірених двигуни зростання: 47 платних лідів (~$25/лід) + 23 органічних. Глобальний ринок Aftermarket.',
    type: 'website',
    url: 'https://mech.capital',
    siteName: 'MECH Capital',
    images: [{ url: 'https://mech.capital/mechMetalLogo.jpg' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MECH Capital — Інвестиції в автосервісний бізнес',
    description:
      'Pre-seed/seed раунд. 47 платних лідів + 23 органічних. Глобальний ринок Aftermarket.',
    images: ['https://mech.capital/mechMetalLogo.jpg'],
  },

  alternates: {
    canonical: 'https://mech.capital/ua',
    languages: {
      uk: 'https://mech.capital/ua',
      ru: 'https://mech.capital/ru',
      en: 'https://mech.capital/en',
      'x-default': 'https://mech.capital/ua',
    },
  },

  icons: {
    icon: [
      { url: '/faviconLogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/faviconLogo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/faviconLogo.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='uk' dir='ltr'>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
