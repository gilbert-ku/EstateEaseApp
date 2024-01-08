import React from 'react';
import Housecard from './Housecard';

function Apartments() {
  return (
    <>
      <section id="page1">
        <div id="content">
          <h1>Kingdom Apartments</h1>
          <p>Your ideal location</p>
          <p>Location: Ngong Road</p>
        </div>
      </section>
      <section id='housecards'>
      <Housecard
      img = 'https://www.truoba.com/wp-content/uploads/2022/09/Truoba-Mini-1-bedroom-house-plans-1200x800.jpg'
      title= "1-Bedroom Apartments"
      description ="Perfect for individuals or couples, our 1-bedroom apartments offer simplicity and comfort. 
      Enjoy a well-equipped kitchen, cozy living space, and convenient amenities"
      rent ="Monthly Rent:"
      rent_amount = "Ksh 18000"
      occupancy = "Vacant"
      />
      </section>
    </>
   
  );
}

export default Apartments;
