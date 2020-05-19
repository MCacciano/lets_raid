import React from 'react';

const Button = ({ children, className, isGoogleSignIn, ...restProps }) => {
  const classes = () => {
    let cls;

    if (isGoogleSignIn) {
      cls = `border-blue-700 hover:bg-blue-700 text-blue-700`;
    } else {
      cls = `border-black border-opacity-50 hover:bg-black`;
    }

    return `rounded shadow-sm bg-transparent font-semibold border py-2 px-3 text-sm hover:text-white hover:border-transparent ${cls} ${className}`;
  };

  return (
    <button className={classes()} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
