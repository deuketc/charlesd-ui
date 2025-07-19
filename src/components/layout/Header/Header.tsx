import { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isActive, setActive] = useState(false);
  const contentClassName = isActive
    ? `${styles.navigation__active} ${styles.navigation}`
    : styles.navigation;
  const btnClassName = isActive ? `is-active` : '';

  const onHeaderButtonClick = () => {
    setActive(!isActive);
  };

  const onHeaderLinkClick = () => {
    setActive(false);
  };

  return (
    <header className={`${styles.header} ${btnClassName}`}>
      <div className={styles.header__wrapper}>
        <h3 className={styles.header__logo}>
          <Link to="/">Charles D.</Link>
        </h3>

        <button
          onClick={onHeaderButtonClick}
          className={`${styles.navigation__button} ${btnClassName} hamburger hamburger--slider`}
        >
          <span className={styles.navigation__button_label}>
            Toggle Mobile Navigation
          </span>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
        <nav className={contentClassName}>
          <h4 className={styles.navigation__header}>Header Navigation</h4>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__list_item}>
              <Link
                onClick={onHeaderLinkClick}
                className={`${styles.navigation__list_item_link_mobile} ${styles.navigation__list_item_link}`}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link
                onClick={onHeaderLinkClick}
                className={`${styles.navigation__list_item_link_mobile} ${styles.navigation__list_item_link}`}
                to="/experiments"
              >
                Experiments
              </Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link
                onClick={onHeaderLinkClick}
                className={styles.navigation__list_item_link}
                to="/resume"
              >
                <FontAwesomeIcon
                  className={styles.navigation__list_item_link_icon}
                  icon={faUserTie}
                />
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
