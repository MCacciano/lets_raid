import React from 'react';
import DashboardNavItem from '../DashboardNavItem/DashboardNavItem';

const DashboardNav = () => {
  return (
    <ul className="h-full flex flex-col justify-start border-r border-black">
      <li className="flex flex-col justify-center items-center h-40 py-4 border-b border-black cursor-pointer bg-gray-500 w-full">
        Profile Img
      </li>
      <DashboardNavItem icon="dragon" iconSize="lg" text="Mounts" />
      <DashboardNavItem icon="calendar-alt" iconSize="lg" text="Schedule" />
      <DashboardNavItem icon="hat-wizard" iconSize="lg" text="Gear" />
      <DashboardNavItem icon="robot" iconSize="lg" text="Bosses" />
    </ul>
  );
};

export default DashboardNav;
