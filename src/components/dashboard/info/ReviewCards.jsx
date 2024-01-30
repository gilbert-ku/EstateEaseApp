import React from 'react'
import { useState } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewimg from "/reviews.png"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";



const reviewData = [
    { 
        image: reviewimg,
        name: "Gilbert K",
        rating : "",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nulla officia sunt odio temporibus tenetur nemo cumque repudiandae expedita ratione hic qui, alias esse suscipit, soluta numquam. Expedita, iusto obcaecati? Illo, aut quod ea accusamus exercitationem repellat vitae ullam molestiae commodi dolore ratione minus saepe quo nulla provident nemo aspernatur hic vero. Vel, ipsum voluptatem maxime dolore consequuntur laborum debitis. Iste mollitia neque veritatis accusantium ea iure odit provident aliquam error, hic ipsa eum suscipit blanditiis, quo nesciunt quasi illum ducimus incidunt eveniet nemo! Rem quas libero eos quasi perferendis.",
        time: "Now"
      },
  { 
    image: reviewimg, 
    name: "John Doe", 
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nulla officia sunt odio temporibus tenetur nemo cumque repudiandae expedita ratione hic qui, alias esse suscipit, soluta numquam. Expedita, iusto obcaecati? Illo, aut quod ea accusamus exercitationem repellat vitae ullam molestiae commodi dolore ratione minus saepe quo nulla provident nemo aspernatur hic vero. Vel, ipsum voluptatem maxime dolore consequuntur laborum debitis. Iste mollitia neque veritatis accusantium ea iure odit provident aliquam error, hic ipsa eum suscipit blanditiis, quo nesciunt quasi illum ducimus incidunt eveniet nemo! Rem quas libero eos quasi perferendis.", 
    time: "Today"
 },
  { 
    image: reviewimg, 
    name: "Jane Doe", 
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nulla officia sunt odio temporibus tenetur nemo cumque repudiandae expedita ratione hic qui, alias esse suscipit, soluta numquam. Expedita, iusto obcaecati? Illo, aut quod ea accusamus exercitationem repellat vitae ullam molestiae commodi dolore ratione minus saepe quo nulla provident nemo aspernatur hic vero. Vel, ipsum voluptatem maxime dolore consequuntur laborum debitis. Iste mollitia neque veritatis accusantium ea iure odit provident aliquam error, hic ipsa eum suscipit blanditiis, quo nesciunt quasi illum ducimus incidunt eveniet nemo! Rem quas libero eos quasi perferendis.", 
    time: "4 Days Ago" 
},
  { 
    image: reviewimg, 
    name: "Ravis O.", 
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nulla officia sunt odio temporibus tenetur nemo cumque repudiandae expedita ratione hic qui, alias esse suscipit, soluta numquam. Expedita, iusto obcaecati? Illo, aut quod ea accusamus exercitationem repellat vitae ullam molestiae commodi dolore ratione minus saepe quo nulla provident nemo aspernatur hic vero. Vel, ipsum voluptatem maxime dolore consequuntur laborum debitis. Iste mollitia neque veritatis accusantium ea iure odit provident aliquam error, hic ipsa eum suscipit blanditiis, quo nesciunt quasi illum ducimus incidunt eveniet nemo! Rem quas libero eos quasi perferendis.", 
    time: "5 Days Ago" },
  { 
    image: reviewimg, 
    name: "Myle M.", 
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, nulla officia sunt odio temporibus tenetur nemo cumque repudiandae expedita ratione hic qui, alias esse suscipit, soluta numquam. Expedita, iusto obcaecati? Illo, aut quod ea accusamus exercitationem repellat vitae ullam molestiae commodi dolore ratione minus saepe quo nulla provident nemo aspernatur hic vero. Vel, ipsum voluptatem maxime dolore consequuntur laborum debitis. Iste mollitia neque veritatis accusantium ea iure odit provident aliquam error, hic ipsa eum suscipit blanditiis, quo nesciunt quasi illum ducimus incidunt eveniet nemo! Rem quas libero eos quasi perferendis.", 
    time: "10 Days Ago" 
},
];   
const ReviewCards = () => {

    const [clicked, useClicked] = useState(false)


    // slide sesponsiveness
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

    //   handle like and dislick click

    const handleLike = () => {
    }

  return (
    <>
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
        {reviewData.map((review, index) => (
          <div key={index} 
          className='card my-2 b' 
          style={{width: "24rem"}}>
            <div className='d-flex justify-content-between'>
                <div className='d-flex  my-2'>
                <img src={review.image} 
                    className="rounded-circle bg-dark ms-2 p-1 p-md-2"
                    alt="Property" 
                    style={{ width: "5rem", height: "5rem" }} 
                    /> 
                    <div className='d-flex justify-content-center align-item-center my-auto ms-3'>
                        <div className='review--name'>
                        <p className='fs-4 review--name'>{review.name}</p>
                        <p className='me-3 review--time'>{review.time}</p> 
                        </div>
                    </div>
                </div>
                <div className='m-2 m-md-4 fs-3 fs-md-4'>
                    <button className='btn'><FcLike /></button>
                    
                </div>
            </div>
            
            
            <div className='card-body'>
                <div className=''>
                <span className='fs-5 p-1 p-md-2'>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStar style={{ color: "#9C5412" }}/>
                    <FaStarHalfAlt style={{ color: "#9C5412" }}/>
                  </span>
                </div>
              
              <p className='p-1 p-md-2'><span className='fs-3 p-2' style={{ color: "#9C5412" }}><ImQuotesLeft/> </span>{review.body}</p>
              
            </div>
            
          </div>
        ))}
      </Carousel>
        
    </>
  )
}

export default ReviewCards