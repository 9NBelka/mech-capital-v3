'use client';

import styles from './Hero.module.scss';
import { GoDotFill } from 'react-icons/go';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import clsx from 'clsx';

interface HeroProps {
  scrollToSection: (section: string) => void;
  t: {
    badge: string;
    headline: string;
    headlineEnd: string;
    description1: string;
    description2: string;
    buttonPitchDeck: string;
    buttonResults: string;
    note: string;
    paidSystem: string;
    verified: string;
    paidLeads: string;
    cpl: string;
    organicLeads: string;
    organicCost: string;
  };
}

export default function Hero({ t }: any) {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const value = 60;

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <GoDotFill className={styles.badgeIndicator} />
            <p>{t.badge}</p>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.gradientText}>{t.headline}</span> <br />
            {t.headlineEnd}
          </h1>

          <div className={styles.descriptionBlock}>
            <p className={styles.description}>{t.description1}</p>
            <p className={styles.description}>{t.description2}</p>
          </div>

          <div className={styles.buttons}>
            <button onClick={() => scrollToSection('opportunity')} className={styles.button}>
              <BsDownload className={styles.buttonIcon} />
              {t.buttonPitchDeck}
            </button>
            <button
              onClick={() => scrollToSection('result')}
              className={clsx(styles.button, styles.buttonTwo)}>
              {t.buttonResults}
              <BsArrowRightShort className={styles.buttonIconTwo} />
            </button>
          </div>

          <div className={styles.note}>{t.note}</div>
        </div>

        <div className={styles.visualContent}>
          <img src='/images/heroImage.webp' className={styles.backgroundImage} alt='cyber-cars' />

          <div className={styles.flyBlockWithLine}>
            <div className={styles.flyBlockBlockTexts}>
              <p>{t.paidSystem}</p>
              <p className={styles.blueText}>{t.verified}</p>
            </div>
            <h5 className={styles.flyBlockTitle}>{t.paidLeads}</h5>
            <p className={styles.flyBlockDescription}>{t.cpl}</p>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: `${value}%` }} />
            </div>
          </div>

          <div className={styles.flyBlockCost}>
            <div className={styles.flyBlockWithBackground}>
              <p>23</p>
            </div>
            <div className={styles.flyBlockTitleAndDescrColumn}>
              <h5 className={styles.flyBlockTitle}>{t.organicLeads}</h5>
              <p className={styles.flyBlockDescription}>{t.organicCost}</p>
            </div>
          </div>

          <div className={styles.blockForLink}>
            <a href='https://mechorbit.com/' target='_blank'>
              <h4 className={styles.linkText}>mechorbit.com</h4>
            </a>
          </div>
        </div>
      </div>

      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
    </section>
  );
}
