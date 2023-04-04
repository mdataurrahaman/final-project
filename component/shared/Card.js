import React from 'react'
import Image from 'next/image'

export default function Card(props) {
  return (
    <>
    
    <div className='w-4/12 mb-[70px] '>
    <Image className='absolute -z-50 w-[390px] h-[250px] rounded-xl' src={props.model}/>

        <h6 className='ml-5 pt-24 max-w-[100px] '>
        best collection for {props.title}
        </h6>
        <button className='text-white px-4 py-2 bg-red-400 rounded-xl ml-5 mt-5' type='button' >shop now <i class="fa-solid fa-basket-shopping "></i></button>
        
       
    </div>
    
    </>
  )
}
