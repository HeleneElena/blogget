import {useState, useEffect} from 'react';
import style from './Tabs.module.css';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';

import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: 'Главная', Icon: BestIcon},
  {value: 'Топ', Icon: HomeIcon},
  {value: 'Лучшее', Icon: HotIcon},
  {value: 'Горячие', Icon: TopIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [textBtn, setTextBtn] = useState('Показать меню');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <Text As="button" className={style.btn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {textBtn} <ArrowIcon width={15} height={15} />
          </Text>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={isDropdown ? () => setIsDropdownOpen(false) : null}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <Text As="button" className={style.btn} onClick={() => setTextBtn(value)}>
                {value} {Icon && <Icon width={25} height={25} />}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
