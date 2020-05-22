import React from 'react';

import initialState from './auth.state';
import authReducer from './auth.reducer';

const AuthContext = React.createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
