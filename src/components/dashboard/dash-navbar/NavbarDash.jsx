import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TfiHelpAlt } from "react-icons/tfi";




const NavbarDash = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid mx-auto me-0 me-sm-5 ">

                {/* Logo on the left */}
                <Link to="/" className="navbar-brand fw-bold fs-4 px-0 px-md-4 " style={{ color: "#9C5412" }}>
                    EstateEase
                </Link>

                {/* Toggler button for small screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar items to the right */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto mt-3 mt-sm-1"> 
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav me-0 mb-2 mb-lg-0 px-1 px-md-3 ">

                        {/* button  and alert */}
                        <li className="nav-item">
                            <Link to="/dashboard/notification" className="nav-link fs-4 position-relative" >
                                {/* <IoNotificationsSharp />
                            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span> */}

                            <button type="button" class="btn btn-primary nav-link fs-4 position-relative">
                                <IoNotificationsSharp />
                                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </button>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle fs-5 my-auto"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><VscAccount className='me-2'/></span>
                                gilbert45ku
                            </Link >
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/dashboard/setting" className="dropdown-item" >
                                        <span><IoSettingsOutline /></span>
                                        Setting
                                    </Link >
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <Link to="/dashboard/FQA" className="dropdown-item" >
                                        <span><TfiHelpAlt /></span>
                                        Find Help
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default NavbarDash