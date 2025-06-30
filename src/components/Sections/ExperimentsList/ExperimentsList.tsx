import { useState, useEffect, useRef, useLayoutEffect, createRef } from 'react';
import { gsap } from 'gsap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowDown,
  faAngleDown,
  faSortDown,
  faChevronDown,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import styles from './ExperimentsList.module.scss';

interface Iprops {
  experimentsList: ExperimentsItem[];
}

interface ExperimentsItem {
  url: string;
  title: string;
  description: string;
  tags: string;
  date: string;
  thumb: string;
}

interface MousePOS {
  x: number;
  y: number;
}

const ExperimentsList = ({ experimentsList }: Iprops) => {
  // const [mousePos, setMousePos] = useState<MousePOS>({ x: 0, y: 0 });
  // const [imgSrc, setImgSrc] = useState('');
  // const [showImage, setShowImage] = useState(false);

  const elementsRef = useRef(experimentsList.map(() => createRef()));
  const headerRef = useRef(null);
  const listItems = useRef(null);

  // useLayoutEffect(() => {
  //   // Header
  //   gsap.set(headerRef.current, {
  //     opacity: 0,
  //     y: 110,
  //   });

  //   gsap.to(headerRef.current, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.7,
  //   });

  //   // List Items
  //   experimentsList.forEach((element, i) => {
  //     gsap.set(`.experimentsList__list_item0${i}`, {
  //       opacity: 0,
  //       y: 110,
  //     });
  //     gsap.set(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_title`,
  //       {
  //         opacity: 0,
  //         y: 20,
  //       }
  //     );
  //     gsap.set(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_description`,
  //       {
  //         opacity: 0,
  //         y: 20,
  //       }
  //     );
  //     gsap.set(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_tags`,
  //       {
  //         opacity: 0,
  //         y: 20,
  //       }
  //     );
  //     gsap.set(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_date`,
  //       {
  //         opacity: 0,
  //         y: 20,
  //       }
  //     );
  //   });

  //   experimentsList.forEach((element, i) => {
  //     gsap.to(`.experimentsList__list_item0${i}`, {
  //       y: 0,
  //       opacity: 1,
  //       delay: 0.2 + i / 4,
  //       duration: 0.7,
  //     });
  //     gsap.to(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_title`,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         delay: 0.6 + i / 4,
  //       }
  //     );
  //     gsap.to(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_description`,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         delay: 0.8 + i / 4,
  //       }
  //     );
  //     gsap.to(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_tags`,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         delay: 1.0 + i / 4,
  //       }
  //     );
  //     gsap.to(
  //       `.experimentsList__list_item0${i} .experimentsList__list_item_date`,
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         delay: 1.2 + i / 4,
  //       }
  //     );
  //   }, listItems);
  // }, []);

  // const onShowImage = (toggle: boolean) => {
  //   setShowImage(toggle);
  // };

  // const onListItemHover = (imgSrc: string) => {
  //   setImgSrc(imgSrc);
  // };

  // useEffect(() => {
  //   const section = document.querySelector('#ExperimentsList');
  //   const rect = section.getBoundingClientRect();
  //   const handleMouseMove = (event: MouseEvent) => {
  //     const offsetX = event.pageX - rect.left - window.scrollX;
  //     const offsetY = event.pageY - rect.top - window.scrollY;
  //     setMousePos({ x: offsetX - 225, y: offsetY - 175 });
  //   };

  //   section.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     section.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <section id="ExperimentsList" className={styles.experimentsList}>
      <div className={styles.experimentsList__wrapper}>
        <h1 ref={headerRef} className={styles.experimentsList__header}>
          Side Quests
        </h1>
        <p className={styles.experimentsList__header_sub}>
          Creative experiments, prototypes & playful builds
        </p>
      </div>
      <ul
        ref={listItems}
        // onMouseEnter={() => onShowImage(true)}
        // onMouseLeave={() => onShowImage(false)}
        className={styles.experimentsList__list}
      >
        {experimentsList.map((item, index) => {
          return (
            <a
              key={index}
              target="_blank"
              className={styles.experimentsList__list_item_link}
              href={item.url}
              // onMouseEnter={() => onListItemHover(item.thumb)}
            >
              <li
                className={`experimentsList__list_item0${index} ${styles.experimentsList__list_item}`}
              >
                <div className={styles.experimentsList__list_item_wrapper}>
                  <div
                    className={styles.experimentsList__list_item_title_wrapper}
                  >
                    <span
                      className={`experimentsList__list_item_title ${styles.experimentsList__list_item_title}`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`experimentsList__list_item_description ${styles.experimentsList__list_item_description}`}
                    >
                      {item.description}
                    </span>
                  </div>
                  <span
                    className={`experimentsList__list_item_tags ${styles.experimentsList__list_item_tags}`}
                  >
                    {item.tags}
                  </span>
                  {/* <span
                    className={`experimentsList__list_item_date ${styles.experimentsList__list_item_date}`}
                  >
                    {moment(item.date).format('MMMM Do YYYY')}
                  </span> */}
                  <span
                    className={`experimentsList__list_item_tags ${styles.experimentsList__list_item_icon}`}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
      {/* <img
        className={`${styles.experimentsList__floating_image} ${
          showImage ? '' : 'hidden'
        }`}
        style={{ left: mousePos.x, top: mousePos.y }}
        src={imgSrc}
      /> */}
    </section>
  );
};

export default ExperimentsList;
