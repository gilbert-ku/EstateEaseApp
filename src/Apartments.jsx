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
      <Housecard/>
      </section>
    </>
   
  );
}

export default Apartments;
