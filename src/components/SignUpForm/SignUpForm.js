import React from 'react';
import { Link } from 'react-router-dom';

// components
import Input from '../Input';
import Button from '../Button';

const SignUpForm = () => {
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
        <h1 className="text-3xl md:text-4xl">Sign Up</h1>
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
        <div className="flex w-full mb-4">
          <Button
            className="w-full mb-2 md:mb-0 border-purple-700 text-purple-700 hover:bg-purple-700"
            onClick={handleOnClick}
          >
            Sign Up
          </Button>
        </div>
        <div className="flex flex-row justify-center">
          <p className="flex flex-col items-center md:flex-row text-sm py-2">
            <span className="italic">Already have an account yet?</span>{' '}
            <Link
              to="/login"
              className="pl-2 font-semibold text-purple-800 hover:border"
            >
              Login!
            </Link>
            {/* <br />
            <p>or</p>
            <br />
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Login With Google
            </Button> */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
