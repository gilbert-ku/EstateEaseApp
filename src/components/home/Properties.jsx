import React from 'react'
import PropertyCards from './PropertyCards'
import runda from '/runda-bungalow.png';
import ngongrd from '/ngong-dr-apt.jpg';
import lavington from '/lavington-apt.jpg';
import langata from '/langata-apt.jpg';
import karen from '/karen-man.jpg';

function Properties(props) {

    console.log(props)
  return (
    <>
        <section className='container'>
            <div className='mt-5'>
                <h1 className='text-center' style={{color: "#9C5412"}}>Properties</h1>
                <p className='text-center fs-3 my-2'>Discover Your Perfect Property Match</p>
            </div>
            

      <PropertyCards
        image= {runda}
        category= "Bungalow"
        location= "Runda "
        discover= "link"      
      />

      <PropertyCards
        image= {ngongrd}
        category= "apartment"
        location= "Ngong Road "
        discover= "link"      
      />

      <PropertyCards
        image= {lavington}
        category= "apartment"
        location= "Lavington"
        discover= "link"      
      />

      <PropertyCards
        image= {langata}
        category= "apartment"
        location= "Langata"
        discover= "link"      
      />

      <PropertyCards
        image= {karen}
        category= "Mansion"
        location= "Karen"
        discover= "link"      
      />
        </section>
    </>
    
  )
}

export default Properties