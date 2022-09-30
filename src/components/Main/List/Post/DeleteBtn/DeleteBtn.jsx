import style from './DeleteBtn.module.css';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const DeleteBtn = () => (
  <button className={style.delete}>
    <DeleteIcon />
  </button>
);
