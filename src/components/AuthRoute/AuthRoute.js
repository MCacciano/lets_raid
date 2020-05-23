import React from 'react';

import { auth } from '../../firebase/init';

import AuthContext from '../../context/auth/auth.context';
import LoginPage from '../../pages/login';

const AuthRoute = ({ component: Component }) => {
  return auth.currentUser ? <Component /> : <LoginPage />;
};

export default AuthRoute;
