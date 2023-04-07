import React from 'react'
import Image from 'next/image'
import picture from '../../public/img/4.jpg'
import { Fragment } from 'react'
import effectHover from '../../public/img/efect-hover.png'

function Efect() {
  return (
    <Fragment>
     <div className=' w-1/4 relative px-3 '>
     
     <div
        className=' absolute z-10 w-full flex flex-col'>
 <div className='  text-right mr-7'>
  <span className='block'>
  <i className="fa-regular fa-heart  "></i>
  </span>
  <span className='block'>
  <i className="fa-solid fa-magnifying-glass"></i>
  </span>
  <span className='block'>
  <i className="fa-solid fa-rotate inline"></i>
  </span>

 
 </div>
 <div className='mx-auto mt-28'>
 <button type='button' className=' bg-red-500 rounded text-white px-4 py-2 '>
     add to cart
     </button>
 </div>
        </div>
       
       
        <Image src={ picture} className=' ' />
        <Image src={ effectHover} className='hidden '  />
        
        <span>
        <i className="fa-solid fa-star"></i>
        </span>
        <p className='hover:text-red-300 cursor-pointer'>
        Women's Elizabeth Coat
        </p>
       <p  className='hover:text-red-300'>
        $576
       </p>
               
     </div>
     
      
    </Fragment>
  )
}

export default Efect