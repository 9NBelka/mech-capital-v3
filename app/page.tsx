import RootRedirect from '@/components/RootRedirect/RootRedirect';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  const lang = acceptLanguage.toLowerCase();

  const defaultLang = lang.includes('en') ? 'en' : 'ua';

  return <RootRedirect defaultLang={defaultLang} />;
}
