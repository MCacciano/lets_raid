import React from 'react';
import { Link } from 'react-router-dom';

// components
import Input from '../Input';
import Button from '../Button';

import { signInWithGoogle } from '../../firebase/init';
import { ReactComponent as GoogleIcon } from '../../images/btn_google_light_normal_ios.svg';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  const handleOnClick = e => {
    console.log({ email, password });
  };

  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="mb-10 font-semibold text-5xl text-blue-800">
        <h1>Welcome to LetsRaid!</h1>
      </div>
      <div className="mb-10 z-10 bg-white shadow rounded border border-blue-900 max-w-sm w-5/6">
        <form
          className="flex flex-col justify-center mx-auto p-6 md:w-3/4"
          onSubmit={handleOnSubmit}
        >
          <Input
            onChange={handleEmail}
            type="email"
            label="Email"
            className="mb-4 focus:border-blue-800"
          />
          <Input
            onChange={handlePassword}
            type="password"
            label="Password"
            className="mb-4 focus:border-blue-800"
          />
          <div className="flex flex-col justify-between mb-4 md:flex-row">
            <Button
              className="w-full mb-2 md:mb-0 border border-blue-700 text-blue-700 hover:bg-blue-700"
              onClick={handleOnClick}
            >
              Login
            </Button>
            {/* <Button onClick={signInWithGoogle} isGoogleSignIn>
            Login With Google
          </Button> */}
          </div>
          <div className="flex flex-col justify-center items-center my-4">
            <p className="flex flex-col items-center md:flex-row text-sm">
              <span className="italic">Don't have an account yet?</span>{' '}
              <Link
                to="/sign-up"
                className="pl-2 font-semibold text-blue-800 hover:border"
              >
                Sign Up!
              </Link>
            </p>
            <span className="italic my-2">or</span>{' '}
            <Button
              className="flex justify-center items-center w-full whitespace-no-wrap"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              <GoogleIcon className="w-8 h-6" />
              <span className="ml-2">Login With Google</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
