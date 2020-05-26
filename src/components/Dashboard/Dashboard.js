import React from 'react';

import { auth } from '../../firebase/init';
import DashboardNav from '../DashboardNav/DashboardNav';

const Dashboard = () => {
  return (
    <div
      className="w-full h-full"
      style={{ display: 'grid', gridTemplateColumns: '200px 1fr' }}
    >
      <DashboardNav />
      <div className="h-full"></div>
    </div>
  );
};

export default Dashboard;
