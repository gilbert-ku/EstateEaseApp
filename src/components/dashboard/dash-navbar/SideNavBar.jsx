import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineReviews } from 'react-icons/md';
import { BsHouses } from 'react-icons/bs';
import { IoReceiptOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { CiEdit } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";


const SideNavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link text-white">
            <span className="icon-name">
              <MdOutlineDashboardCustomize className='me-1'/>
              <span className="d-none d-md-inline">Dashboard</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/edit-profile" className="nav-link text-white">
            <span className="icon-name">
              <CiEdit className='me-1'/>
              <span className="d-none d-md-inline">Edit Profile</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/property" className="nav-link text-white">
            <span className="icon-name ">
              <BsHouses className='me-1 '/>
              <span className="d-none d-md-inline">Property</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/receipt" className="nav-link text-white">
            <span className="icon-name">
              <IoReceiptOutline className='me-1'/>
              <span className="d-none d-md-inline">Receipt</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contactUs" className="nav-link text-white">
            <span className="icon-name">
              <AiOutlineMessage className='me-1'/>
              <span className="d-none d-md-inline">Contact Us</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/reviews" className="nav-link text-white">
            <span className="icon-name">
              <MdOutlineReviews className='me-1'/>
              <span className="d-none d-md-inline">Reviews</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/logout" className="nav-link text-white">
            <span className="icon-name">
              <HiOutlineLogout className='me-1'/>
              <span className="d-none d-md-inline">Log Out</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;

SideNavBar.js
