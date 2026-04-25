import clsx from 'clsx';
import styles from './Footer.module.scss';

interface FooterProps {
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.container}>
        <div className={styles.infoContent}>
          <h3 className={styles.titleScreen}>MECH.CAPITAL</h3>
          <p className={styles.textDescription}>
            &copy; {currentYear} MECH Capital. {copyright}
          </p>
          <p className={clsx(styles.textDescription, styles.textDescriptionBottom)}>
            Estonia / Ukraine • MechOrbit
          </p>
        </div>
      </div>
    </footer>
  );
}
