import clsx from 'clsx';
import styles from './OpportunityScreen.module.scss';
import { BsArrowRightShort, BsDownload } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';

interface OpportunityScreenProps {
  tag: string;
  title: string;
  description: string;
  buttonPitchDeck: string;
  buttonContact: string;
}

export default function OpportunityScreen({
  tag,
  title,
  description,
  buttonPitchDeck,
  buttonContact,
}: OpportunityScreenProps) {
  return (
    <section className={styles.opportunity} id='opportunity'>
      <div className={styles.container}>
        <div className={styles.infoContentMain}>
          <div className={styles.infoContent}>
            <div className={styles.tagBlock}>
              <p>{tag}</p>
            </div>
            <h3 className={styles.titleScreen}>{title}</h3>
            <p className={styles.textDescription}>{description}</p>
            <div className={styles.buttons}>
              <a
                className={styles.button}
                href='https://forms.gle/BQ6bnkKUKLwVrQ8JA'
                target='_blank'>
                <BsDownload className={styles.buttonIcon} />
                {buttonPitchDeck}
              </a>
              <a
                href='mailto:forbludov@gmail.com'
                className={clsx(styles.button, styles.buttonTwo)}
                target='_blank'>
                <LuMail className={styles.buttonIconTwo} />
                {buttonContact}
              </a>
            </div>
            <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
            <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
