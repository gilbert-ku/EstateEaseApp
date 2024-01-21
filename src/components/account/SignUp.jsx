import React from 'react'
import { FaGoogle } from "react-icons/fa";
import ngongrd from '/ngong-dr-apt.jpg';


const SignUp = () => {
  return (
    <>

    <div className='container d-flex'>
      <div className='sign--form'>
        <p className='fs-1'>Welcome To <span className='fs-1 ' style={{color: "#9C5412"}}>EstateEase</span></p>
        <p>Please Crreate account</p>
          <form>
            <div className="mb-3">
              <label  className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='John Doe  ' />
            </div>
            <div className="mb-3">
              <label  className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@gmail.com' />
            </div>
            <div className="mb-3">
              <label  className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='••••••••'/>
            </div>
            {/* <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />                                                                                                                                                                                                                             
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary w-100" style={{color: "white", backgroundColor: '#9C5412'}}>Sign Up</button>

          </form>
          <div className='d-flex justify-content-center align-items-center my-1'>
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


      <div id="carouselExampleCaptions" className="carousel slide boot--slides" data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ngongrd} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ngongrd} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ngongrd} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}

export default SignUp