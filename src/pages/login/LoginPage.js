import React from 'react';

import SBImg1 from '../../images/shadowbringers-1.png';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage = () => {
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleOnClick = e => {
    console.log('clicked');
  };

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
        <form
          className="flex flex-col flex-grow justify-center p-6"
          onSubmit={handleOnSubmit}
        >
          <Input type="text" label="Username" />
          <Input type="text" label="Password" />
          <div className="flex flex-row justify-between">
            <Button onClick={handleOnClick}>Sign In</Button>
            <Button onClick={handleOnClick} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
