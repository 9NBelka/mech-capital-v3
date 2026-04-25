import styles from './PriceScreen.module.scss';
import clsx from 'clsx';
import { BsPeople } from 'react-icons/bs';
import { BiBullseye } from 'react-icons/bi';
import { LuCircleCheckBig } from 'react-icons/lu';

interface ListItem {
  text: string;
  value: string;
  valueClass?: string;
}

interface PriceCard {
  title: string;
  subTitle: string;
  image: string;
  classForHover: string;
  iconType: string;
  list: ListItem[];
  button: { text: string; classForColor?: string };
}

interface PriceScreenProps {
  tag: string;
  title: string;
  titleSpan: string;
  conclusionSpan: string;
  conclusionText: string;
  cards: PriceCard[];
}

function renderIcon(iconType: string, className: string) {
  if (iconType === 'people') return <BsPeople className={clsx(className, styles.colorGreen)} />;
  return <BiBullseye className={className} />;
}

export default function PriceScreen({
  tag,
  title,
  titleSpan,
  conclusionSpan,
  conclusionText,
  cards,
}: PriceScreenProps) {
  return (
    <section className={styles.price} id='result'>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.tagBlock}>
            <p>{tag}</p>
          </div>
          <h3 className={styles.titleScreen}>
            {title}
            <br />
            <span>{titleSpan}</span>
          </h3>

          <div className={styles.blocksWithCardPrice}>
            {cards.map((card, index) => (
              <div key={index} className={clsx(styles.card, styles[card.classForHover])}>
                <div className={styles.imageOnBackground}>
                  <img src={card.image} alt={`card-${index}`} />
                </div>
                <div className={styles.iconAndTitleDescriptionBlock}>
                  <div
                    className={clsx(
                      styles.iconContainer,
                      index === 1 && styles.iconContainerGreen,
                    )}>
                    {renderIcon(card.iconType, styles.cardIcon)}
                  </div>
                  <div className={styles.titleAndDescriptionBlock}>
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                    <p
                      className={clsx(
                        styles.cardDescription,
                        index === 1 && styles.iconContainerGreen,
                      )}>
                      {card.subTitle}
                    </p>
                  </div>
                </div>
                <div className={styles.listBlockColumn}>
                  {card.list.map((item, i) => (
                    <div key={i} className={styles.listBlockRow}>
                      <p className={styles.listText}>{item.text}</p>
                      <p
                        className={clsx(
                          styles.listNumbText,
                          item.valueClass && styles[item.valueClass],
                        )}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.cardPriceButtonBlock}>
                  <a
                    className={clsx(
                      styles.cardPriceButton,
                      card.button.classForColor && styles[card.button.classForColor],
                    )}>
                    {card.button.text}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.conclusionBlock}>
            <LuCircleCheckBig className={styles.iconCheck} />
            <h6 className={styles.conclusionText}>
              <span>{conclusionSpan}</span> {conclusionText}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
