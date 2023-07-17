import { useRef, useLayoutEffect, createRef } from 'react';
import iagThumb from '../../assets/projects/iag-thumb.jpg';
import { gsap } from 'gsap';
import touchpointThumb from '../../assets/projects/touchpoint-thumb.jpg';
import udcThumb from '../../assets/projects/udc-thumb.jpg';
import unichemThumb from '../../assets/projects/unichem-thumb.jpg';
import watoThumb from '../../assets/projects/wato-thumb.jpg';

import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

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
  const elementsRef = useRef(projectItemList.map(() => createRef()));
  const headerRef = useRef(null);
  const listItems = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
    // Header
    gsap.set(headerRef.current, {
      opacity: 0,
      y: 110,
    });

    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
    });

    // List Items
    projectItemList.forEach((element, i) => {
      gsap.set(`.projects__list_item_0${i}`, {
        opacity: 0,
        y: 110,
      });
      gsap.set(`.projects__list_item_0${i} .projects__list_item_header`, {
        opacity: 0,
        y: 20,
      });
      gsap.set(`.projects__list_item_0${i} .projects__list_item_subheader`, {
        opacity: 0,
        y: 20,
      });
    });

    projectItemList.forEach((element, i) => {
      gsap.to(`.projects__list_item_0${i}`, {
        y: 0,
        opacity: 1,
        delay: 0.2 + i / 4,
        duration: 0.7,
      });
      gsap.to(`.projects__list_item_0${i} .projects__list_item_header`, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.6 + i / 4,
      });
      gsap.to(`.projects__list_item_0${i} .projects__list_item_subheader`, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8 + i / 4,
      });
    });

      return () => ctx.revert();
    }, listItems);


  }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.projects__wrapper}>
        <h1 ref={headerRef} className={styles.projects__header}>
          Projects
        </h1>
        <ul ref={listItems} className={styles.projects__list}>
          {projectItemList.map((projectItem, i) => (
            <li
              key={i}
              className={`projects__list_item_0${i} ${styles.projects__list_item}`}
            >
              <Link
                className={styles.projects__list_item_link}
                to={projectItem.href}
              >
                <img
                  className={styles.projects__list_item_image}
                  src={projectItem.img}
                  alt=""
                />
                <h2 className={`projects__list_item_header ${styles.projects__list_item_header}`}>
                  {projectItem.title}
                </h2>
                <p className={`projects__list_item_subheader ${styles.projects__list_item_subheader}`}>
                  {projectItem.subTitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
