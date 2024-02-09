import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import Tenant from './Tenant';

const homeDash = () => {

  return (
    <>
      <Tenant />
    </>
  )
}

export default homeDash;  





{/* <div className='container mx-auto mx-md-5 my-1 mt-md-4'>
          <NavbarDash />
          <p className='fs-4 mt-3'>Welcome, Gilbert Owino!</p>
          <p className='fs-5'>Experience Luxury Living with <span className='fs-4' style={{color: "#9C5412"}}>EstateEase</span></p>
        <div className=" d-sm-flex">
          
           slide

          <div className="responsive-container">
            <Zoom scale={0.7} indicators={true}>
              {images.map((each, index) => (
                <div key={index} className="responsive-item mx-1">
                  <img className="img-fluid " alt="Slide Image" src={each} />
                </div>
              ))}
            </Zoom>
          </div>

            <div className='d-flex justify-center align-center mx-0 mx-md-5 my-1 mt-md-4 '>
              <div className='my-auto'>
                <p className='w-100 w-md-75'>
                  EstateEase provides elegant and spacious houses for an unparalleled living experience. 
                  Our secure app makes hassle-free payments easy with invoices before your rental period and instant receipts upon payment.
                </p>
                <Link to="/Dashboard/form" target="_blank">
                  <button className="btn mt-1  w-100 w-sm-25" style={{ backgroundColor: "#9C5412", color: "white" }}>
                    Rent Our Spacious Houses
                  </button>
                </Link>
              </div>
            </div>
        </div>
      </div>  */}