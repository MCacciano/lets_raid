import React from 'react';

import { auth } from '../../firebase/init';
import DashboardNav from '../DashboardNav/DashboardNav';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-grow bg-blue-500"></div>
      <DashboardNav />
    </div>
  );
};

export default Dashboard;
