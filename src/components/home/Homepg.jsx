import React from 'react'

const Homepg = () => {
  return (
    <>
      <section className='landing--page '>
        <div className='container-fuild d-flex align-items-center justify-content-center landing--image'>
        
            <div className='warning search--box'>
              <p className='mt-1 p-1 text-center fs-1 fw-bold ' style={{color: "#9C5412"}}>
                EstateEase
              </p>
              <p className='fs-3 text-center font-monospace text-wrap fw-bold'>
                Elevate Your Lifestyle: Find,        
              </p>
              <p className='fs-4 text-center font-monospace fw-bold' style={{marginTop: "-20px"}}>
              Rent, and Live in Style.
              </p>
              <button className='ms-5 fs-5 fw-bold text-white rent--btn' style={{width:"10rem"}}>Rent</button>
              <div className='bg-white mb-3 mx-5 search--bar' style={{minHeight: "5rem"}}>

              </div>
              
            </div>
          

          
        </div>
        
      </section>
    </>
    
  )
}

export default Homepg