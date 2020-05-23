import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import AuthContext, { AuthContextProvider } from './context/auth/auth.context';
import { auth } from './firebase/init';

import './index.css';

auth.onAuthStateChanged(authUser => {
  if (authUser) {
    ReactDOM.render(
      <AuthContextProvider value={{ user: authUser }}>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>,
      document.getElementById('root'),
    );
  }
});
