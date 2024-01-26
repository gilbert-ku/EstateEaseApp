import React from 'react'
import SideNavBar from '../dash-navbar/SideNavBar';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const homeDash = () => {
  const images = [
    "/birthroom.jpeg",
    "/Kitchen.jpeg",
    "/seatingroom2 .jpeg",
    "/seatingroom .jpeg",
    
];
  return (
    <>
    <section className='fluid  d-flex' >
      <div className='px-1 px-sm-5' style={{backgroundColor: "#9C5412"}}>
        <SideNavBar />
      </div>

      <div className='container mx-0 mx-md-5 my-1 mt-md-4'>
        <p className='fs-4'>Welcome, Gilbert Owino!</p>
        <p className='fs-5'>Experience Luxury Living with <span className='fs-4' style={{color: "#9C5412"}}>EstateEase</span></p>
      <div className=" d-sm-flex">
        
        {/*  slide*/}

        <div className="responsive-container ">
        
          <Zoom scale={0.7} indicators={true}>
            {images.map((each, index) => (
              <div key={index} className="responsive-item mx-1">
                <img className="img-fluid " alt="Slide Image" src={each} />
              </div>
            ))}
          </Zoom>
        </div>

        <div className='w-100 w-sm-50 mx-0 mx-md-5 my-1 mt-md-4'>
          
          <p>Discover a new level of elegance and comfort with EstateEase. Rent our spacious houses for an unparalleled living experience.</p>
          <p>Enjoy hassle-free payments through our secure app. Receive invoices before your rental period and instant receipts upon payment.</p>
          <button className="btn btn-primary color-white">Rent Our Spacious Houses</button>


          {/* <button className="btn btn-secondary color-white">Rent our Specious houses to day</button> */}
        </div>
      </div>

      </div>
      
    </section>
    </>
  )
}

export default homeDash;  