import React from 'react'
import aboutUs from '/about.png';

const About = () => {
  return (
    <>
        <div className='container'>
            <h1 className='text-center mt-5 fs-1' style={{color: "#9C5412"}}>About</h1>

            <div className='d-md-flex mt-5'>
              <div style={{ minHeight: '' , width: "50wv"}}>
                <img 
                  src={aboutUs} 
                  alt="Aboutus bungalow"
                  className='img-fluid mx-2'
                  
                />
              </div>
              

                <div className='mb-5 fs-5 text-center text-wrap py-2 mt-2 w-s-100' >
                  <p className=''>
                      Welcome to <span className='fw-bold' style={{color: "#9C5412"}}>EstateEase</span>, 
                      your trusted platform for finding the perfect home.
                  </p> 
                      <p>Our curated selection of properties aligns with your preferences, ensuring that you find a home that resonates with your lifestyle.</p> 
                      <p>We make it effortless to make your rent payments directly through the app.
                      <span className='fw-bold' style={{color: "#9C5412"}}>EstateEase</span> is more than just an app.
                      It's a trusted companion in your pursuit of the perfect home.</p>

                      
                  

                  <button className="about--btn py-1 px-2 w-sm-100 fw-bold fs-6 shadow my-2">Read More</button>

                </div>
            </div>
            
            
        </div>

    </>
  )
}

export default About