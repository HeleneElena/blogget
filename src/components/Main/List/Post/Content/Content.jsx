import PropTypes from 'prop-types';
import style from './Content.module.css';
import notfoto from '../img/notphoto.jpg';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';

export const Content = ({postData}) => { 
  const {title, author, thumbnail} = postData;
  const [showFoto, setShowFoto] = useState(true);

  const haveFoto = () => {
    setShowFoto(false);
  };

  return ( 
    <>
      {showFoto ?
        (<img className={style.img} src={thumbnail} alt={title} onError={haveFoto} />) :
        (<img className={style.img} src={notfoto} alt={title} />)
      }
      <div className={style.content}>
        <Text As='h2' className={style.title}>
          <Text 
            As='a' 
            size={18}
            tsize={24} 
            className={style.linkPost} href="#post">
            {title}
          </Text>
        </Text>
        <Text 
          As='a' 
          color='orange'
          size={12}
          tsize={14} 
          className={style.linkAuthor} 
          href="#author">
          {author}
        </Text>
      </div>
    </>
  );
};

Content.propTypes = {
  postData: PropTypes.object,
};
