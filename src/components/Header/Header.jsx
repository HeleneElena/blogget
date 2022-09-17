import {Layout} from '../Layout/Layout';
import {Logo} from './Logo/Logo';
import {Search} from './Search/Search';
import {Auth} from './Auth/Auth';
import {Heading} from './Heading/Heading';
import {PropTypes} from 'prop-types';

import style from './Header.module.css';

const text = 'Главная';

export const Header = ({token}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading text={text} />
        <Search />
        <Auth token={token} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
};
