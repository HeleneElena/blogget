import {Layout} from '../Layout/Layout';
import {Logo} from './Logo/Logo';
import {Search} from './Search/Search';
import {Auth} from './Auth/Auth';
import {Heading} from './Heading/Heading';

import style from './Header.module.css';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Главная' />
        <Search />
        <Auth />
      </div>
    </Layout>
  </header>
);
