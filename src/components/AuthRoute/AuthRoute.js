import React from 'react';

import { auth } from '../../firebase/init';

import { Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component }) => {
  React.useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return auth.currentUser ? <Component /> : <Redirect to='/login' />;
};

export default AuthRoute;
