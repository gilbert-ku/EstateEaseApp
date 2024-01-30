import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdEdit } from 'react-icons/md';
import ReviewCards from './ReviewCards';



const Reviews = () => {
  return (
    <>
      <div className='contact---us bg-white text-center d-flex justify-content-center align-item-center m-auto'>
        <div className='contact--text p-3 m-auto'>
          <h3 className='fs-3 font-monospace' style={{ color: "#9C5412" }}>EstateEase</h3>
          <p className='fs-1 fw-bold text-dark font-monospace'>Reviews</p>
        </div>
      </div>

      {/* header */}
        <div className='container bg-secondary'>
          <p className='fs-1 fw-bold text-dark font-monospace' >Reviews</p>

          <div className='d-md-flex justify-content-between '>
            <div>
              <p className=''>
                <span className='fw-bold mx-2'>4.5</span>
                  <span className='fs-5'>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStarHalfAlt style={{ color: "#9C5412" }}/>
                  </span>
              <span className=' mx-2'>Over 100 Reviews</span>
              </p>
            </div>
        
            <div>
              <button className='btn text-white w-100 w-25 fs-6'style={{ backgroundColor: "#9C5412" }}>
                <span className='mx-2'>
                  <MdEdit />
                </span>
                Write a Review
              </button>
            </div>
          </div>
      
          {/* reviews body */}
      
          <div className=''>
            <p>Recent Reviews</p>
            <div className='border border-1'>
              <ReviewCards />
            </div>
          </div>

        </div>
    </>
  )
}

export default Reviews