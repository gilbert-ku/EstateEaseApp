import React from 'react'
import Apartments from './Apartments'

function Housecard(props) {
  return (
    <>
    <div id='housecard'>
    <div id='housecard-image'>
        <img src='https://www.truoba.com/wp-content/uploads/2022/09/Truoba-Mini-1-bedroom-house-plans-1200x800.jpg' alt=''></img>
    </div>
    <div id='title'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
            <div id='description'>
                <h2>{props.rent} <span>{props.rent_amount}</span></h2>
                <h2>{props.occupancy}</h2>
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