import React from 'react'
import { CiCamera } from "react-icons/ci";

const EditProfile = () => {
  return (
    <>
    <section className='container'>
    <div className=' d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
  
      <div className=' w-100 border boder-3 p-3 mx-2 my-auto' >
        <p className='fs-1 fw-bold text-center my-5'>Edit Profile</p>
        <div className='d-flex justify-content-center align-items-center'>

          <div className='rounded-circle bg-white' style={{ width: "100px", height: "100px" }}>

            <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
              className='rounded-circle img-fluid bg-white'
              alt="profile" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e)}
              style={{ display: 'none' }}
              id="imageInput"
            />
            <label htmlFor="imageInput">
              <span className='fs-5 mx-3'>edit <CiCamera /></span>
            </label>
          </div>

        </div>

        {/* form  */}

        <div className='mt-5'>
          <form action="">
            <div className="mb-3">
              <label htmlFor="nameFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="nameFormControlInput1" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="nameFormControlInput1" className="form-label">Email Name</label>
              <input type="email" className="form-control" id="nameFormControlInput1" placeholder="example@info.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailFormControlInput1" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="emailFormControlInput1" placeholder="0712345678" />
            </div>
            
            <button className="btn text-white" style={{backgroundColor: "#9C5412"}}>Save Changes</button> <span className='px-2 px-md-5'>OR</span>
            <button className="btn text-white" style={{backgroundColor: "#9C5412"}}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default EditProfile