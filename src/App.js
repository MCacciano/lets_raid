import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

// pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignUpPage from './pages/sign-up';

import MainLayout from './layouts/MainLayout';
import AuthRoute from './components/AuthRoute';

import AuthContext from './context/auth/auth.context';
import { auth, db, createUserDocument } from './firebase/init';

import './App.css';

const App = () => {
  const { dispatch } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    const unsub = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        try {
          const userRef = await createUserDocument(authUser);

          userRef.onSnapshot(snapShot => {
            dispatch({
              type: 'SET_USER',
              payload: { id: snapShot.id, ...snapShot.data() },
            });
            history.push('/');
          });
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
    <>
      <MainLayout>
        <Switch>
          <AuthRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sign-up" component={SignUpPage} />
        </Switch>
      </MainLayout>
    </>
  );
};

export default App;
