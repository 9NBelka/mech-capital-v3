import styles from './InfoAndPriceScreen.module.scss';
import InfoScreen from './InfoScreen/InfoScreen';
import PriceScreen from './PriceScreen/PriceScreen';

interface InfoAndPriceScreenProps {
  info: any;
  price: any;
}

export default function InfoAndPriceScreen({ info, price }: InfoAndPriceScreenProps) {
  return (
    <div className={styles.backgroundScreen}>
      <InfoScreen
        title={info.title}
        titleSpan={info.titleSpan}
        description={info.description}
        cards={info.cards}
      />
      <PriceScreen
        tag={price.tag}
        title={price.title}
        titleSpan={price.titleSpan}
        conclusionSpan={price.conclusionSpan}
        conclusionText={price.conclusionText}
        cards={price.cards}
      />
    </div>
  );
}
