import PropTypes from 'prop-types';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {BtnDelete} from './BtnDelete/BtnDelete';

import style from './Post.module.css';
import {Time} from './Time/Time';

export const Post = ({postData}) => { 
  const {title, author, ups, url, thumbnail, date} = postData;

  return (
    <li className={style.post}>
      <Content postData={{title, author, url, thumbnail}} />
      <Rating postData={ups} />
      <BtnDelete />
      <Time date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
