import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href="/">
    <img src={logo} alt="Логотип Blogget" className={style.logo} />
  </a>
);
