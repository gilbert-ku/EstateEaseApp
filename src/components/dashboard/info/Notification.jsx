import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { GiPlainCircle } from "react-icons/gi";

const Notification = () => {
  return (
    <>
    <div className='container'>
      <p className='fs-1 text-center'>Notifications</p>
      <ul>
        <li>
          <p className='fw-bold fs-5' style={{color: "#9C5412"}}>Invoice</p>
          <p>Form: Admin <span className="mx-1 mx-md-3" style={{color: "#9C5412"}}><GiPlainCircle /></span></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quaerat eius officia itaque ad porro soluta at consectetur quisquam blanditiis quis, vitae animi. Repellat ex vero reprehenderit. reprehenderit. 
            <span className="fw-bold" style={{color: "#9C5412"}}>dolorum...</span></p>
          <div className='d-flex justify-content-between'>
            <p className='fs-2'><MdDeleteSweep /></p>
            <p><span className='pe-2 fs-4'><FaRegClock  /></span>28th Jan 2023 at 02:24</p>
          </div>
        </li>
        <hr />

        <li>
          <p className='fw-bold fs-5' style={{color: "#9C5412"}}>Reciept</p>
          <p>Form: Admin </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quaerat eius officia itaque ad porro soluta at consectetur quisquam blanditiis quis, vitae animi. Repellat ex vero reprehenderit. reprehenderit. 
            <span className="fw-bold" style={{color: "#9C5412"}}>dolorum...</span></p>
          <div className='d-flex justify-content-between'>
            <p className='fs-2'><MdDeleteSweep /></p>
            <p><span className='pe-2 fs-4'><FaRegClock  /></span>28th Jan 2023 at 02:24</p>
          </div>
        </li>
        <hr />

        <li>
          <p className='fw-bold fs-5' style={{color: "#9C5412"}}>Message</p>
          <p>Form: Caretaker </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas quaerat eius officia itaque ad porro soluta at consectetur quisquam blanditiis quis, vitae animi. Repellat ex vero reprehenderit. reprehenderit. 
            <span className="fw-bold" style={{color: "#9C5412"}}>dolorum...</span></p>
          <div className='d-flex justify-content-between'>
            <p className='fs-2'><MdDeleteSweep /></p>
            <p><span className='pe-2 fs-4'><FaRegClock  /></span>28th Jan 2023 at 02:24</p>
          </div>
        </li>
        <hr />
      </ul>
    </div>

    </>
  )
}

export default Notification