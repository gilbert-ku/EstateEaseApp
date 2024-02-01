import React from 'react'
import { BsHouseAdd } from "react-icons/bs";

const Tenant = () => {
  return (
    <>
        <div className="container " style={{height: "100vh", width:"100vw"}}>
            <h1>Dashbord</h1>
            {/* new applicant */}
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

            {/* payments */}
            <div className=' border border-2 p-2 rounded-3 mt-5'>
                <p className='ms-4 ms-md-2'> <span className='fw-bold'>Schedule Payment</span> <span className='pay--schedul p-1 rounded-3'>DUE IN 7 Days</span></p>

                <hr  className=''/> 
                <div className='d-sm-flex justify-content-between'>
                <div className=''>
                <ul className='d-sm-flex justify-content-between p-0 p-sm-3'>
                    <li className=" ms-4 ms-md-2 current--bal border-end-1">
                    Current Balance
                    <p>Ksh 0.00</p>
                    </li>
                    <li className=' amount--due ms-4 ms-md-5 border-end-1'>
                    Amount Due
                    <p>Ksh 30 000</p>
                    </li>
                    <li className='total--payment ms-4 ms-md-5 border-end-2'>
                    Total Payment
                    <p>KSh 30 000</p>
                    </li>
                </ul>
                </div>

                    <div className='my-auto'>
                        <button className='btn text-white w-100' style={{backgroundColor: "#9C5412"}}>Schedule Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tenant