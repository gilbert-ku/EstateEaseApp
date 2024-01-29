import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import runda from '/landing.jpg';
import karen from '/karen-man.jpg';
import lavington from '/lavington-apt.jpg';

const MyAccount = () => {
  return (
    <>
    <div className="container d-md-flex justify-content-center align-items-center ">
        <div className="sign--form me-md-5 ">
          <p className="fs-1">
            Welcome Back To <span className="fs-1 " style={{ color: '#9C5412' }}>EstateEase</span>
          </p>
          
          <form>
            
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="••••••••" />
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ color: 'white', backgroundColor: '#9C5412' }}>
              Sign In
            </button>
          </form>
          <div className="d-flex justify-content-center align-items-center my-1">
            <hr className="w-50 my-auto border-2" />
            <p className="mx-4 my-auto">OR </p>
            <hr className="w-50 my-auto border-2" />
          </div>
          <button className="btn btn-secondary w-100" style={{ color: 'white', backgroundColor: '#9C5412' }}>
            <FaGoogle className="mx-2 text-center" />
            SignIn With Google
          </button>
        </div>

        {/* Carousels */}
        <div className="d-none d-md-block">
          <div
            id="carouselExampleCaptions"
            className="carousel slide boot--slides mt-md-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={lavington} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black">
                  <p className='fs-1 text-white fw-bold'>Apartment</p>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={runda} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black">
                  <p className='fs-1 text-white fw-bold'>Bungalow</p>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={karen} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black">
                  <p className='fs-1 text-white fw-bold'>Mansion</p>
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
      </div>
    </>
  )
}

export default MyAccount