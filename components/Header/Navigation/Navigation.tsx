'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navigation.module.scss';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

interface NavigationProps {
  handleScroll: (section: string) => void;
  tablet?: boolean;
  currentLang: string;
  langSwitcher?: boolean;
  t: {
    problem: string;
    solution: string;
    results: string;
    invest: string;
  };
}

export default function Navigation({
  handleScroll,
  tablet,
  currentLang,
  langSwitcher,
  t,
}: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollTo', sectionId);
      router.push(`/${currentLang}`);
    }
  };

  const navLinks = [
    { label: t.problem, section: 'problem' },
    { label: t.solution, section: 'solution' },
    { label: t.results, section: 'result' },
  ];

  return (
    <nav className={clsx(styles.nav, tablet && styles.navMobile)}>
      {navLinks.map((link) => (
        <a
          key={link.section}
          onClick={() => handleNavClick(link.section)}
          className={styles.navLink}
          style={{ cursor: 'pointer' }}>
          {link.label}
        </a>
      ))}
      <LangSwitcher currentLang={currentLang} langSwitcher={langSwitcher} />
      <button className={styles.buttonInvest} onClick={() => handleNavClick('opportunity')}>
        {t.invest}
      </button>
    </nav>
  );
}
