import React from 'react'
import { Link } from 'react-router-dom';
import { BsHouseAdd } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import  seenbungalow from "/seenbungalow.jpg"
import birthroom from "/birthroom.jpeg"
import kitchen from "/Kitchen.jpeg"
import sitting  from "/sittingroom.jpeg"
import sitting2  from "/sittingroom2 .jpeg"
import profile from "/reviews.png"



const Tenant = () => {
  
    
  return (
    <>
        <section className="container " style={{height: "100vh", width:"100vw"}}>
            <h1>Dashbord</h1>
            {/* new applicant */}
            <div className='d-md-flex justify-content-between border border-2 p-2 rounded-3 mt-1 mt-md-2'>

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
            <div className=' d-md-flex '>
                {/* ******************************************* */}
                <div className=''>
                    {/* payments */}
                    <div className=' border border-2 p-2 rounded-3 mt-1 mt-md-2'>
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
                <div className=' border border-2 p-2 rounded-3 mt-1 mt-md-2'>
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

                <div className='mt-1 mt-md-2 border border-2 p-2 rounded-3 ms-2'>
                    <p className='ms-3 fw-bold'>My Profile</p>
                    <div className='d-flex justify-content-center align-item-center'>
                        <div style={{height: "6rem"}}>
                            <img src={profile} 
                            className='img-fluid rounded-circle bg-secondary'
                            style={{height: "6rem"}}
                            alt="profile" />
                        </div>
                    </div>
                    <p className='my-2 text-center'>Gilbert Daddy Kutoto</p>


                    {/* table */}
                    <div>
                            <p className='fw-bold '
                            style={{color: "#9C5412"}}>Overview</p>
                            <table className="table table-bordered">
                        
                            <tbody>
                                <tr>
                                {/* <th scope="row">1</th> */}
                                <th scope="col">CATEGORY</th>
                                <td>Bungalow</td>
                                
                                </tr>
                                <tr>
                                {/* <th scope="row">1</th> */}
                                <th scope="col">HOUSE NO</th>
                                <td>AP 17</td>
                                </tr>

                                <tr>
                                {/* <th scope="row">1</th> */}
                                <th scope="col">BEDROOM NO</th>
                                <td>3</td>
                                </tr>
                            
                                <tr>
                                {/* <th scope="row">3</th> */}
                                <th scope="col">PAID DATE</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>01/01/1014</td>
                                </tr>

                                <tr>
                                {/* <th scope="row">3</th> */}
                                <th scope="col">DUE DATE</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>01/01/2024</td>
                                </tr>

                                <tr>
                                {/* <th scope="row">3</th> */}
                                <th scope="col">AMOUNT</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Ksh 30 000</td>
                                </tr>

                                <tr>
                                {/* <th scope="row">3</th> */}
                                <th scope="col">STATUS</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Paid</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>   
                        <p className='fw-bold'>Recent Activities</p>
                        <Link to="/dashboard/notification" className="nav-link " >
                        <p>
                            <span>
                                <IoNotificationsSharp className='p-1 text-white rounded-circle me-2 fs-5' style={{backgroundColor: "#9C5412"}}/>
                                Payment Reminder
                            </span>
                        </p></Link>
                        <p className='font-monospace'>The rent  payment of Ksh 30,000 is due next week.</p>

                        <div className='d-flex justify-content-between'>
                            <p><span className='pay--schedul p-1 rounded-3'>DUE IN 7 Days</span></p>
                            <p>01/02/2024 12:00</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Tenant