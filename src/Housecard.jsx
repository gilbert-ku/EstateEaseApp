import React from 'react'

function Housecard(props) {
function handleVisitHouse(){
  alert("I want to view this house")
}
function handleRent(){
  alert("I want to rent this house")
}
  return (
    <>
    <div id='housecard'>
    <div id='housecard-image'>
        <img src={props.img} alt=''></img>
    </div>
    <div id='title'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
            <div id='description'>
                <h2>{props.rent} <span>{props.rent_amount}</span></h2>
                <h2>{props.occupancy}</h2>
            </div>
            <div id='buttons'>
                <button id='visit'onClick={handleVisitHouse}>Book a visit</button>
                <button id='rent' onClick={handleRent}>Rent</button>
            </div>
    </div>
    </div>

    </>
  )
}

export default Housecard