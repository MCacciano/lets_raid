import React from 'react';
import { Link } from 'react-router-dom';

import SBImg1 from '../../images/shadowbringers-1.png';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';
import { signInWithGoogle } from '../../firebase/init';

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
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
      <div className="flex flex-row w-2/3 border border-black border-opacity-50 rounded">
        <div className="w-1/2 relative">
          <img
            className="rounded rounded-tr-none rounded-br-none"
            src={SBImg1}
            alt="Shadowbringers left side of form"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-25"></div>
        </div>
        <div className="w-1/2 flex flex-col">
          <form
            className="flex flex-col flex-grow justify-center p-6"
            onSubmit={handleOnSubmit}
          >
            <Input onChange={handleEmail} type="email" label="Email" className="mb-4" />
            <Input onChange={handlePassword} type="password" label="Password" className="mb-4" />
            <div className="flex flex-row justify-between">
              <Button onClick={handleOnClick}>Login</Button>
              <Button onClick={signInWithGoogle} isGoogleSignIn>
                Login With Google
              </Button>
            </div>
          </form>
          <div className="flex flex-row justify-center">
            <p className="text-sm py-2">
              <span className="italic">Don't have an account yet?</span>{' '}
              <Link to="/" className="pl-2 font-semibold text-blue-500 hover:border">
                Sign Up!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
