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


<Housecard
  img='https://cf.bstatic.com/xdata/images/hotel/max1024x768/303009989.jpg?k=f6f1165644e8c0d834c2356f1d995775f35cab930791a693eb661889fcfe00f3&o=&hp=1'
  title='2-Bedroom Apartments'
  description='Spacious 2-bedroom apartments designed for families or individuals seeking extra space. Features include a modern kitchen, comfortable living area, and desirable amenities.'
  rent='Monthly Rent:'
  rent_amount='Ksh 25000'
  occupancy='Occupied'
/>

<Housecard
  img='https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/studio-apartment.jpg?itok=Qf7awsJ4'
  title='Studio Apartments'
  description='Compact and efficient, our studio apartments are perfect for those who prefer a minimalist lifestyle. Enjoy a combined living and sleeping area, along with a functional kitchen.'
  rent='Monthly Rent:'
  rent_amount='Ksh 15000'
  occupancy='Vacant'
/>

<Housecard
  img='https://cdn.tatlerasia.com/asiatatler/i/ph/2019/07/18161159-3-super-penthouse_cover_2000x1168.jpg'
  title='Luxury Penthouse'
  description='Indulge in luxury with our exclusive penthouse featuring breathtaking views, spacious interiors, and top-notch amenities. Ideal for those who appreciate the finer things in life.'
  rent='Monthly Rent:'
  rent_amount='Ksh 35000'
  occupancy='Vacant'
/>

<Housecard
  img='https://i.insider.com/613785172534ab00185320bf?width=600&format=jpeg&auto=webp'
  title='3-Bedroom Townhouse'
  description='Experience the comfort of a townhouse with three bedrooms, suitable for families or individuals desiring ample living space. Enjoy a private yard and premium amenities.'
  rent='Monthly Rent:'
  rent_amount='Ksh 30000'
  occupancy='Occupied'
/>

      </section>
    </>
   
  );
}

export default Apartments;
