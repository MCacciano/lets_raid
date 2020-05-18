import React from 'react';

const Input = ({ label, className, ...restProps }) => {
  return (
    <label className="flex flex-col mb-4">
      <span className="text-xs text-semibold">{label}</span>
      <input
        className={`rounded px-2 py-1 bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white ${className}`}
        {...restProps}
      />
    </label>
  );
};

export default Input;
