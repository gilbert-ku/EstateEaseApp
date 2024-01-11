import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import runda from '/runda-bungalow.png';
import ngongrd from '/ngong-dr-apt.jpg';
import lavington from '/lavington-apt.jpg';
import langata from '/langata-apt.jpg';
import karen from '/karen-man.jpg';

const propertyData = [
  { image: runda, category: "Bungalow", location: "Runda", discover: "link1" },
  { image: ngongrd, category: "Apartment", location: "Ngong Road", discover: "link2" },
  { image: lavington, category: "Apartment", location: "Lavington", discover: "link3" },
  { image: langata, category: "Apartment", location: "Langata", discover: "link4" },
  { image: karen, category: "Mansion", location: "Karen", discover: "link5" },
];

function Properties() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <section className='container'>
      <div className='mt-5'>
        <h1 className='text-center' style={{ color: "#9C5412" }}>Properties</h1>
        <p className='text-center fs-3 my-2'>Discover Your Perfect Property Match</p>
      </div>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={2000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {propertyData.map((property, index) => (
          <div key={index} 
          className='card my-5' 
          style={{width: "20rem"}}>
            <img src={property.image} 
              className="card-img-top"
              alt="Property" 
              style={{ width: "20rem", height: "20rem" }} 
            />
            <div className='card-body'>
              <ul>
                <li>
                  <strong>Location:</strong> {property.location}
                </li>
                <li>
                  <strong>Category:</strong> {property.category}
                </li>
                <li>
                  <strong>Discover:</strong> {property.discover}
                </li>
              </ul>
            </div>
            
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Properties;
