import styles from './MathScreen.module.scss';
import clsx from 'clsx';
import { FaArrowTrendDown } from 'react-icons/fa6';
import { CgFileDocument } from 'react-icons/cg';
import { BsExclamationTriangle } from 'react-icons/bs';

interface Card {
  title: string;
  description: string;
  iconType: string;
}

interface MathScreenProps {
  tag: string;
  title: string;
  description: string;
  graphTitle: string;
  graphPercent: string;
  graphLabel: string;
  legendOld: string;
  legendOther: string;
  cards: Card[];
}

function renderIcon(iconType: string, className: string) {
  if (iconType === 'trend')
    return <FaArrowTrendDown className={clsx(className, styles.colorPurple)} />;
  if (iconType === 'warning')
    return <BsExclamationTriangle className={clsx(className, styles.colorOrange)} />;
  return <CgFileDocument className={className} />;
}

export default function MathScreen({
  tag,
  title,
  description,
  graphTitle,
  graphPercent,
  graphLabel,
  legendOld,
  legendOther,
  cards,
}: MathScreenProps) {
  return (
    <section className={styles.mathBlock} id='solution'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <BsExclamationTriangle className={styles.tagBlockIcon} />
            <p>{tag}</p>
          </div>
          <h3 className={styles.titleScreen}>{title}</h3>
          <p className={styles.textDescription}>{description}</p>

          <div className={styles.blockGraphAndIconsBlocks}>
            <div className={styles.blockGraph}>
              <h4 className={styles.blockGraphTitle}>{graphTitle}</h4>
              <div className={styles.graph}>
                <div className={styles.graphRed}>
                  <img src='/images/redGraph.png' alt='red graph' />
                </div>
                <div className={styles.graphBlockText}>
                  <h5 className={styles.graphNumbText}>{graphPercent}</h5>
                  <p className={styles.graphText}>{graphLabel}</p>
                </div>
                <div className={styles.graphBlue}>
                  <img src='/images/blueGraph.png' alt='blue graph' />
                </div>
              </div>
              <div className={styles.graphNameBlock}>
                <div className={styles.dotWithTextBlock}>
                  <div className={styles.dot}></div>
                  <p>{legendOld}</p>
                </div>
                <div className={styles.dotWithTextBlock}>
                  <div className={clsx(styles.dot, styles.dotBlue)}></div>
                  <p>{legendOther}</p>
                </div>
              </div>
            </div>

            <div className={styles.iconsBlocks}>
              {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerPurple,
                      index === 2 && styles.iconContainerOrange,
                    )}>
                    {renderIcon(card.iconType, styles.cardIcon)}
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
      </div>
    </section>
  );
}
