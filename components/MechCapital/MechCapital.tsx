import MechCapitalClient from './MechCapitalClient';

import { getT } from '@/lib/i18n';
import Hero from './sections/Hero/Hero';
import ProblemScreen from './sections/ProblemScreen/ProblemScreen';
import MathScreen from './sections/MathScreen/MathScreen';
import InfoAndPriceScreen from './sections/InfoAndPriceScreen/InfoAndPriceScreen';
import DataScreen from './sections/DataScreen/DataScreen';
import OpportunityScreen from './sections/OpportunityScreen/OpportunityScreen';
import Footer from '../Footer/Footer';

export default function MechCapital({ lang }: { lang: string }) {
  const t = getT(lang);

  return (
    <div>
      <MechCapitalClient lang={lang} t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <ProblemScreen
          tag={t.problem.tag}
          title={t.problem.title}
          subTitle={t.problem.subTitle}
          description={t.problem.description}
          cards={t.problem.cards}
        />
        <MathScreen
          tag={t.math.tag}
          title={t.math.title}
          description={t.math.description}
          graphTitle={t.math.graphTitle}
          graphPercent={t.math.graphPercent}
          graphLabel={t.math.graphLabel}
          legendOld={t.math.legendOld}
          legendOther={t.math.legendOther}
          cards={t.math.cards}
        />
        <InfoAndPriceScreen info={t.info} price={t.price} />
        <DataScreen
          tag={t.data.tag}
          title={t.data.title}
          titleSpan={t.data.titleSpan}
          description={t.data.description}
          cards={t.data.cards}
        />
        <OpportunityScreen
          tag={t.opportunity.tag}
          title={t.opportunity.title}
          description={t.opportunity.description}
          buttonPitchDeck={t.opportunity.buttonPitchDeck}
          buttonContact={t.opportunity.buttonContact}
        />
        <Footer copyright={t.footer.copyright} />
      </main>
    </div>
  );
}
