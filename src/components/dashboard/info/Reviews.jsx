import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdEdit } from 'react-icons/md';
import ReviewCards from './ReviewCards';
import SideNavBar from '../dash-navbar/SideNavBar';


const Reviews = () => {


  // form modal
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <section className='d-flex'>
      <div className='d-none d-sm-block'>
        <SideNavBar />
      </div>
      <div className='w-100'>
        <div className='contact---us bg-white text-center d-flex justify-content-center align-item-center m-auto'>
          <div className='contact--text p-3 m-auto'>
            <h3 className='fs-3 font-monospace' style={{ color: "#9C5412" }}>EstateEase</h3>
            <p className='fs-1 fw-bold text-dark font-monospace'>Reviews</p>
          </div>
        </div>

        {/* header */}
        <div className='container bg-secndary'>
            <p className='d-block d-md-none fs-1 fw-bold text-dark font-monospace' >Reviews</p>

            <div className='d-md-flex justify-content-between mt-3'>
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
                <button className='btn text-white w-100 w-25 fs-6'
                style={{ backgroundColor: "#9C5412" }}
                onClick={() => setOpen(true)}
                >
                  <span className='mx-2'>
                    <MdEdit />
                  </span>
                  Write a Review
                </button>
              </div>
            </div>
            {/* review code and modal */}
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              center
              classNames={{
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
              }}
              animationDuration={800}
            >
              <div>
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="nameFormControlInput-review" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="nameFormControlInput-review" placeholder="John Doe" required/>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="messangeFormControlTextarea-review" className="form-label">Reviews</label>
                    <textarea className="form-control" id="messangeFormControlTextarea-review" required placeholder="Write your review" rows="3"></textarea>
                  </div>
                  <button className="btn text-white w-100" style={{backgroundColor: "#9C5412"}}>Submit</button>
                </form>
                <div className="mb-3 mt-2">
                    <label htmlFor="emailFormControlInput-review" className="form-label">Rate us</label>
                    <span className='fs-5 p-1 p-md-2'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                  </div>
              </div>
            </Modal>
        
            {/* reviews body */}
        
            <div className=''>
              <p>Recent Reviews</p>
              <div className='mx-0 mx-sm-5 mb-3'>
                <ReviewCards    
                />
              </div>
            </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Reviews;