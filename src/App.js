import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faDragon,
  faCalendar,
  faCalendarAlt,
  faHatWizard,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

// pages
import DashboardPage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/sign-up';

import MainLayout from './layouts/MainLayout';
import AuthRoute from './components/AuthRoute';

import AuthContext from './context/auth/auth.context';
import { auth, db, createUserDocument } from './firebase/init';

import './App.css';

library.add(fab, faCalendar, faCalendarAlt, faDragon, faHatWizard, faRobot);

const App = () => {
  const { dispatch } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    const unsub = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        try {
          await createUserDocument(authUser);
          history.push('/');
        } catch (err) {
          console.error(err);
        }
      } else {
        dispatch({ type: 'SET_USER', payload: authUser });
      }
    });

    return () => unsub();
    // eslint-disable-next-line
  }, []);

  return (
    <MainLayout>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            auth.currentUser ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <AuthRoute exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </MainLayout>
  );
};

export default App;
