import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/init';

const Header = () => {
  return (
    <nav className="w-full h-full z-50 bg-white">
      <div className="flex flex-row justify-between items-center h-full text-lg font-medium text-blue-800 border-b border-blue-800">
        <Link to="/">
          <h1 className="text-2xl pl-6">LetsRaid</h1>
        </Link>
        {auth.currentUser ? (
          <Link
            to="/login"
            className="pr-6 cursor-pointer"
            onClick={() => auth.signOut()}
          >
            Logout
          </Link>
        ) : (
          <Link className="pr-6 cursor-pointer" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
