import React from 'react'
import Image from 'next/image'

export default function Hero(props) {
  return (
    <>
    
    <div className=' flex justify-center w-[1170px] pt-4 '>
      <div className='w-[50%] pl-20 '>
        <p className=' pt-20 text-3xl '>offer 2021</p>
        <h2 className=' text-7xl max-w-xs '>
          sale up to <strong>50% off</strong> 
        </h2>
        <button className='text-white px-4 py-2 bg-red-400 rounded-xl  mt-10' type='button' >shop now <i class="fa-solid fa-basket-shopping "></i></button>
      </div>

      <div className='w-[50%]'>
      <Image src={props.slider} alt='50% off' className=' mx-auto '/>
      </div>

    </div>
    
    </>
  )
}

