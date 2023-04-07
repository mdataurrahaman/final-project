import React, { Fragment } from 'react'
import Image from 'next/image'
import daisy from '../../public/img/1.webp'
function TestimonialCard() {
  return (
    <Fragment>
       <div className='text-left m-5 p-8 border border-inherit'>
        <span>
        <i className="fa-solid fa-star"></i>
        </span>
        <span>
        <i className="fa-solid fa-star"></i>
        </span>
      <p>
      Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo
      </p>

      <div className='flex mt-10 '>
        <div>
        <Image src={daisy} alt='daisy morgan' /> 
     
        </div>


        <div>
        <p>
      daisy morgan 
      </p>
      <span>
      hapy customer
      </span>
        </div>
      </div>
       </div>
    </Fragment>
  )
}

export default TestimonialCard