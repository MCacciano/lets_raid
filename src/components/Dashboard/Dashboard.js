import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from '../../firebase/init';
import DashboardNav from '../Navigation/Navigation';

const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <h1 className="text-3xl my-10 text-center">
        Welcome <br /> {auth.currentUser.displayName}!
      </h1>
    </div>
  );
};

export default Dashboard;
