import PropTypes from 'prop-types';
import style from './Content.module.css';
import notfoto from '../img/notphoto.jpg';

export const Content = ({postData}) => { 
  const {title, author} = postData;

  return ( 
    <>
      <img className={style.img} src={notfoto} alt={title} />
      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href="#post">
            {title}
          </a>
        </h2>
        <a className={style.linkAuthor} href="#author">{author}</a>
      </div>
    </>
  );
};

Content.propTypes = {
  postData: PropTypes.object,
};
