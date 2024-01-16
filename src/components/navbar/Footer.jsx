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
                  <div class="mb-2 d-md-flex border border-white p-3 rounded-3">
                    <input type="email" class="form-control no--border" placeholder="email address" id="exampleInputEmail1" aria-describedby="emailHelp" style={{border: "none"}}/>
                    <button type="submit" class="btn btn-primary  ">Submit</button>
                  </div>
                </form>
              </div>
            </div>

            <div className='quiz-link mt-3 mx-5'>
              <p className='fs-5'>Quick Links</p>
              <ul>
                <li>About us</li>
                <li>contact Us</li>
                <li>Properties</li>
                <li>Find Help</li>
              </ul>
            </div>

            <div className='mt-3 mx-5'>
              <p className='fs-5'>Useful Link</p>

              <ul>
                <li>Private Policy</li>
                <li>User Agreement</li>
                <li>Frequently Asked Question</li>
                
                  <button type="button" class="btn btn-outline-dark">Dark</button>
                
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