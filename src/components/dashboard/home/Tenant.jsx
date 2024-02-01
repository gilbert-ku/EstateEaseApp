import React from 'react'
import { BsHouseAdd } from "react-icons/bs";

const Tenant = () => {
  return (
    <>
        <div className="container " style={{height: "100vh", width:"100vw"}}>
            <h1>Dashbord</h1>
        <div className='d-md-flex justify-content-between border border-2 p-2 rounded-3 mt-5'>

            <div className='d-flex '>
                <div className=' p-1 p-md-2 fs-3 rounded-3 my-auto' style={{backgroundColor: "#9C5412"}}>
                    <span className='text-white  '
                    
                    >
                    <BsHouseAdd />  
                </span>
                </div>
                
                <div className='ms-2 my-auto'>
                    <p className='fw-bold'>Tenant Application</p>
                    <p className='dash---p'>Let's review your tenancy application</p>
                </div>
            </div>
            <div className='my-auto'>
                <button className='btn text-white w-100' style={{backgroundColor: "#9C5412"}}>Application Form</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Tenant