import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact---us bg-warning text-center'>
      <div className=''>
        <h3 className='fs-3'style={{color: "#9C5412"}}>EstateEase</h3>
        <p className='fs-1 fw-bold text-light'>Contact Us</p>
      </div>
      
    </div>

     <div className="container">
        
        <div className='my-5'>
          
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
        </div>
     </div>
      


    </>
  )
}

export default Contact