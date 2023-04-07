import React, { Fragment } from 'react'
import Slider from "react-slick";
import TestimonialCard from './shared/TestimonialCard';
function TestimonialSlider() {


    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        autoplaySpeed:500,
    };
  return (
   <Fragment>

   
   <Slider {...settings} >
   <TestimonialCard/>
   <TestimonialCard/>
   <TestimonialCard/>
   <TestimonialCard/>
   <TestimonialCard/>
   
   
   </Slider>


   </Fragment>
  )
}

export default TestimonialSlider