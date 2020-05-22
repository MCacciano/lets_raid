import React from 'react';

import Navigation from '../components/Navigation';

const MainLayout = ({ children }) => (
  <div
    id="main-layout"
    className="h-screen"
    style={{ display: 'grid', gridTemplateRows: '64px 1fr' }}
  >
    <header>
      <Navigation />
    </header>

    <main>{children}</main>
  </div>
);

export default MainLayout;
