import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaXTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";
import Footer from "../dash-navbar/Footer"



const Contact = () => {
  return (
    <>
    <div className='contact---us bg-white text-center d-flex justify-content-center align-item-center m-auto'>
      <div className='contact--text p-3 m-auto'>
        <h3 className='fs-3' style={{ color: "#9C5412" }}>EstateEase</h3>
        <p className='fs-1 fw-bold text-dark'>Contact Us</p>
      </div>
    </div>
     <div className="container d-md-flex">
      <div className=' my-2 my-md-5 w-100 w-md-50'>
      <p className='fs-2'>Contact Details</p>
        
        <div className='d-flex justify-content-between d-md-block'>
          <div>
            <p className='fw-bold' style={{color: "#9C5412"}}>Contact info</p>
            <p>estateEase@info.com</p>
            <p>+254 700 111 333 </p>
          </div>
          <div>
            <p className='fw-bold' style={{color: "#9C5412"}}>Head Office</p>
            <p>Sarit Center</p>
            <p>Nairobi, Westland</p>
          </div>
        </div> 

        {/* google map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8518221552354!2d36.79940277572205!3d-1.2611604987268306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176b6bde7637%3A0x41554102ed5ccccf!2sSarit!5e0!3m2!1sen!2ske!4v1706564563089!5m2!1sen!2ske"
        className='iframe--map w-100 px-0 pe-md-5' 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className='mx-5 social-media text-center my-auto d-md-none' style={{color: "#9C5412"}}>
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

      {/* form */}
          <div className='my-2 my-md-5 w-100 w-md-50'> 
          <p className='fs-2'>Online Query</p>
            <form action="">
              <div className="mb-3">
                <label htmlFor="nameFormControlInput1" className="form-label">Full Name</label>
                <input type="email" className="form-control" id="nameFormControlInput1" placeholder="John Doe" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="emailFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailFormControlInput1" placeholder="johndoe@example.com" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="messangeFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="messangeFormControlTextarea1" required rows="3"></textarea>
              </div>
              <button className="btn text-white w-100" style={{backgroundColor: "#9C5412"}}>Submit</button>
            </form>
          </div>
     </div>
     <Footer />
    </>
  )
}

export default Contact