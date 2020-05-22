import React from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/auth.context';

const AuthRoute = ({ component: Component }) => {
  const { state } = React.useContext(AuthContext);

  return state.user ? <Component /> : <Redirect to={{ pathname: '/login' }} />;
};

export default AuthRoute;
