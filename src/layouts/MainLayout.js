import React from 'react';

import { auth } from '../firebase/init';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const MainLayout = ({ children }) => (
  <div
    id="main-layout"
    className="h-screen"
    style={{ display: 'grid', gridTemplateRows: '64px 1fr' }}
  >
    <header className="sticky top-0">
      <Header />
    </header>

    <main className="flex flex-col md:flex-row w-full h-full">
      <div className="flex-grow md:order-2">{children}</div>
      {auth.currentUser && <Navigation />}
    </main>
  </div>
);

export default MainLayout;
