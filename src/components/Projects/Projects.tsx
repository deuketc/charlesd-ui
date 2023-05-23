import iagThumb from '../../assets/projects/iag-thumb.jpg';
import touchpointThumb from '../../assets/projects/touchpoint-thumb.png';
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
  return (
    <section className={styles.projects}>
      <div className={styles.projects__wrapper}>
        <h1 className={styles.projects__header}>Projects</h1>
        <ul className={styles.projects__list}>
          {projectItemList.map((projectItem, i) => (
            <li key={i} className={styles.projects__list_item}>
              <Link
                className={styles.projects__list_item_link}
                to={projectItem.href}
              >
                <img
                  className={styles.projects__list_item_image}
                  src={projectItem.img}
                  alt=""
                />
                <h2 className={styles.projects__list_item_header}>
                  {projectItem.title}
                </h2>
                <p className={styles.projects__list_item_subheader}>
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
