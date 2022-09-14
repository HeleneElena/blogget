import style from './Rating.module.css';
import PropTypes from 'prop-types';

export const Rating = ({postData}) => { 
  const {ups} = postData;

  return ( 
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг' />
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Понизить рейтинг' />
    </div>
  );
};

Rating.propTypes = {
  postData: PropTypes.object,
};
