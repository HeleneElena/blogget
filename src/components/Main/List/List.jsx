import Post from './Post';
import style from './List.module.css';
import {useContext} from 'react';
import {postsContext} from './../../../context/postsContext';

export const List = () => { 
  const {posts} = useContext(postsContext);

  return (
    <ul className={style.list}>
      {
        posts.map(post => (<Post key={post.id} postData={post} />))
      }
    </ul>
  );
};

