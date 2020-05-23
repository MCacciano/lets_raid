import React from 'react';

import AuthContext from '../../context/auth/auth.context';
import { auth } from '../../firebase/init';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-full text-center">
      <h1 className="text-2xl m-4">{auth.currentUser.displayName}</h1>
    </div>
  );
};

export default Dashboard;
