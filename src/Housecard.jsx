import React from 'react'

function Housecard() {
  return (
    <>
    <div id='housecard'>
    <div id='housecard-image'>
        <img src='https://www.truoba.com/wp-content/uploads/2022/09/Truoba-Mini-1-bedroom-house-plans-1200x800.jpg' alt=''></img>
    </div>
    <div id='title'>
        <h1>1-Bedroom Apartments</h1>
        <p>Perfect for individuals or couples, our 1-bedroom apartments offer simplicity and comfort. 
            Enjoy a well-equipped kitchen, cozy living space, and convenient amenities</p>
            <div id='description'>
                <h2>Monthly Rent: <span>Ksh 18000</span></h2>
                <h2>Vacant Apartment</h2>
            </div>
            <div id='buttons'>
                <button>Book a visit</button>
                <button>Rent</button>
            </div>
    </div>
    </div>

    </>
  )
}

export default Housecard