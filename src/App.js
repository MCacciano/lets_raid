import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faDragon,
  faCalendar,
  faCalendarAlt,
  faColumns,
  faHatWizard,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

// pages
import LoginPage from './pages/login';
import SignUpPage from './pages/sign-up';
import DashboardPage from './pages/dashboard';
import FightsPage from './pages/fights';
import GearPage from './pages/gear';
import MountsPage from './pages/mounts';
import SchedulePage from './pages/schedule';

import MainLayout from './layouts/MainLayout';
import AuthRoute from './components/AuthRoute';

import AuthContext from './context/auth/auth.context';
import { auth, db, createUserDocument } from './firebase/init';

import './App.css';

library.add(
  fab,
  faCalendar,
  faCalendarAlt,
  faColumns,
  faDragon,
  faHatWizard,
  faRobot,
);

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
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <AuthRoute path="/dashboard" component={DashboardPage} />
        <AuthRoute path="/fights" component={FightsPage} />
        <AuthRoute path="/gear" component={GearPage} />
        <AuthRoute path="/mounts" component={MountsPage} />
        <AuthRoute path="/schedule" component={SchedulePage} />
      </Switch>
    </MainLayout>
  );
};

export default App;
