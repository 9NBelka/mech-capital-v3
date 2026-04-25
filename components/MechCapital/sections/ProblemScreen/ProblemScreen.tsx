import styles from './ProblemScreen.module.scss';
import clsx from 'clsx';
import { LuBrain, LuWrench } from 'react-icons/lu';
import { FaArrowTrendUp } from 'react-icons/fa6';

interface Card {
  title: string;
  description: string;
  iconType: string;
}

interface ProblemScreenProps {
  tag: string;
  title: string;
  subTitle: string;
  description: string;
  cards: Card[];
}

const classForHover = ['classForHoverBlue', 'classForHoverPurple', 'classForHoverOrange'];

function renderIcon(iconType: string, className: string) {
  if (iconType === 'brain') return <LuBrain className={clsx(className, styles.colorPurple)} />;
  if (iconType === 'trend')
    return <FaArrowTrendUp className={clsx(className, styles.colorOrange)} />;
  return <LuWrench className={className} />;
}

export default function ProblemScreen({
  tag,
  title,
  subTitle,
  description,
  cards,
}: ProblemScreenProps) {
  return (
    <section className={styles.problem} id='problem'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>{tag}</p>
          </div>
          <h3 className={styles.titleScreen}>{title}</h3>
          <h5 className={styles.titleForDescription}>{subTitle}</h5>
          <p className={styles.textDescription}>{description}</p>

          <div className={styles.blocksWithExperience}>
            {cards.map((card, index) => (
              <div key={index} className={clsx(styles.card, styles[classForHover[index]])}>
                <div className={styles.iconAndTextBlock}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerPurple,
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
    </section>
  );
}
