import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Housecard(props) {
  const [date, setDate] = useState(new Date());

function handleVisitHouse(){
  alert("I want to view this house")
}
function handleRent(){
  alert("I want to rent this house")
}

  return (
    <>
    <div id='housecard' >
    <div id='housecard-image'>
        <img src={props.img} alt=''></img>
    </div>
    <div id='title'className="container-fluid">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
            <div id='description'className="container-fluid">
                <h2>{props.rent} Starting from<span> {props.rent_amount}</span></h2>
                <h2>{props.occupancy}</h2>
            </div>
            <div id='buttons'className="container-fluid">
            <div>
            <Popup trigger=
                {<button onClick={handleVisitHouse}> Book a visit </button>}
                position="right center">
                <div>
                  <DatePicker selected={date} onChange={(date) => setDate(date)} />
                </div>
            </Popup>
        </div>                
                <button id='rent' onClick={handleRent}>Rent</button>
            </div>
    </div>
    </div>

    </>
  )
}

export default Housecard