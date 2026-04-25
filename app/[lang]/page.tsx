import MechCapital from '@/components/MechCapital/MechCapital';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <MechCapital lang={lang} />;
}
