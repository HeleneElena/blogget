import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from './../context/tokenContext';

export const usePostsData = () => {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({data}) => {
        console.log(data.children);
        setPosts(data.children);
      })
      .catch(err => {
        console.error(err);
        setPosts([]);
      });
  }, [token]);

  return [posts];
};
