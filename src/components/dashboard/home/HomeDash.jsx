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
    <section className='fluid d-flex ' >
      <div className='px-3' style={{backgroundColor: "#9C5412"}}>
        <SideNavBar />
      </div>
      <div className=" d-sm-flex">
        {/*  slide*/}

        <div className="responsive-container mx-1">
          <Zoom scale={0.7} indicators={true}>
            {images.map((each, index) => (
              <div key={index} className="responsive-item mx-1">
                <img className="img-fluid " alt="Slide Image" src={each} />
              </div>
            ))}
          </Zoom>
        </div>

        <div className='w-100 w-sm-50 text-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eligendi temporibus incidunt porro obcaecati similique, minima, maiores corrupti perspiciatis neque quaerat error laudantium omnis, nisi nemo amet sequi dolor molestiae.</p>
          <button className="btn btn-secondary color-white">Rent our Specious houses to day</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default homeDash;  