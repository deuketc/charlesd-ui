import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ExperimentsList.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Iprops {
  experimentsList: ExperimentsItem[];
}

interface ExperimentsItem {
  url: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  thumb: string;
  icon: IconDefinition;
  backgroundColor: string;
}

const ExperimentsList = ({ experimentsList }: Iprops) => {
  return (
    <section id="ExperimentsList" className={styles.experimentsList}>
      <div className={styles.experimentsList__wrapper}>
        <h1 className={styles.experimentsList__header}>Side Quests</h1>
        <p className={styles.experimentsList__header_sub}>
          Creative experiments, prototypes & playful builds
        </p>
      </div>
      <ul className={styles.experimentsList__list}>
        {experimentsList.map((item, index) => {
          return (
            <a
              key={index}
              target="_blank"
              className={styles.experimentsList__list_item_link}
              href={item.url}
              style={{ backgroundColor: item.backgroundColor }}
            >
              <li className={styles.experimentsList__list_item}>
                <div className={styles.experimentsList__list_item_wrapper}>
                  <div
                    className={styles.experimentsList__list_item_title_wrapper}
                  >
                    <p className={styles.experimentsList__list_item_icon}>
                      <FontAwesomeIcon icon={item.icon} />
                    </p>
                    <p className={styles.experimentsList__list_item_title}>
                      {item.title}
                    </p>
                    <p
                      className={styles.experimentsList__list_item_description}
                    >
                      {item.description}
                    </p>
                  </div>
                  <p className={styles.experimentsList__list_item_tags}>
                    {item.tags.map((tag, index) => (
                      <span
                        className={styles.experimentsList__list_item_tag}
                        key={index}
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default ExperimentsList;
