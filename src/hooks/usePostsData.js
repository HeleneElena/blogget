import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useToken} from './useToken';

export const usePostsData = () => {
  const [posts, setPosts] = useState({});
  const {token} = useToken();

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
        setPosts(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [posts];
};
