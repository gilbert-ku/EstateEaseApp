import React from 'react'
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <div className=' footer--div mx-auto rounded-4 mt-3'>
          <div className=' d-sm-flex text-white justify-content-between'>
            <div className=''>
              <p className='fs-1  mx-5 text-white fw-bold'>EstateEase</p>
              <p className='fs-4  mx-5 text-white ' >Subscribe for EstateEase updates </p>
              <div className='mx-5 mt-2'>
                <form>
                  <div className="mb-2 d-md-flex border border-white p-3 rounded-3">
                    <input type="email" className="form-control no--border" placeholder="email address" id="exampleInputEmail1" aria-describedby="emailHelp" style={{border: "none"}}/>
                    <div>
  <button type="submit" className="btn w-md-100 btn-primary ms-2 ms-md-0 mt-md-2">
    subscribe
  </button>
</div>
                  </div>
                </form>
              </div>
            </div>

            <div className='quiz-link mt-3 mx-5'>
              <p className='fs-5'>Quick Links</p>
              <ul className='navbar-nav'>
                <li className="nav-item" >About us</li>
                <li className="nav-item" >contact Us</li>
                <li className="nav-item" >Properties</li>
                <li className="nav-item" >Find Help</li>
              </ul>
            </div>

            <div className='mt-3 mx-5'>
              <p className='fs-5'>Useful Link</p>

              <ul className="navbar-nav">
                <li className="nav-item">
                  Private Policy
                </li>
                <li className="nav-item">
                  User Agreement
                </li>
                <li className="nav-item">
                  Frequently Asked Question
                </li>
                
                  <button type="button" className="btn btn-outline-dark">Find mover</button>
                
              </ul>
            </div>

            
          </div>

          <hr className=' hr--footer mx-auto ' />

            <div className='d-sm-flex text-white justify-content-between'>
              <div className='ms-5 fs-6' >
                <p>© 2024 EstateEase. All rights reserved.</p>
              </div>

              <div className='mx-5 '>
                <a href="#">
                  <FaWhatsapp className='mx-2 fs-4'/>
                </a>
                <a href="#">
                  <FaFacebook className='mx-2 fs-4'/>
                </a>
                <a href="#">
                  <FaInstagram className='mx-2 fs-4'/>
                </a>
                <a href="#">
                  <FaXTwitter className='mx-2 fs-4'/>
                </a>
                <a href="#">
                  <FaTiktok className='mx-2 fs-4'/>
                </a>  
              </div>
            </div>
        </div>
        
    </>
  )
}

export default Footer