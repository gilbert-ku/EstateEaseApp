import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { TfiHelpAlt } from "react-icons/tfi";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
          <div className="offcanvas offcanvas-start navbar-collapse bg-warning" data-bs-scroll="true" tabIndex="-1"  aria-labelledby="offcanvasWithBothOptionsLabel" id="navbarNav">
          <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Gilbert</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://gilbertkutoto.vercel.app/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active" href="#" tabIndex="-1" aria-disabled="true">
                  Movers
                </a>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <VscAccount />
                  Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                      <button 
                      className="btn  w-100 acc--btn"
                      style={{backgroundColor: "#9C5412", color: "white"}}
                      >
                        SIGN IN
                      </button>
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <a className="dropdown-item" href="#">
                      <VscAccount />
                      My Account
                      </a>
                    </li>
                    
                    <li>
                      <a className="dropdown-item" href="#">
                      <TfiHelpAlt />
                        Help
                      </a>
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
