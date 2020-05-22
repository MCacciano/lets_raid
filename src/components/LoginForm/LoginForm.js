import React from 'react';
import { Link } from 'react-router-dom';

// components
import Input from '../Input';
import Button from '../Button';
import { signInWithGoogle } from '../../firebase/init';

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
    <div
      style={{ backgroundColor: '#F4F4F4' }}
      className="z-10 bg-white rounded border border-black w-5/6 sm:w-1/2 md:w-3/6 lg:w-2/6"
    >
      <div className="flex flex-row justify-center align-center text-center py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl">Welcome to LetsRaid</h1>
      </div>
      <form
        className="flex flex-col justify-center mx-auto p-6 md:w-3/4"
        onSubmit={handleOnSubmit}
      >
        <Input
          onChange={handleEmail}
          type="email"
          label="Email"
          className="mb-4 focus:border-purple-800"
        />
        <Input
          onChange={handlePassword}
          type="password"
          label="Password"
          className="mb-4 focus:border-purple-800"
        />
        <div className="flex flex-col justify-between mb-4 md:flex-row">
          <Button
            className="mb-2 md:mb-0 border-purple-700 text-purple-700 hover:bg-purple-700"
            onClick={handleOnClick}
          >
            Login
          </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Login With Google
          </Button>
        </div>
        <div className="flex flex-row justify-center">
          <p className="flex flex-col items-center md:flex-row text-sm py-2">
            <span className="italic">Don't have an account yet?</span>{' '}
            <Link
              to="/"
              className="pl-2 font-semibold text-purple-800 hover:border"
            >
              Sign Up!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
