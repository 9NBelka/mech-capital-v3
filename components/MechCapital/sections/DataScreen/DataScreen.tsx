import styles from './DataScreen.module.scss';
import clsx from 'clsx';
import { LuDatabase } from 'react-icons/lu';
import { GoGraph } from 'react-icons/go';
import { BsDiagram2 } from 'react-icons/bs';

interface Card {
  title: string;
  description: string;
  iconType: string;
}

interface DataScreenProps {
  tag: string;
  title: string;
  titleSpan: string;
  description: string;
  cards: Card[];
}

const classForHover = ['classForHoverPurple', 'classForHoverBlue', 'classForHoverOrange'];

function renderIcon(iconType: string, className: string) {
  if (iconType === 'graph') return <GoGraph className={clsx(className, styles.colorBlue)} />;
  if (iconType === 'diagram') return <BsDiagram2 className={clsx(className, styles.colorOrange)} />;
  return <LuDatabase className={className} />;
}

export default function DataScreen({ tag, title, titleSpan, description, cards }: DataScreenProps) {
  return (
    <section className={styles.dataScreen} id='dataScreen'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>{tag}</p>
          </div>
          <h3 className={styles.titleScreen}>
            {title} <span>{titleSpan}</span>
          </h3>
          <p className={styles.textDescription}>{description}</p>

          <div className={styles.blocksWithExperience}>
            {cards.map((card, index) => (
              <div key={index} className={clsx(styles.card, styles[classForHover[index]])}>
                <div className={styles.iconAndTextBlock}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerBlue,
                      index === 2 && styles.iconContainerOrange,
                    )}>
                    {renderIcon(card.iconType, styles.cardIcon)}
                  </div>
                  <h4 className={styles.cardTitleMain}>{card.title}</h4>
                </div>
                <div className={styles.cardTitleAndDescription}>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={clsx(styles.neonCircle, styles.bluePrint)}></div>
      <div className={clsx(styles.neonCircle, styles.pinkPrint)}></div>
    </section>
  );
}
