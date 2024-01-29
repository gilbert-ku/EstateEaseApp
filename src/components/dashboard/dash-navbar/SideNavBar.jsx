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
      
      <ul className="navbar-nav my-custom--link mt-1 mt-sm-5">
      <li className="nav-item ">
          <Link to="/Dashboard" className="nav-link  my-2 ">
            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
            className="rounded-circle d-none d-md-block mx-auto" alt=""  style={{width: "50px"}} />
          </Link>
        </li>

        <li className="nav-item ">
          <Link to="/Dashboard" className="nav-link  my-2 ">
            <span className="icon-name">
              <MdOutlineDashboardCustomize className='me-1 fs-5 fs-md-'/>
              <span className="d-none d-md-inline">Dashboard</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Dashboard/editProfile" className="nav-link  my-2">
            <span className="icon-name">
              <MdEdit className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Edit Profile</span>
            </span>
          </Link>
        </li>


        <li className="nav-item">
          <Link to="/Dashboard/invoice" className="nav-link  my-2">
            <span className="icon-name ">
              <FaFileInvoiceDollar className='me-1 fs-5 fs-md-3 '/>
              <span className="d-none d-md-inline">Invoice</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Dashboard/payments" className="nav-link  my-2">
            <span className="icon-name ">
              <MdOutlinePayments className='me-1 fs-5 fs-md-3 '/>
              <span className="d-none d-md-inline">Payments</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Dashboard/receipts" className="nav-link  my-2">
            <span className="icon-name">
              <IoReceiptOutline className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Receipt</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Dashboard/contact" className="nav-link  my-2">
            <span className="icon-name">
              <AiOutlineMessage className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Contact Us</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Dashboard/reviews" className="nav-link  my-2">
            <span className="icon-name">
              <MdOutlineReviews className='me-1 fs-5 fs-md-3'/>
              <span className="d-none d-md-inline">Reviews</span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/logout" className="nav-link  my-2">
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

// SideNavBar.js
