import React from 'react';
import NavItem from '../NavItem/NavItem';

const Navigation = () => {
  return (
    <ul className="absolute bottom-0 sticky flex md:flex-col h-16 md:h-full md:order-1 md:w-1/6 lg:w-1/12 border-t border-blue-800 md:border-t-0 md:border-r">
      <NavItem
        icon="columns"
        iconSize="lg"
        text="Dashboard"
        path="/dashboard"
      />
      <NavItem icon="dragon" iconSize="lg" text="Mounts" path="/mounts" />
      <NavItem
        icon="calendar-alt"
        iconSize="lg"
        text="Schedule"
        path="/schedule"
      />
      <NavItem icon="hat-wizard" iconSize="lg" text="Gear" path="/gear" />
      <NavItem
        className="border-none"
        icon="robot"
        iconSize="lg"
        text="Fights"
        path="/fights"
      />
    </ul>
  );
};

export default Navigation;
