import React from 'react'
import { Link } from 'react-router-dom'

const RentForm = () => {
  return (
    <>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">ID Number</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Occupation</label>
            <input type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Select House type</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Type of House</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Numbert Of Bedroom</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Number of Bedroom</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">House Number</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>House Number</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
            
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Monthly Rent</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Monthly Rent</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
            

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Lease Start Date</label>
            <input type="datetime-local" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">
                <Link to="/T&Cs">Terms and Conditions</Link>
            </label>
        </div>
        <button type="submit" class="btn btn-primary w-100 ">Submit</button>
    </form>
    </>
  )
}

export default RentForm