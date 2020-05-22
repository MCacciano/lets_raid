import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { AuthContextProvider } from './context/auth/auth.context';
import { auth } from './firebase/init';

import './index.css';

let app = null;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = ReactDOM.render(
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>,
      document.getElementById('root'),
    );
  }
});
