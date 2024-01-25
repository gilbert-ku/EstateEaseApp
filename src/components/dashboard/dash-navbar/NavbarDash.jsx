import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TfiHelpAlt } from "react-icons/tfi";




const NavbarDash = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand fw-bold" style={{color: "#9C5412"}}>

                EstateEase
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                <a className="nav-link" href="#"><IoNotificationsSharp /></a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><VscAccount /></span>
                    gilbert45ku
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* <li>
                        <a className="dropdown-item" href="#">
                        <span><CiEdit /></span>
                            Edit Profile
                        </a>
                    </li> */}
                    <li>
                        <a className="dropdown-item" href="#">
                            <span><IoSettingsOutline /></span>
                            Setting
                        </a>
                    </li>
                    <li><hr className="dropdown-divider"/></li>
                    <li>
                        <a className="dropdown-item" href="#">
                        <span><TfiHelpAlt /></span>
                        Find Help
                        </a>
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