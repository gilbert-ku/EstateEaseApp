import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaXTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='container d-sm-flex text- justify-content-between ' >
      <div className='ms-5 fs-6 my-auto' >
        <p>© 2024 EstateEase. All rights reserved.</p>
      </div>
        <div className='mx-5 social-media text-center my-auto' >
            <Link to="/whatsapp">
            <FaWhatsapp className='mx-2 fs-4'/>
            </Link>
            <Link to="/fb">
            <FaFacebook className='mx-2 fs-4'/>
            </Link>
            <Link to="insta">
            <FaInstagram className='mx-2 fs-4'/>
            </Link>
            <Link to="x">
            <FaXTwitter className='mx-2 fs-4'/>
            </Link>
            <Link to="Tt">
            <FaTiktok className='mx-2 fs-4'/>
            </Link>  
        </div>
      </div>
    </>
  )
}

export default Footer