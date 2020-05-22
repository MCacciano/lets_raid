import React from 'react';

const Overlay = ({ children, opacity = '25', color = 'black' }) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {children}
      <div
        className={`absolute left-0 top-0 w-full h-full bg-${color} bg-opacity-${opacity}`}
      ></div>
    </div>
  );
};

export default Overlay;
