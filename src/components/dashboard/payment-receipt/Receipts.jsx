import React from 'react'
import { FaDownload } from "react-icons/fa6";


const Receipts = () => {
  return (
    <>
    <div className='container'>
        <div className='d-flex justify-content-between mt-5 '>
          <div>
            <p className='fs-2' style={{ color: "#9C5412" }}>Receipts</p>
          </div>
          <div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search date" aria-label="Search" />
          </form>
          </div>
        </div>

        <div className='border boder-2 p-5  rounded-3'>
          <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col" style={{ color: "#9C5412" }}>Receipt ID</th>
              <th scope="col" style={{ color: "#9C5412" }}>Tenant Name</th>
              {/* <th scope="col" style={{ color: "#9C5412" }}>Tenant ID</th> */}
              <th scope="col" style={{ color: "#9C5412" }}>House Number</th>
              <th scope="col" style={{ color: "#9C5412" }}>Paid Date </th>
              {/* <th scope="col" style={{ color: "#9C5412" }}>Due Date </th> */}
              <th scope="col" style={{ color: "#9C5412" }}>Description</th>
              <th scope="col" style={{ color: "#9C5412" }}>Method</th>
              <th scope="col" style={{ color: "#9C5412" }}>Amount</th>
              <th scope="col" style={{ color: "#9C5412" }}>Download </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>01</td>
              <td>Gilbert Kutoto</td>
              <td>Blw 1</td>
              <td>01/01/2024</td>
              <td>Rent</td>
              <td>Mpesa</td>
              <td>Ksh 30 000</td>
              <td><FaDownload /></td>
              
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>02</td>
              <td>Gilbert Kutoto</td>
              <td>Blw 1</td>
              <td>01/12/2023</td>
              <td>Rent</td>
              <td>Mpesa</td>
              <td>Ksh 30 000</td>
              <td><FaDownload /></td>
            </tr>

            <tr>
              {/* <th scope="row">3</th> */}
              <td>03</td>
              <td>Gilbert Kutoto</td>
              <td>Blw 1</td>
              <td>01/11/2023</td>
              <td>Rent</td>
              <td>Mpesa</td>
              <td>Ksh 30 000</td>
              <td><FaDownload /></td>
            </tr>

            <tr>
              {/* <th scope="row">4</th> */}
              <td>04</td>
              <td>Gilbert Kutoto</td>
              <td>Blw 1</td>
              <td>01/10/2023</td>
              <td>Rent</td>
              <td>Mpesa</td>
              <td>Ksh 30 000</td>
              <td><FaDownload /></td>
            </tr>

            <tr>
              {/* <th scope="row">5</th> */}
              <td>05</td>
              <td>Gilbert Kutoto</td>
              <td>Blw 1</td>
              <td>01/09/2023</td>
              <td>Rent</td>
              <td>Mpesa</td>
              <td>Ksh 30 000</td>
              <td><FaDownload /></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    
    </>
  )
}

export default Receipts