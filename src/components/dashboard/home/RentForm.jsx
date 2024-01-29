import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import NavbarDash from '../dash-navbar/NavbarDash';
import Footer from '../dash-navbar/Footer';

const RentForm = () => {
  const [phone, setPhone] = useState('');

  return (
    <>
      <section className='container-fluid' style={{ height: "100vh" }}>
        <NavbarDash />
        <div className='container'>
           <p className='fs-6 fs-md-5 mx-5'>
           Welcome to EstateEase! Elevate your living with sophisticated homes, secure payments, instant receipts, and top-notch safety. Experience the pinnacle of elegance and convenience. Fill the rent form today for a seamless journey into luxury living.            </p> 
        </div>
        
        <div className="container mt-2">
          <div className='mx-2 mx-md-5 mt-1 mt-md-3'>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstNameInputEmail1" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstNameInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="LastNameInputEmail1" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="LastNameInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="idNumInputEmail1" className="form-label">ID Number</label>
                  <input type="number" className="form-control" id="idNumInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Gender</label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option value="default" disabled hidden>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <PhoneInput
                    className="form-control"
                    aria-describedby="emailHelp"
                    required
                    defaultCountry="ke"
                    value={phone}
                    onChange={(phone) => setPhone(phone)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="emailInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="occupationInputPassword1" className="form-label">Occupation</label>
                  <input type="text" className="form-control" id="occupationInputPassword1" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Select House type</label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option value="default" disabled hidden>Type of House</option>
                    <option value="0">--select--</option>
                    <option value="1">Apartment</option>
                    <option value="2">Bungalow</option>
                    <option value="3">Mansion</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">House Location</label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option value="default" disabled hidden>House Location</option>
                    <option value="0">--select--</option>
                    <option value="1">Langata</option>
                    <option value="2">Lavington</option>
                    <option value="3">Ngong Road</option>
                    <option value="4">Kileleshwa</option>
                    <option value="5">Karen</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Number Of Bedroom</label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option value="default" disabled hidden>Number of Bedroom</option>
                    <option value="0">--select--</option>
                    <option value="1">Single Room</option>
                    <option value="2">Bedsitter</option>
                    <option value="3">One Bedroom</option>
                    <option value="4">Two Bedroom</option>
                    <option value="5">Three Bedroom</option>
                    <option value="6">Four Bedroom</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Vacant Houses</label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option value="default" disabled hidden>Vacant Houses</option>
                    <option value="0">--select--</option>
                    <option value="1">Ap 1</option>
                    <option value="2">Ap 2</option>
                    <option value="3">Ap 3</option>
                    <option value="4">Ap 4</option>
                    <option value="5">Ap 5</option>
                    <option value="6">Blw 1</option>
                    <option value="7">Blw 2</option>
                    <option value="8">Blw 3</option>
                    <option value="9">Blw 4</option>
                    <option value="10">Blw 5</option>
                    <option value="11">Mansion 1</option>
                    <option value="12">Mansion 2</option>
                    <option value="13">Mansion 3</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Monthly Rent</label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option value="default" disabled hidden>Monthly Rent</option>
                    <option value="0">--select--</option>
                    <option value="1">Ksh 5000</option>
                    <option value="2">Ksh 8000</option>
                    <option value="3">Ksh 12 000</option>
                    <option value="4">Ksh 15 000</option>
                    <option value="5">Ksh 18 000</option>
                    <option value="6">Ksh 22 000</option>
                    <option value="7">Ksh 28 000</option>
                    <option value="8">Ksh 30 000</option>
                    <option value="9">Ksh 35 000</option>
                    <option value="10">Ksh 40 000</option>
                    <option value="11">Ksh 45 000</option>
                    <option value="12">Ksh 50 000</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="leaseInputPassword1" className="form-label">Lease Start Date</label>
                  <input type="datetime-local" className="form-control" id="leaseInputPassword1" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="formFile" className="form-label">Upload a copy of ID</label>
                  <input className="form-control" type="file" id="formFile" required />
                </div>
                <div className=" mb-3 form-check">
                  <div id="emailHelp" className="form-text">We'll never share your information to a third party.</div>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                  <label className="form-check-label t---cs" htmlFor="exampleCheck1">
                    <Link to="/T&Cs">Terms and Conditions</Link>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn w-100 text-white mb-2"
                style={{ backgroundColor: "#9C5412" }}>Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default RentForm;
