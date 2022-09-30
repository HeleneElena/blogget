import React from 'react';
import PropTypes from 'prop-types';

export const tokenContext = React.createContext({});

export const TokenContextProvider = ({token, delToken, children}) => (
  <tokenContext.Provider value={{token, delToken}}>
    {children}
  </tokenContext.Provider>
);

TokenContextProvider.propTypes = {
  token: PropTypes.string.isRequired,
  delToken: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
