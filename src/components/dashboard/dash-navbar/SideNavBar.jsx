import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineReviews } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { IoReceiptOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

const SideNavBar = () => {
  return (

    <>
      <nav className="navbar ">
        <ul className="navbar-nav">

          <li className="nav-item ">
            <Link to="/Dashboard" className="nav-link text-white">
              <span className="me-1">
                <MdOutlineDashboardCustomize />
              </span>
              Dashboard
            </Link>
          </li>

          <li className="nav-item"> 
            <Link to="/property" className="nav-link text-white">
              <span className="me-1">
                <BsHouses />
              </span>
              Property
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/receipt" className="nav-link text-white">
              <span className="me-1">
                <IoReceiptOutline />
              </span>
              Receipt
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contactUs" className="nav-link text-white">
              <span className="me-1">
                <AiOutlineMessage />
              </span>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/revies" className="nav-link text-white">
            <span className="me-1">
              <MdOutlineReviews />
            </span>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default SideNavBar