import React from 'react';
import { Link } from 'react-router-dom';

import SBImg1 from '../../images/shadowbringers-1.png';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';
import { signInWithGoogle } from '../../firebase/init';

const LoginPage = () => {
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
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full border border-black border-opacity-50 rounded relative">
        <div className="w-full h-full left-0 top-0 absolute">
          <img
            className="w-full h-full rounded rounded-tr-none rounded-br-none object-cover z-0 lg:object-center"
            src={SBImg1}
            alt="Shadowbringers left side of form"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-25"></div>
        </div>
        <div className="z-10 bg-white rounded border border-black border-opacity-75 w-3/4 max-w-screen-md">
          <div className="flex flex-row justify-center align-center py-4 md:py-8">
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
              className="mb-4"
            />
            <Input
              onChange={handlePassword}
              type="password"
              label="Password"
              className="mb-4"
            />
            <div className="flex flex-col justify-between mb-4 md:flex-row">
              <Button className="mb-2 md:mb-0" onClick={handleOnClick}>
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
      </div>
    </div>
  );
};

export default LoginPage;
