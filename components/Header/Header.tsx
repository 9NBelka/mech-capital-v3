'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.scss';
import { FiMenu, FiX } from 'react-icons/fi';
import Navigation from './Navigation/Navigation';
import LangSwitcher from './LangSwitcher/LangSwitcher';

interface HeaderProps {
  isScrolled: boolean;
  scrollToSection: (section: string) => void;
  currentLang: string;
  t: {
    problem: string;
    solution: string;
    results: string;
    invest: string;
  };
}

export default function Header({ isScrolled, scrollToSection, currentLang, t }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleScroll = (section: string) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          <div className={styles.logoContainer}>
            <a href={`/${currentLang}`}>
              <img src='/mechLogoNew.svg' alt='Logo' className={styles.iconLogo} />
            </a>
          </div>
        </div>

        <Navigation handleScroll={handleScroll} currentLang={currentLang} t={t} />

        <div className={styles.langSwitcherPhoneAndBurgerButton}>
          <div className={styles.langSwitcherPhone}>
            <LangSwitcher currentLang={currentLang} />
          </div>
          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className={styles.burgerIcon} />
            ) : (
              <FiMenu className={styles.burgerIcon} />
            )}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileWrapper} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenu} ref={menuRef}>
          <Navigation
            handleScroll={handleScroll}
            tablet={true}
            currentLang={currentLang}
            langSwitcher={true}
            t={t}
          />
        </div>
      </div>
    </header>
  );
}
