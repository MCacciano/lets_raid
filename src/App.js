import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import HomePage from './pages/home';
import LoginPage from './pages/login';

import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
};

export default App;
