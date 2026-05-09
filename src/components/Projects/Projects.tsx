import { useRef } from 'react';
import iagThumb from '../../assets/projects/iag-thumb.jpg';
import touchpointThumb from '../../assets/projects/touchpoint-thumb.jpg';
import udcThumb from '../../assets/projects/udc-thumb.jpg';
import unichemThumb from '../../assets/projects/unichem-thumb.jpg';
import watoThumb from '../../assets/projects/wato-thumb.jpg';
import useImagesPreloader from '../../hooks/UseImagesPreloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';
import Spinner from '../layout/Spinner/Spinner';

const projectItemList = [
  {
    title: 'IAG',
    subTitle: 'Full-time Web Developer',
    href: '/projects/iag',
    img: iagThumb,
  },
  {
    title: 'What are the odds?',
    subTitle: 'Microsite promotion',
    href: '/projects/wato',
    img: watoThumb,
  },
  {
    title: 'UDC',
    subTitle: 'Website development',
    href: '/projects/udc',
    img: udcThumb,
  },
  {
    title: 'Touchpoint Group',
    subTitle: 'Front-end developer role',
    href: '/projects/touchpoint',
    img: touchpointThumb,
  },
  {
    title: 'Unichem',
    subTitle: 'Website development',
    href: '/projects/unichem',
    img: unichemThumb,
  },
];

const Projects = () => {
  const images = [iagThumb, watoThumb, udcThumb, touchpointThumb, unichemThumb];
  const imgsLoaded = useImagesPreloader(images);
  const headerRef = useRef(null);
  const headerSubRef = useRef(null);
  const listItems = useRef(null);

  return imgsLoaded ? (
    <section className={styles.projects}>
      <div className={styles.projects__wrapper}>
        <div className={styles.projects__copy}>
          <h1 ref={headerRef} className={styles.projects__header}>
            Featured Projects
          </h1>
          <p ref={headerSubRef} className={styles.projects__header_sub}>
            A selection of key projects from my career as a web developer,
            showcasing impactful work delivered across larger-scale initiatives.
          </p>
        </div>
        <ul ref={listItems} className={styles.projects__list}>
          {projectItemList.map((projectItem, i) => (
            <li key={i} className={styles.projects__list_item}>
              <Link
                className={styles.projects__list_item_link}
                to={projectItem.href}
              >
                <div className={styles.projects__list_item_image_wrapper}>
                  <img
                    className={styles.projects__list_item_image}
                    src={projectItem.img}
                    alt=""
                  />
                </div>
                <div className={styles.projects__list_item_content}>
                  <h2 className={styles.projects__list_item_header}>
                    <span className={styles.projects__list_item_header_arrow}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                    {projectItem.title}
                  </h2>
                  <p className={styles.projects__list_item_subheader}>
                    {projectItem.subTitle}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <Spinner />
  );
};

export default Projects;
