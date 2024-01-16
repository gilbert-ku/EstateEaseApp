import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='container-fluid '>
          <div className='footer--div mx-auto rounded-4'>
            <div className=''>
              <p className='fs-1 ms-5 text-white fw-bold'>EstateEase</p>
              <p className='fs-4 ms-5 text-white ' >Subscribe for EstateEase updates </p>
              <div className='m-5 mt-2'>
                <form>
                  <div class="mb-3 d-md-flex border border-white p-3 rounded-3">
                    <label></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <button type="submit" class="btn btn-primary ms-2">Submit</button>
                  </div>
                </form>
              </div>
            </div>

            <div className='quiz-link'>
              <p className='fs-5'>Quick Links</p>
              <ul>
                <li>About us</li>
                <li>contact Us</li>
                <li>Properties</li>
                <li>Find Help</li>
              </ul>
            </div>

            <div>
              <p className='fs-5'>Useful Link</p>

              <ul>
                <li>Private Policy</li>
                <li>User Agreement</li>
                <li>Frequently Asked Question</li>
                <li>
                  <button className='btn '>Find Movers</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Footer