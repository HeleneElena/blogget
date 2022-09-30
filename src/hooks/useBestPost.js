import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({data}) => {
        const postsData = data.children;
        setPosts(postsData);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [posts];
};
