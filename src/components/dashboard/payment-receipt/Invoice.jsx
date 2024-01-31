import React from 'react'

const Invoice = () => {
  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-between mt-5 '>
          <div>
            <p className='fs-2' style={{ color: "#9C5412" }}>Invoive</p>
          </div>
          <div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          </div>
        </div>

        <div className='border boder-2 p-5  rounded-3'>
          <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col" style={{ color: "#9C5412" }}>Invoice ID</th>
              <th scope="col" style={{ color: "#9C5412" }}>Tenant Name</th>
              <th scope="col" style={{ color: "#9C5412" }}>Tenant ID</th>
              <th scope="col" style={{ color: "#9C5412" }}>House Number</th>
              <th scope="col" style={{ color: "#9C5412" }}>Invoice Date </th>
              <th scope="col" style={{ color: "#9C5412" }}>Due Date </th>
              <th scope="col" style={{ color: "#9C5412" }}>Description</th>
              <th scope="col" style={{ color: "#9C5412" }}>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>01</td>
              <td>Gilbert Kutoto</td>
              <td>54321</td>
              <td>Blw 1</td>
              <td>01/01/2024</td>
              <td>05/01/2024</td>
              <td>Rent</td>
              <td>Ksh 30 000</td>
              
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>02</td>
              <td>John Doe</td>
              <td>54321</td>
              <td>Blw 1</td>
              <td>01/12/2023</td>
              <td>05/12/2023</td>
              <td>Rent</td>
              <td>Ksh 30 000</td>
            </tr>

            <tr>
              {/* <th scope="row">3</th> */}
              <td>03</td>
              <td>Jane Doe</td>
              <td>54321</td>
              <td>Blw 1</td>
              <td>01/11/2023</td>
              <td>05/11/2023</td>
              <td>Rent</td>
              <td>Ksh 30 000</td>
            </tr>

            <tr>
              {/* <th scope="row">4</th> */}
              <td>04</td>
              <td>Arcane Achie</td>
              <td>54321</td>
              <td>Blw 1</td>
              <td>01/10/2023</td>
              <td>05/10/2023</td>
              <td>Rent</td>
              <td>Ksh 30 000</td>
            </tr>

            <tr>
              {/* <th scope="row">5</th> */}
              <td>05</td>
              <td>Gillie Daddy</td>
              <td>54321</td>
              <td>Blw 1</td>
              <td>01/09/2023</td>
              <td>05/09/2023</td>
              <td>Rent</td>
              <td>Ksh 30 000</td>
            </tr>
          </tbody>
          </table>
        </div>
        
        
      </div>
    </>
  )
}

export default Invoice