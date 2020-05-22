import React from 'react';

import AuthContext from '../../context/auth/auth.context';

const Dashboard = () => {
  const {
    state: { user },
  } = React.useContext(AuthContext);

  return (
    <div className="flex flex-col h-full w-full text-center">
      <h1 className="text-2xl m-4">{user.displayName}</h1>
    </div>
  );
};

export default Dashboard;
