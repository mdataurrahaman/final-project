import React, { Fragment } from 'react'
import TestimonialSlider from './TestimonialSlider'

function Testimonial() {
  return (
    <Fragment>
        <div className='w-[1140px] mx-auto mt-10 pb-20 '>
            <h2 className='text-center text-3xl text-red-400 mb-10'>
            #testimonials
            </h2>
            <TestimonialSlider/>

        </div>
    </Fragment>
  )
}

export default Testimonial