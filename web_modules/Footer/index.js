import Social from '../Social';
import styles from './index.css';

const Footer = () => (
  <footer className={ styles.footerWrapper }>
    <div className={ styles.footer }>
      <Social />
      <p className={ styles.copyright }>
        Kazi Erfan © All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
