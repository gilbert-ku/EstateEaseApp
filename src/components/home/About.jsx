import React from 'react'

const About = () => {
  return (
    <>
        <div className='container'>
            <h1 className='text-center mt-5 fs-1' style={{color: "#9C5412"}}>About</h1>
            <div className='mb-5'>
                <p className='fs-5'>
                    Welcome to <span className='fw-bold' style={{color: "#9C5412"}}>EstateEase</span>, 
                    your trusted platform for finding the perfect home. 
                    Our curated selection of properties aligns with your preferences, ensuring that you find a home that resonates with your lifestyle. 
                    We make it effortless to make your rent payments directly through the app.
                    <span className='fw-bold' style={{color: "#9C5412"}}>EstateEase</span> is more than just an app.
                    It's a trusted companion in your pursuit of the perfect home.

                    
                </p>

                <button className="about--btn py-1 px-2 w-sm-100 fw-bold fs-6 shadow">Read More</button>

            </div>
        </div>

    </>
  )
}

export default About