import React from 'react';

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
              <li>
                <a href="#">
                    
                <select id="disabledSelect" className="form-select">
                    <option>Apartment</option>
                    <option>Bungalow</option>
                    <option>Mansion</option>
                </select>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
