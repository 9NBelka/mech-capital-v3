import styles from './InfoScreen.module.scss';
import clsx from 'clsx';
import { LuDatabase, LuLink } from 'react-icons/lu';
import { BsPhone } from 'react-icons/bs';
import { RxLightningBolt } from 'react-icons/rx';
import Sphera from './Sphera/Sphera';

interface Card {
  title: string;
  description: string;
  iconType: string;
}

interface InfoScreenProps {
  title: string;
  titleSpan: string;
  description: string;
  cards: Card[];
}

function renderIcon(iconType: string, className: string) {
  if (iconType === 'link') return <LuLink className={clsx(className, styles.colorPurple)} />;
  if (iconType === 'database') return <LuDatabase className={clsx(className, styles.colorGreen)} />;
  if (iconType === 'lightning')
    return <RxLightningBolt className={clsx(className, styles.colorOrange)} />;
  return <BsPhone className={className} />;
}

export default function InfoScreen({ title, titleSpan, description, cards }: InfoScreenProps) {
  return (
    <section className={styles.informations} id='solution'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.titleScreen}>
            {title}
            <br />
            <span>{titleSpan}</span>
          </h3>
          <p className={styles.textDescription}>{description}</p>
          <div className={styles.sphera}>
            <Sphera />
          </div>
          <div className={styles.blocksWithExperience}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconAndTextBlock}>
                  <div className={styles.iconContainer}>
                    {renderIcon(card.iconType, styles.cardIcon)}
                  </div>
                  <h4 className={styles.cardTitleMain}>
                    {index + 1}. {card.title}
                  </h4>
                </div>
                <div className={styles.cardTitleAndDescription}>
                  <h4 className={styles.cardTitle}>
                    {index + 1}. {card.title}
                  </h4>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
