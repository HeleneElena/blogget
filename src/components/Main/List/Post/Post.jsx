import PropTypes from 'prop-types';
import formatDate from './../../../../utils/formatDate';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {BtnDelete} from './BtnDelete/BtnDelete';

import style from './Post.module.css';

export const Post = ({postData}) => { 
  const {date} = postData;

  return (
    <li className={style.post}>
      <Content postData={postData} />
      <Rating postData={postData} />
      <BtnDelete />
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
