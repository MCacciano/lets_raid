import React, { Children } from 'react';

import { auth } from '../../firebase/init';

import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, children, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={({ location }) =>
        auth.currentUser ? (
          <Component />
        ) : (
          // children
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
  // return auth.currentUser ? (
  //   <Component />
  // ) : (
  //   <Redirect to={{ pathname: '/login', state: { from: location } }} />
  // );
  // return auth.currentUser ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: location }}} />;
};

export default AuthRoute;
