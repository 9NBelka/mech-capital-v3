import styles from './Sphera.module.scss';
import clsx from 'clsx';
import { LuBrain, LuFactory, LuWrench } from 'react-icons/lu';
import { BsBoxSeam, BsPeople } from 'react-icons/bs';
import { GoPulse } from 'react-icons/go';
import { PiGlobeSimple } from 'react-icons/pi';

const iconsAndText = [
  {
    icon: (className: string) => <GoPulse className={className} />,
    title: 'CRM',
    classForIconBlock: 'iconContainerCRM',
    class: 'positionCRM',
  },
  {
    icon: (className: string) => <LuFactory className={className} />,
    title: 'MANUFACTURER',
    classForIconBlock: 'iconContainerMANUFACTURER',
    class: 'positionMANUFACTURER',
  },
  {
    icon: (className: string) => <LuBrain className={className} />,
    title: 'AI',
    classForIconBlock: 'iconContainerAI',
    class: 'positionAI',
  },
  {
    icon: (className: string) => <LuWrench className={className} />,
    title: 'MECHANIK',
    classForIconBlock: 'iconContainerMECHANIK',
    class: 'positionMECHANIK',
  },
  {
    icon: (className: string) => <BsPeople className={className} />,
    title: 'CLIENT',
    classForIconBlock: 'iconContainerCLIENT',
    class: 'positionCLIENT',
  },
  {
    icon: (className: string) => <BsBoxSeam className={className} />,
    title: 'DEALER',
    classForIconBlock: 'iconContainerDEALER',
    class: 'positionDEALER',
  },
];

const titleColors = [
  '',
  'cardTitleCyan',
  'cardTitlePurple',
  'cardTitleLightGreen',
  'cardTitleLightBlue',
  'cardTitleOrange',
];

export default function Sphera() {
  return (
    <div className={styles.spheraMainBlock}>
      <div className={styles.circlesBlock}>
        <div className={styles.borderCirclePurple}></div>
        <div className={styles.borderCircleBlue}></div>
        <div className={styles.blockForMainIcon}>
          <PiGlobeSimple className={styles.mainIcon} />
        </div>
        <div className={styles.iconsAndTextBlock}>
          {iconsAndText.map((item, index) => (
            <div key={index} className={clsx(styles.iconsAndText, styles[item.class])}>
              <div className={clsx(styles.iconContainer, styles[item.classForIconBlock])}>
                {item.icon(styles.cardIcon)}
              </div>
              <h4
                className={clsx(
                  styles.cardTitle,
                  titleColors[index] && styles[titleColors[index]],
                )}>
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
