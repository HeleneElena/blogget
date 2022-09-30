import PropTypes from 'prop-types';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {BtnDelete} from './BtnDelete/BtnDelete';

import style from './Post.module.css';

export const Post = ({postData}) => { 
  const {title, author, ups, thumbnail} = postData;

  return (
    <li className={style.post}>
      <Content postData={{title, author, thumbnail}} />
      <Rating postData={ups} />
      <BtnDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
