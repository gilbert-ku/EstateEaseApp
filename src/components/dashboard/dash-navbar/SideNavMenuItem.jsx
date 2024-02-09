// SideNavMenuItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const SideNavMenuItem = ({ to, icon, label }) => {
  return (
    <li className="nav-item d-none d-md-inline">
      <Link to={to} className="nav-link my-2">
        <span className="icon-name ">
          {icon}
          <span className="">{label}</span>
        </span>
      </Link>
    </li>
  );
};

export default SideNavMenuItem;
