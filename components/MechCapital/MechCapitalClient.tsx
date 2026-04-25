'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../Header/Header';

interface MechCapitalClientProps {
  lang: string;
  t: {
    problem: string;
    solution: string;
    results: string;
    invest: string;
  };
}

export default function MechCapitalClient({ lang, t }: MechCapitalClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionId = sessionStorage.getItem('scrollTo');
    if (!sectionId) return;
    sessionStorage.removeItem('scrollTo');
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (attempts < 20) requestAnimationFrame(() => tryScroll(attempts + 1));
    };
    requestAnimationFrame(() => tryScroll());
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Header isScrolled={isScrolled} scrollToSection={scrollToSection} currentLang={lang} t={t} />
  );
}
