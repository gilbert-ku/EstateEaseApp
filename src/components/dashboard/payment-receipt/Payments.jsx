import React from 'react'
import card from "/master-card.png"
import paypal from "/paypal.png"
import mpesa from "/mpesa.png"

const Payments = () => {
  return (
    <>
      <div className='container'>
        <div>
          <p className="fs-2 fw-bold" style={{color: "#9C5412"}}>payment Geteway</p>
        </div>
        <div className='border boder-2 p-1 p-md-5 '>
          <p className='fw-bold'>Payment Details</p>
          <p>Please provide your payment details to continue paying your rent.</p>

          <div className='d-md-flex justify-content-between'>
            <div className='h-25' >
              <div className=''>
                <img src={card} alt="card" className='img-fluid' style={{ height: "20vh "}}/>
              </div>
              <button className="btn btn-secondary w-100" style={{backgroundColor: "#9C5412"}}>Continue Paying</button>
            </div>

            <div className='h-25 '>
              <div style={{ height: "20vh "}}>
                <img src={paypal} alt=" paypal" className='img-fluid' />
              </div>
              <button className="btn btn-secondary w-100" style={{backgroundColor: "#9C5412"}}>Continue Paying</button>
            </div>
          </div>
          
          <div className="d-flex justify-content-center align-items-center my-1">
            <hr className="w-50 my-auto border-2" />
            <p className="mx-4 my-auto">OR </p>
            <hr className="w-50 my-auto border-2" />
          </div>
          
          <div>
            <div className='d-flex justify-content-center align-item-center'>
              <img src={mpesa} alt=" mpesa" />
            </div>
            <div>
              <p>Please enter your M-PESA phone number. Once you provide your number, you will receive a secure prompt. Enter your 
                 <span className='fw-bold px-1' style={{ color: "#9C5412" }}>
                   PIN 
                 </span>
                 to complete the rent payment.
              </p>

              <form action="">
                <div className="row">
                  <div className="col-md-8 mb-3">
                  <label htmlFor="nameFormControlInput-mpesa" className="form-label d-sm-block d-md-none">M-PESA Number</label>
                    <input type="text" className="form-control" id="nameFormControlInput-mpesa" placeholder="0712345678" required/>
                  </div>
                  <div className="col-md-4 ">
                    <button className="btn text-white w-100" style={{backgroundColor: "#9C5412"}}>Submit</button>
                  </div>
                </div>
              </form>

            </div>
          </div> 
        </div>
        
      </div>
    </>
  )
}

export default Payments