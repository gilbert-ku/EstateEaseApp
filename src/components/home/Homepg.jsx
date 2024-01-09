import React from 'react'
import About from './About'
import Properties from './Properties'

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

                {/* form */}
                <form>
                  <div className='d-lg-flex flex-column flex-lg-row justify-content-between mx-md-5 mx-3'>
                      <div className="mb-3">
                          <label  className="form-label text-center">Property Type</label>
                          <select id="disabledSelect" className="form-select">
                              <option>Apartment</option>
                              <option>Bungalow</option>
                              <option>Mansion</option>
                          </select>
                      </div>
                      <div className="mb-3">
                          <label  className="form-label text-center">Location</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="eg Karen, Lang'ata ..."/>
                      </div>
                      <div className="">
                          <button type="submit" className="btn fw-bold my-4 search--btn-hm" style={{background: "#9C5412"}}>
                            Search
                          </button>
                      </div>
                  </div>
                </form>
              </div>
              
            </div>
          

          
        </div>

      </section>
      <About />
      <Properties />
    </>
    
  )
}

export default Homepg