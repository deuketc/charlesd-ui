import { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setActive] = useState(false);
  const contentClassName = isActive
    ? `${styles.navigation__active} ${styles.navigation}`
    : styles.navigation;

  const onHeaderButtonClick = () => {
    console.log('test');
    setActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h3 className={styles.header__logo}>
          <Link to="/">Charles Deukett</Link>
        </h3>

        <button
          onClick={onHeaderButtonClick}
          className={styles.navigation__button}
        >
          <span>Toggle Mobile Navigation</span>
        </button>
        <nav className={contentClassName}>
          <h4 className={styles.navigation__header}>Header Navigation</h4>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__list_item}>
              <Link
                className={styles.navigation__list_item_link}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link className={styles.navigation__list_item_link} to="/blog">
                Blog
              </Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link className={styles.navigation__list_item_link} to="/resume">
                Resume
              </Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link className={styles.navigation__list_item_link} to="/resume">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
