import style from './Post.module.css';

import PropTypes from 'prop-types';
import Image from './Image';
import Rating from './Rating';
import Time from './Time';
import DeleteBtn from './DeleteBtn';
import Content from './Content';

export const Post = ({postData}) => {
  const {thumbnail, title, author, ups, created} = postData;

  return (
    <ul className={style.post}>
      <Image thumbnail={thumbnail} title={title} />
      <Content title={title} author={author} />
      <Rating ups={ups} />
      <Time date={created} />
      <DeleteBtn />
    </ul>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
