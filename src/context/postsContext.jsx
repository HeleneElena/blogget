import React from 'react';
import PropTypes from 'prop-types';
import {usePostsData} from '../hooks/usePostsData';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [posts] = usePostsData();

  return (
    <postsContext.Provider value={{posts}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
