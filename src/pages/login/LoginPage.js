import React from 'react';

const LoginPage = () => {
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleOnClick = e => {
    console.log('clicked');
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form
        className='flex flex-col border border-gray-300 border-opacity-50 rounded p-6'
        onSubmit={handleOnSubmit}
      >
        <label className='flex flex-col mb-4'>
          <span className='text-xs text-semibold'>Username</span>
          <input
            className='rounded px-2 py-1 bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white'
            type='text'
          />
        </label>
        <label className='flex flex-col mb-4'>
          <span className='text-xs text-semibold'>Password</span>
          <input
            className='rounded px-2 py-1 bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white'
            type='password'
          />
        </label>
        <div className='flex flex-row justify-between'>
          <button
            className='rounded shadow-sm border border-black border-opacity-50 py-2 px-3 text-md hover:text-white hover:bg-black hover: bg-opacity-50'
            onClick={handleOnClick}
          >
            Sign In
          </button>
          <button
            className='rounded shadow-sm border border-blue-700 py-2 px-3 text-sm ml-4 hover:text-white hover:bg-blue-700'
            onClick={handleOnClick}
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
