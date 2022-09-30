import style from './Image.module.css';
import PropTypes from 'prop-types';

import notphoto from './img/notphoto.jpg';

export const Image = ({thumbnail, title}) => {
  let imgURL = notphoto;
  if (thumbnail.includes('http')) {
    imgURL = thumbnail;
  }
  return <img src={imgURL} alt={title} className={style.img} />;
};

Image.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
