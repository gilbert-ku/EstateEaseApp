import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { TfiHelpAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <p className='ms-sm-5 fs-3 fw-bold my-auto'
              style={{color: "#9C5412"}}>
                EstateEase
              </p>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start navbar-collapse " data-bs-scroll="true" tabIndex="-1"  aria-labelledby="offcanvasWithBothOptionsLabel" id="navbarNav">
            <div className="offcanvas-header">
                  <h5 className="offcanvas-title ms-sm-5 fs-3 fw-bold my-auto" 
                  id="offcanvasWithBothOptionsLabel"
                  style={{color: "#9C5412"}}>
                    EstateEase
                  </h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to="/aboutus" className="nav-link active" >
                    About us
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/apartments" className="nav-link active" >
                    Property
                  </Link >
                </li>
                <li className="nav-item">
                <Link to="/movers" className="nav-link active" tabIndex={-1} aria-disabled="true">
                  Movers
                </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to="account" className="nav-link dropdown-toggle active"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                    </Link >
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="signin" className="dropdown-item" >
                        <button 
                        className="btn  w-100 acc--btn"
                        style={{backgroundColor: "#9C5412", color: "white"}}
                        >
                          SIGN IN
                        </button>
                        </Link >
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link to="myaccount" className="dropdown-item" >
                        <VscAccount className='mx-1'/>
                        My Account
                        </Link >
                      </li>
                      
                      <li>
                        <Link to="help" className="dropdown-item" >
                        <TfiHelpAlt className='mx-1'/>
                          Help
                        </Link >
                      </li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

  );
};

export default Navbar;
