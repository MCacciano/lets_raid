import React from 'react';

import LoginForm from '../../components/LoginForm';
import Overlay from '../../components/Overlay';

import SBImg2 from '../../images/shadowbringers-2.jpg';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Overlay color="purple-700" opacity="25">
        <img
          className="object-cover z-0 lg:object-center h-full w-full"
          src={SBImg2}
          alt="Shadowbringers left side of form"
        />
      </Overlay>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
