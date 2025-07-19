import styles from './Footer.module.scss';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faYoutube,
  faInstagram,
  faXTwitter,
  faFacebook,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const footerLinks = [
  {
    label: 'LinkedIn',
    href: 'https://nz.linkedin.com/in/charles-deukett-718bba73',
    icon: faLinkedin,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/user/deuketc',
    icon: faYoutube,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/charlesdeukett/',
    icon: faInstagram,
  },
  {
    label: 'X',
    href: 'https://x.com/CharlesDeukett',
    icon: faXTwitter,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/charles.deukett',
    icon: faFacebook,
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.nz/charlesdeukett/',
    icon: faPinterest,
  },
  {
    label: 'Github',
    href: 'https://github.com/deuketc',
    icon: faGithub,
  },
  {
    label: 'Codepen',
    href: 'https://codepen.io/charlesdeukett',
    icon: faCodepen,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <nav className={styles.footer__navigation}>
          <div className={styles.footer__header_wrapper}>
            <h4 className={styles.footer__header}>Follow me</h4>
            <p className={styles.footer__header_sub}>
              Let's connect and build something cool together.
            </p>
          </div>
          <ul className={styles.footer__list}>
            {footerLinks.map(footerLink => {
              return (
                <li key={footerLink.label} className={styles.footer__list_item}>
                  <a
                    className={`${styles[footerLink.label.toLowerCase()]} ${
                      styles.footer__list_item_link
                    }`}
                    target="_blank"
                    href={footerLink.href}
                    rel="noreferrer"
                  >
                    <span className={styles.footer__list_item_label}>
                      {footerLink.label}
                    </span>
                    <FontAwesomeIcon icon={footerLink.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className={styles.footer__copyright}>
          <span>&copy; {new Date().getFullYear()} Charles Deukett</span>
          <span>Made with love & caffeine</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
