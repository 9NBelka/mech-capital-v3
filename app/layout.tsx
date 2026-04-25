import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'MECH Capital',
  description: 'Інвестиції в автосервісний бізнес',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
