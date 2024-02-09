import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize, MdOutlineReviews,MdOutlinePayments, MdEdit } from 'react-icons/md';
import { IoReceiptOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineLogout } from "react-icons/hi";
import { FaFileInvoiceDollar } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
        <div>
            {/* taggle */}
            <button class="btn btn d-block d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <HiBars3BottomLeft />
            </button>

            {/*  */}
            <div class="offcanvas offcanvas-start offcanvas-dash-nav" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{backgroundColor: "#9C5412"}} >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        EstateEase
                        </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    
                <nav className="navbar">
      
                    <ul className="navbar-nav my-custom--link mt-1 mt-sm-5" data-bs-dismiss="offcanvas">
                    
                        <li className="nav-item ">
                        <Link to="/Dashboard" className="nav-link  my-2 ">
                            <span className="icon-name">
                            <MdOutlineDashboardCustomize className='me-1 fs-5 fs-md-'/>
                            <span className="d- d-md-inline">Dashboard</span>
                            </span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/Dashboard/editProfile" className="nav-link  my-2">
                            <span className="icon-name">
                            <MdEdit className='me-1 fs-5 fs-md-3'/>
                            <span className="d-n d-md-inline">Edit Profile</span>
                            </span>
                        </Link>
                        </li>


                        <li className="nav-item">
                        <Link to="/Dashboard/invoice" className="nav-link  my-2">
                            <span className="icon-name ">
                            <FaFileInvoiceDollar className='me-1 fs-5 fs-md-3 '/>
                            <span className="d-n d-md-inline">Invoice</span>
                            </span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/Dashboard/payments" className="nav-link  my-2">
                            <span className="icon-name ">
                            <MdOutlinePayments className='me-1 fs-5 fs-md-3 '/>
                            <span className="d-n d-md-inline">Payments</span>
                            </span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/Dashboard/receipts" className="nav-link  my-2">
                            <span className="icon-name">
                            <IoReceiptOutline className='me-1 fs-5 fs-md-3'/>
                            <span className="d-n d-md-inline">Receipt</span>
                            </span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/Dashboard/contact" className="nav-link  my-2">
                            <span className="icon-name">
                            <AiOutlineMessage className='me-1 fs-5 fs-md-3'/>
                            <span className="d-n d-md-inline">Contact Us</span>
                            </span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/Dashboard/reviews" className="nav-link  my-2">
                            <span className="icon-name">
                            <MdOutlineReviews className='me-1 fs-5 fs-md-3'/>
                            <span className="d-n d-md-inline">Reviews</span>
                            </span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/logout" className="nav-link  my-2">
                            <span className="icon-name">
                            <HiOutlineLogout className='me-1 fs-5 fs-md-3'/>
                            <span className="d- d-md-inline">Log Out</span>
                            </span>
                        </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar

{/* <GrClose /> */}
{/* <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                        {/* <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
