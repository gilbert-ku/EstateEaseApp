import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineReviews,MdOutlinePayments, MdEdit } from 'react-icons/md';
import { IoReceiptOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineLogout } from "react-icons/hi";
import { FaFileInvoiceDollar } from "react-icons/fa";


const SideNavBar = () => {
  return (
    <nav className="navbar">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link text-white">
            <span className="icon-name">
              <MdOutlineDashboardCustomize className='me-1 fs-5 fs-md-'/>
              <span className="d-none d-md-inline">Dashboard</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/edit-profile" className="nav-link text-white">
            <span className="icon-name">
              <MdEdit className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Edit Profile</span>
            </span>
          </Link>
        </li>


        <li className="nav-item">
          <Link to="/invoice" className="nav-link text-white">
            <span className="icon-name ">
              <FaFileInvoiceDollar className='me-1 fs-5 fs-md-3 '/>
              <span className="d-none d-md-inline">Invoice</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/payments" className="nav-link text-white">
            <span className="icon-name ">
              <MdOutlinePayments className='me-1 fs-5 fs-md-3 '/>
              <span className="d-none d-md-inline">Payments</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/receipt" className="nav-link text-white">
            <span className="icon-name">
              <IoReceiptOutline className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Receipt</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contactUs" className="nav-link text-white">
            <span className="icon-name">
              <AiOutlineMessage className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Contact Us</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/reviews" className="nav-link text-white">
            <span className="icon-name">
              <MdOutlineReviews className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Reviews</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/logout" className="nav-link text-white">
            <span className="icon-name">
              <HiOutlineLogout className='me-1 fs-5 fs-md-3'/>
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
