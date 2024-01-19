import React from 'react'
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <>
        <div className=' footer--div mx-auto rounded-4 mt-3 mb-3'>
          <div className=' d-sm-flex text-white justify-content-between'>
            <div className=''>
              <p className='fs-1  mx-5 text-white fw-bold'>EstateEase</p>
              <p className='fs-4  mx-5 text-white ' >Subscribe for EstateEase updates </p>
              <div className='mx-5 mt-2'>
              <form>
                  <div className="mb-2 row g-2 g-md-3 sub-section pb-2">
                      <div className="col-12 col-md">
                          <input type="email" className="form-control no-border" placeholder="email address" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ border: "none" }} />
                      </div>
                      <div className="col-12 col-md-auto">
                          <button type="submit" className="btn w-100 bg-white mt-md-0 subscribe--btn" style={{color: "#9C5412"}}>
                              subscribe
                          </button>
                      </div>
                  </div>
              </form>
              </div>
            </div>

            <div className='quiz-link mt-3 mx-5 quick--link'>
              <p className='fs-5'>Quick Links</p>
              <ul className='navbar-nav'>
                <li className="nav-item" >
                  <Link to="aboutus">About us</Link>
                </li>
                <li className="nav-item" >
                  <Link to="contactus">contact Us</Link> 
                </li>
                <li className="nav-item">
                  <Link to="Properties">Properties</Link>
                </li>
                <li className="nav-item">
                  <Link to="help">Find Help</Link>
                </li>
              </ul>
            </div>

            <div className='mt-3 mx-5 useful--link'>
              <p className='fs-5'>Useful Link</p>

              <ul className="navbar-nav">
                <li>
                  <Link to="movers">Find mover</Link>
                </li>
                <li className="nav-item">
                  <Link to="Privatepolicy">Private Policy</Link>
                </li>
                <li className="nav-item">
                  <Link to="Useragreement">User Agreement</Link>
                </li>
                <li className="nav-item">
                  <Link to="FAQ">Frequently Asked Question</Link>
                </li>
              </ul>
            </div>

            
          </div>

          <hr className=' hr--footer mx-auto ' />

            <div className='d-sm-flex text-white justify-content-between'>
              <div className='ms-5 fs-6' >
                <p>© 2024 EstateEase. All rights reserved.</p>
              </div>

              <div className='mx-5 social--media ' >
                <Link to="">
                  <FaWhatsapp className='mx-2 fs-4'/>
                </Link>
                <Link to="">
                  <FaFacebook className='mx-2 fs-4'/>
                </Link>
                <Link to="">
                  <FaInstagram className='mx-2 fs-4'/>
                </Link>
                <Link to="">
                  <FaXTwitter className='mx-2 fs-4'/>
                </Link>
                <Link to="">
                  <FaTiktok className='mx-2 fs-4'/>
                </Link>  
              </div>
            </div>
        </div>
        
    </>
  )
}

export default Footer