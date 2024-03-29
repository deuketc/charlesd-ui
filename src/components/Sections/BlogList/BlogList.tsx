import { useState, useEffect, useRef, useLayoutEffect, createRef  } from 'react';
import { gsap } from 'gsap';
import moment from 'moment';

import styles from './BlogList.module.scss';

interface Iprops {
  blogList: BlogItem[];
}

interface BlogItem {
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

const BlogList = ({ blogList }: Iprops) => {
  const [mousePos, setMousePos] = useState<MousePOS>({ x: 0, y: 0 });
  const [imgSrc, setImgSrc] = useState('');
  const [showImage, setShowImage] = useState(false);

  const elementsRef = useRef(blogList.map(() => createRef()));
  const headerRef = useRef(null);
  const listItems = useRef(null);

  useLayoutEffect(() => {

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
    blogList.forEach((element, i) => {
      gsap.set(`.blogList__list_item0${i}`, {
        opacity: 0,
        y: 110,
      });
      gsap.set(`.blogList__list_item0${i} .blogList__list_item_title`, {
        opacity: 0,
        y: 20,
      });
      gsap.set(`.blogList__list_item0${i} .blogList__list_item_description`, {
        opacity: 0,
        y: 20,
      });
      gsap.set(`.blogList__list_item0${i} .blogList__list_item_tags`, {
        opacity: 0,
        y: 20,
      });
      gsap.set(`.blogList__list_item0${i} .blogList__list_item_date`, {
        opacity: 0,
        y: 20,
      });
    });

    blogList.forEach((element, i) => {
      gsap.to(`.blogList__list_item0${i}`, {
        y: 0,
        opacity: 1,
        delay: 0.2 + i / 4,
        duration: 0.7,
      });
      gsap.to(`.blogList__list_item0${i} .blogList__list_item_title`, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.6 + i / 4,
      });
      gsap.to(`.blogList__list_item0${i} .blogList__list_item_description`, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8 + i / 4,
      });
      gsap.to(`.blogList__list_item0${i} .blogList__list_item_tags`, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1.0 + i / 4,
      });
      gsap.to(`.blogList__list_item0${i} .blogList__list_item_date`, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1.2 + i / 4,
      });
    }, listItems);

  }, []);

  const onShowImage = (toggle: boolean) => {
    setShowImage(toggle);
  };

  const onListItemHover = (imgSrc: string) => {
    setImgSrc(imgSrc);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX - 225, y: event.clientY - 175 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.blogList}>
      <div className={styles.blogList__wrapper}>
        <h1 ref={headerRef} className={styles.blogList__header}>Blog</h1>
      </div>
      <ul ref={listItems}
        onMouseEnter={() => onShowImage(true)}
        onMouseLeave={() => onShowImage(false)}
        className={styles.blogList__list}
      >
        {blogList.map((item, index) => {
          return (
            <a
              key={index}
              target="_blank"
              className={styles.blogList__list_item_link}
              href={item.url}
              onMouseEnter={() => onListItemHover(item.thumb)}
            >
              <li className={`blogList__list_item0${index} ${styles.blogList__list_item}`}>
                <div className={styles.blogList__list_item_wrapper}>
                  <div className={styles.blogList__list_item_title_wrapper}>
                    <span className={`blogList__list_item_title ${styles.blogList__list_item_title}`}>
                      {item.title}
                    </span>
                    <span className={`blogList__list_item_description ${styles.blogList__list_item_description}`}>
                      {item.description}
                    </span>
                  </div>
                  <span className={`blogList__list_item_tags ${styles.blogList__list_item_tags}`}>
                    {item.tags}
                  </span>
                  <span className={`blogList__list_item_date ${styles.blogList__list_item_date}`}>
                    {moment(item.date).format('MMMM Do YYYY')}
                  </span>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
      <img
        className={`${styles.blogList__floating_image} ${
          showImage ? '' : 'hidden'
        }`}
        style={{ left: mousePos.x, top: mousePos.y }}
        src={imgSrc}
      />
    </section>
  );
};

export default BlogList;
