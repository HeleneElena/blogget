import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomID';

import style from './Tabs.module.css';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Просмотренные', Icon: HomeIcon},
  {value: 'Сохраненные', Icon: PostIcon},
  {value: 'Мои посты', Icon: SaveIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapperBtn}>
        <button className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Добавить пост
          <ArrowIcon width={15} height={15} />
        </button>
      </div>

      {isDropdownOpen && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {
            LIST.map(({value, id}) => (
              <li className={style.item} key={id}>
                <button className={style.btn} onClick={() => {}}>
                  {value}
                </button>
              </li>
            ))} 
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};


