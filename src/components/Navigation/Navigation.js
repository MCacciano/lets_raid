import React from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/auth.context';
import { auth } from '../../firebase/init';

const Navigation = ({ isAuthenticated }) => {
  const { state } = React.useContext(AuthContext);

  return (
    <nav
      className="w-full h-full sticky top-0 z-50"
      style={{ backgroundColor: '#141414' }}
    >
      <div
        className="flex flex-row justify-between items-center mx-12 h-full text-lg font-medium"
        style={{ color: '#f4f4f4' }}
      >
        <Link to="/">
          <h1 className="text-2xl">LetsRaid</h1>
        </Link>
        {state.user ? (
          <ul className="flex flex-row h-full items-center">
            <Link to="/" className="mx-4 cursor-pointer">
              Dashboard
            </Link>
            <Link
              to="/"
              className="mx-4 cursor-pointer"
              onClick={() => auth.signOut()}
            >
              Logout
            </Link>
          </ul>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
