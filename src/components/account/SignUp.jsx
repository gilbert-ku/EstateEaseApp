import React from 'react'
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <>

    <div className='container'>
      <div className='sign--form'>
        <p className='fs-1'>Welcome To <span className='fs-1 ' style={{color: "#9C5412"}}>EstateEase</span></p>
        <p>Please Enter your credential</p>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='John Doe' />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@gmail.com' />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='••••••••'/>
            </div>
            {/* <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />                                                                                                                                                                                                                             
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary w-100" style={{color: "white", backgroundColor: '#9C5412'}}>Sign Up</button>

          </form>
          <div className='d-flex justify-content-center align-items-center'>
            <hr className='w-50 my-auto border-2'/> 
            <p className='mx-4 my-auto'>OR </p>  
            <hr className='w-50 my-auto border-2'/>
          </div>
          <button className='btn btn-secondary w-100'
          style={{color: "white", backgroundColor: '#9C5412'}}>
           <FaGoogle className='mx-2 text-center'/>
            Sign Up With Gooogle
          </button>
      </div>
    </div>
    </>
  )
}

export default SignUp