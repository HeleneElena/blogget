import React from 'react';
import PropTypes from 'prop-types';
import {useBestPosts} from '../hooks/useBestPost';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [posts] = useBestPosts();

  return (
    <postsContext.Provider value={{posts}}>
      {children}
    </postsContext.Provider>);
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
