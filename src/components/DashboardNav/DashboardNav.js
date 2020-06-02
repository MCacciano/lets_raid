import React from 'react';
import DashboardNavItem from '../DashboardNavItem/DashboardNavItem';

const DashboardNav = () => {
  return (
    <ul className="flex">
      <DashboardNavItem icon="dragon" iconSize="lg" text="Mounts" />
      <DashboardNavItem icon="calendar-alt" iconSize="lg" text="Schedule" />
      <DashboardNavItem icon="hat-wizard" iconSize="lg" text="Gear" />
      <DashboardNavItem icon="robot" iconSize="lg" text="Bosses" />
    </ul>
  );
};

export default DashboardNav;
