import React from 'react'

const PropertyCards = (props) => {
  return (
    <>
        <div>
            <img src={props.image} alt="" className='' style={{height: "50rem", width: "50rem"}}/> 
        </div>
        
    </>
    
  )
}

export default PropertyCards





























// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const PropertyCards = (props) => {
//   return (
//     <div>
//       <Carousel
//         additionalTransfrom={0}
//         arrows
//         autoPlay
//         autoPlaySpeed={1000}
//         centerMode={false}
//         className="your-carousel-class"
//         containerClass="your-container-class"
//         dotListClass="your-dot-list-class"
//         draggable
//         focusOnSelect={false}
//         infinite={false}
//         itemClass="your-item-class"
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         renderArrowsWhenDisabled={false}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={false}
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 3000,
//               min: 1024
//             },
//             items: 3,
//             partialVisibilityGutter: 40
//           },
//           mobile: {
//             breakpoint: {
//               max: 464,
//               min: 0
//             },
//             items: 1,
//             partialVisibilityGutter: 30
//           },
//           tablet: {
//             breakpoint: {
//               max: 1024,
//               min: 464
//             },
//             items: 2,
//             partialVisibilityGutter: 30
//           }
//         }}
//         rewind
//         rewindWithAnimation={false}
//         rtl={false}
//         shouldResetAutoplay
//         showDots={false}
//         sliderClass="your-slider-class"
//         slidesToSlide={2}
//         swipeable
//       >
//         <div>
//           <img src={props.image} alt="Property" className='' style={{height: "50rem", width: "50rem"}}/>
//         </div>
//         <div>
//           <img src={props.image} alt="Property" className='' style={{height: "50rem", width: "50rem"}}/>
//         </div>
//         <div>
//           <img src={props.image} alt="Property" className='' style={{height: "50rem", width: "50rem"}}/>
//         </div>
        
//       </Carousel>
//     </div>
//   );
// };

// export default PropertyCards;
