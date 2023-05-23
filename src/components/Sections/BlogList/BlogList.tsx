import { useState, useEffect } from 'react';
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
        <h1 className={styles.blogList__header}>Blog</h1>
      </div>
      <ul
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
              <li className={styles.blogList__list_item}>
                <div className={styles.blogList__list_item_wrapper}>
                  <div className={styles.blogList__list_item_title_wrapper}>
                    <span className={styles.blogList__list_item_title}>
                      {item.title}
                    </span>
                    <span className={styles.blogList__list_item_description}>
                      {item.description}
                    </span>
                  </div>
                  <span className={styles.blogList__list_item_tags}>
                    {item.tags}
                  </span>
                  <span className={styles.blogList__list_item_date}>
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
