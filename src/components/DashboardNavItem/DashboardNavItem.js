import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardNavItem = ({ icon, iconSize, text }) => {
  return (
    <li className="flex flex-col justify-center items-center py-4 border-b border-black cursor-pointer text-purple-800 w-full hover:bg-purple-900 hover:text-white">
      <FontAwesomeIcon icon={icon} size={iconSize} />
      <span className="font-light text-lg mt-2">{text}</span>
    </li>
  );
};

DashboardNavItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default DashboardNavItem;
