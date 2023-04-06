import React from 'react'
import Image from 'next/image'
import picture from '../../public/img/4.jpg'
import { Fragment } from 'react'

function Efect() {
  return (
    <Fragment>
     <div className=' w-1/4 relative'>
     
     <div
        className=' absolute z-10 top-0 left-0 w-full flex-col justify-center'>
 <div>
 <button type='button' className=' bg-red-700 mx-auto '>
     add to cart
     </button>
 </div>
 <div>
 <button type='button' className=' bg-red-700 mx-auto '>
     add to cart
     </button>
 </div>
        </div>
       
       
        <Image src={ picture}  />
               
     </div>
     
      
    </Fragment>
  )
}

export default Efect