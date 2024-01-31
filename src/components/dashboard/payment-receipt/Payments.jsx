import React from 'react'
import card from "/master-card.png"
import paypal from "/paypal.png"

const Payments = () => {
  return (
    <>
      <div className='container'>
        <div>
          <p>payment Geteway</p>
        </div>
        <div>
          <p>Payment Details</p>
          <p>Please provide your payment details to continue paying your rent.</p>

          <div className='d-md-flex justify-content-between'>
            <div>
              <div>
                <img src={card} alt="card" className='fluid'/>
              </div>
              <button className="btn btn-secondary ">Continue Paying</button>
            </div>

            <div className=''>
              <div>
                <img src={paypal} alt=" paypal" />
              </div>
              <button className="btn btn-secondary">Continue Paying</button>
            </div>
          </div>
          

          <div className="d-flex justify-content-center align-items-center my-1">
            <hr className="w-50 my-auto border-2" />
            <p className="mx-4 my-auto">OR </p>
            <hr className="w-50 my-auto border-2" />
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default Payments