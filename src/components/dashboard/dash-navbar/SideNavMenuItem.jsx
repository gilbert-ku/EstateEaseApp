// SideNavMenuItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const SideNavMenuItem = ({ to, icon, label }) => {
  return (
    <li className="nav-item ">
      <Link to={to} className="nav-link my-2">
        <span className="icon-name fs-3">
          {icon}
          <span className="d-none d-md-inline">{label}</span>
        </span>
      </Link>
    </li>
  );
};

export default SideNavMenuItem;
