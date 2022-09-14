import {Layout} from '../Layout/Layout';
import {List} from './List/List';
import style from './Main.module.css';
import {Tabs} from './Tabs/Tabs';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <List />    
    </Layout>
  </main>
);
