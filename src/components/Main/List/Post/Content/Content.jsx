import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Content = ({title, author}) => (
  <div className={style.content}>
    <Text As="h2" className={style.title}>
      <Text As="a" bold size={26} tsize={32} className={style.linkPost} href="#post">
        {title}
      </Text>
    </Text>
    <Text As="a" size={12} tsize={14} color="orange" className={style.linkAuthor} href="#author">
      {author}
    </Text>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
