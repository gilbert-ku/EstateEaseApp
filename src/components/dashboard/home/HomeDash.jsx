import React from 'react'
import birthroom from '/birthroom.jpeg';
import seatingone from '/seatingroom .jpeg';
import seatingtwo from '/seatingroom2 .jpeg';
import kitchen from '/Kitchen.jpeg';
import SideNavBar from '../dash-navbar/SideNavBar';


const homeDash = () => {
  return (
    <>
    <section className='fluid  d-flex' >
    <div className=' px-3 px-md-5 ' style={{backgroundColor: "#9C5412", width: ""}}>
      <SideNavBar />
    </div>
    <div className="mx-2 mx-md-5 d-md-flex">
      <div className=" d-md-block">
            <div
              id="carouselExampleCaptions"
              className="carousel slide  dashboard-carousel"
              data-bs-ride="carousel"
              // style={{width: "30vw"}}
            >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={birthroom} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block text-black">
                    <p className='fs-1 text-white fw-bold'>Apartment</p>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={kitchen} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block text-black">
                    <p className='fs-1 text-white fw-bold'>Bungalow</p>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={seatingone} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block text-black">
                    <p className='fs-1 text-white fw-bold'>Mansion</p>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={seatingtwo} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block text-black">
                    <p className='fs-1 text-white fw-bold'>Mansion</p>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
      </div>

      <div className='d-flex justify-center align-canter m-auto'>
        <div className=''>
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis illum voluptatibus corrupti, consequatur earum dolorum vitae nulla? Aspernatur laboriosam earum tenetur eveniet non, harum assumenda quos, quo rerum necessitatibus quaerat.</p> */}
        <button className="btn btn-secondary color-white">Rent our Specious houses to day</button>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default homeDash