import React from 'react'
import { BsHouseAdd } from "react-icons/bs";
import  seenbungalow from "/seenbungalow.jpg"
import birthroom from "/birthroom.jpeg"
import kitchen from "/Kitchen.jpeg"
import sitting  from "/sittingroom.jpeg"
import sitting2  from "/sittingroom2 .jpeg"



const Tenant = () => {
  
    
  return (
    <>
        <section className="container " style={{height: "100vh", width:"100vw"}}>
            <h1>Dashbord</h1>
            {/* new applicant */}
            <div className='d-md-flex justify-content-between border border-2 p-2 rounded-3 mt-5'>

                <div className='d-flex '>
                    <div className=' p-1 p-md-2 fs-3 rounded-3 my-auto' style={{backgroundColor: "#9C5412"}}>
                        <span className='text-white  '
                        
                        >
                        <BsHouseAdd />  
                    </span>
                    </div>
                    
                    <div className='ms-2 my-auto'>
                        <p className='fw-bold'>Tenant Application</p>
                        <p className='dash---p'>Let's review your tenancy application</p>
                    </div>
                </div>
                <div className='my-auto'>
                    <button className='btn text-white w-100' style={{backgroundColor: "#9C5412"}}>Application Form</button>
                </div>
            </div>


{/* ********************************** */}
            <div className=' d-flex'>
                {/* ******************************************* */}
                <div>
                    {/* payments */}
                <div className=' border border-2 p-2 rounded-3 mt-5'>
                    <p className='ms-4 ms-md-2'> <span className='fw-bold'>Schedule Payment</span> <span className='pay--schedul p-1 rounded-3'>DUE IN 7 Days</span></p>

                    <hr  className=''/> 
                    <div className='d-sm-flex justify-content-between'>
                    <div className=''>
                    <ul className='d-sm-flex justify-content-between p-0 p-sm-3'>
                        <li className=" ms-4 ms-md-2 current--bal border-end-1">
                        Current Balance
                        <p>Ksh 0.00</p>
                        </li>
                        <li className=' amount--due ms-4 ms-md-5 border-end-1'>
                        Amount Due
                        <p>Ksh 30 000</p>
                        </li>
                        <li className='total--payment ms-4 ms-md-5 border-end-2'>
                        Total Payment
                        <p>KSh 30 000</p>
                        </li>
                    </ul>
                    </div>

                        <div className='my-auto'>
                            <button className='btn text-white w-100' style={{backgroundColor: "#9C5412"}}>Schedule Payment</button>
                        </div>
                    </div>
                </div>

                {/* property */}
                <div className=' border border-2 p-2 rounded-3 mt-5'>
                    <p className='fw-bold'>Properties</p>
                    <p>From the most recent properties you see</p>
                    <div className='property--seen d-md-flex justify-content-between'>
                        <div className='rounded-3  ' >
                            <img src={seenbungalow} 
                            className='img-fluid rounded-3 '
                            style={{height: "25rem"}}
                            alt="recent property" />
                        </div>
                        {/* Carousels */}
                            <div className="d-none d-md-block ms-5">
                                <div
                                    id="carouselExampleCaptions"
                                    className="carousel "
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                    
                                    <div className="carousel-item">
                                        <img src={sitting} className="d-block w-100" alt="..." style={{height: "25rem"}}/>
                                        <div className="carousel-caption d-none d-md-block text-black">
                                        <p className='fs-3 text-white fw-bold'>Sitting Room</p>
                                        <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={sitting2} className="d-block w-100" alt="..." style={{height: "25rem"}}/>
                                        <div className="carousel-caption d-none d-md-block text-black">
                                        <p className='fs-3 text-white fw-bold'>Sitting Room</p>
                                        <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={kitchen} className="d-block w-100" alt="..." style={{height: "25rem"}}/>
                                        <div className="carousel-caption d-none d-md-block text-black">
                                        <p className='fs-3 text-white fw-bold'>Kitchen</p>
                                        <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <img src={birthroom} className="d-block w-100" alt="..."  style={{height: "25rem"}}/>
                                        <div className="carousel-caption d-none d-md-block text-black">
                                        <p className='fs-3 text-white fw-bold'>Birthroom</p>
                                        <p>Some representative placeholder content for the first slide.</p>
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
                    </div>
                </div>
                </div>

                <div className='bg-secondary'>
                    <img src="" alt="" />
                </div>
            </div>
            

        </section>
    </>
  )
}

export default Tenant