import styles from './Footer.module.scss';
import LogoTwitter from '../../../assets/svg/LogoTwitter';
import LogoPinterest from '../../../assets/svg/LogoPinterest';
import LogoLinkedin from '../../../assets/svg/LogoLinkedin';
import LogoInstagram from '../../../assets/svg/LogoInstagram';
import LogoYoutube from '../../../assets/svg/LogoYoutube';
import LogoFacebook from '../../../assets/svg/LogoFacebook';
import LogoGithub from '../../../assets/svg/LogoGithub';
import LogoCodepen from '../../../assets/svg/LogoCodepen';

export const footerLinks = [
  {
    label: 'LinkedIn',
    href: 'https://nz.linkedin.com/in/charles-deukett-718bba73',
    img: <LogoLinkedin />
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/user/deuketc',
    img: <LogoYoutube />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/charlesdeukett/',
    img: <LogoInstagram />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/CharlesDeukett',
    img: <LogoTwitter />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/charles.deukett',
    img: <LogoFacebook />,
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.nz/charlesdeukett/',
    img: <LogoPinterest />,
  },
  {
    label: 'Github',
    href: 'https://github.com/deuketc',
    img: <LogoGithub />,
  },
  {
    label: 'Codepen',
    href: 'https://codepen.io/charlesdeukett',
    img: <LogoCodepen />,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <nav className={styles.footer__navigation}>
          <h4 className={styles.footer__header}>Follow me</h4>
          <ul className={styles.footer__list}>
            {footerLinks.map(footerLink => {
              return (
                <li key={footerLink.label} className={styles.footer__list_item}>
                  <a
                    className={styles.footer__list_item_link}
                    target="_blank"
                    href={footerLink.href}
                    rel="noreferrer"
                  >
                    <span className={styles.footer__list_item_label}>
                      {footerLink.label}
                    </span>
                    {footerLink.img}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className={styles.footer__copyright}>
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
