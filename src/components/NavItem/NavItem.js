import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardNavItem = ({
  icon,
  iconSize,
  text,
  path = '/',
  className = '',
  wrapperClass = '',
}) => {
  const location = useLocation();

  return (
    <li
      className={`w-full h-full md:h-24 border-r md:border-r-0 md:border-b border-blue-800 ${wrapperClass}`}
    >
      <Link
        to={path}
        className={`w-full h-full flex md:flex-col justify-center items-center  w-full hover:bg-blue-900 hover:text-white ${className} ${
          location.pathname === path
            ? 'bg-blue-800 text-white'
            : 'text-blue-800 bg-white'
        }`}
      >
        <FontAwesomeIcon className="text-2xl" icon={icon} size={iconSize} />
        <span className="font-light text-lg mt-2 hidden md:block">{text}</span>
      </Link>
    </li>
  );
};

DashboardNavItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  path: PropTypes.string,
};

export default DashboardNavItem;
