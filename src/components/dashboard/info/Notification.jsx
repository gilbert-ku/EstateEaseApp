import React from 'react'
import { useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { GiPlainCircle } from "react-icons/gi";
import SideNavBar from '../dash-navbar/SideNavBar';

const Notification = () => {


  return (

    <>
    <section className='d-flex'>
      <div className='d-none d-md-block'>
          <SideNavBar />
        </div>
        <div className='w-100'>
          {/* <div className='d-flex justify-content-center align-item-center m-auto h-100'>
            <h1>You have no notifications</h1>
          </div> */}
          <div className='container'>
            <p className='fs-1 text-center'>Notifications</p>
            <ul className='list-group list-group-flush'>
              <li className="list-group-item">
                <p className='fw-bold fs-5' style={{color: "#9C5412"}}>Invoice</p>
                <p>Form: Admin <span className="mx-1 mx-md-3" style={{color: "#9C5412"}}><GiPlainCircle /></span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quaerat eius officia itaque ad porro soluta at consectetur quisquam blanditiis quis, vitae animi. Repellat ex vero reprehenderit. reprehenderit. 
                  <span className="fw-bold" style={{color: "#9C5412"}}>dolorum...</span></p>
                <div className='d-flex justify-content-between'>
                  <p className='fs-2'><MdDeleteSweep /></p>
                  <p><span className='pe-2 fs-4'><FaRegClock  /></span>28th Jan 2023 at 02:24</p>
                </div>
              </li>

              <li className="list-group-item">
                <p className='fw-bold fs-5' style={{color: "#9C5412"}}>Reciept</p>
                <p>Form: Admin </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quaerat eius officia itaque ad porro soluta at consectetur quisquam blanditiis quis, vitae animi. Repellat ex vero reprehenderit. reprehenderit. 
                  <span className="fw-bold" style={{color: "#9C5412"}}>dolorum...</span></p>
                <div className='d-flex justify-content-between'>
                  <p className='fs-2'><MdDeleteSweep /></p>
                  <p><span className='pe-2 fs-4'><FaRegClock  /></span>28th Jan 2023 at 02:24</p>
                </div>
              </li>
              
              <li className="list-group-item">
                <p className='fw-bold fs-5' style={{color: "#9C5412"}}>Message</p>
                <p>Form: Caretaker </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quaerat eius officia itaque ad porro soluta at consectetur quisquam blanditiis quis, vitae animi. Repellat ex vero reprehenderit. reprehenderit. 
                  <span className="fw-bold" style={{color: "#9C5412"}}>dolorum...</span></p>
                <div className='d-flex justify-content-between'>
                  <p className='fs-2'><MdDeleteSweep /></p>
                  <p><span className='pe-2 fs-4'><FaRegClock  /></span>28th Jan 2023 at 02:24</p>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
    </section>
    
    </>
  )
}

export default Notification