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
        rent ="Rent:"
        rent_amount = "Ksh 18,000"
        occupancy = "Vacant"
        />
        <Housecard
          img='https://cf.bstatic.com/xdata/images/hotel/max1024x768/303009989.jpg?k=f6f1165644e8c0d834c2356f1d995775f35cab930791a693eb661889fcfe00f3&o=&hp=1'
          title='2-Bedroom Apartments'
          description='Experience versatility in our 2-bedroom apartments, ideal for small families or those desiring extra space. Find well-appointed kitchens, comfortable living areas.'
          rent='Rent:'
          rent_amount='Ksh 18,000'
          occupancy='Occupied'
        />

        <Housecard
          img='https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/studio-apartment.jpg?itok=Qf7awsJ4'
          title='3-bedroom apartments'
          description='Live spaciously in our 3-bedroom apartments, designed for growing families or individuals who appreciate extra room. Enjoy fully equipped kitchens, comfortable living spaces.'
          rent='Rent:'
          rent_amount='Ksh 50,000'
          occupancy='Vacant'
        />
        <Housecard
          img='https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/studio-apartment.jpg?itok=Qf7awsJ4'
          title='4-bedroom apartment'
          description='Indulge in luxury and ample space with our grand 4-bedroom apartments. Featuring well-designed kitchens, expansive living areas.'
          rent='Rent:'
          rent_amount='Ksh 80,000'
          occupancy='Vacant'
        />


      </section>
    </>
   
  );
}

export default Apartments;
