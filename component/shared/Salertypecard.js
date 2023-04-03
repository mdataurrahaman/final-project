import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Salertypecard(props) {
  return (
    <>
    <div className=''>
    <div className=' absolute ml-10 w-[180px] mt-10'>
      <p className=' text-center mx-auto mt-16'>
        {props.best}
      </p>
    <Link href='#' className=' ml-[55px]' >{props.btn}</Link>
       <h5 className=' mt-10'>{props.title}</h5>
        <p>
            {props.item}
        </p>
       </div>
        <Image src={props.women3} className='w-full h-[280px]'  />
     
    </div>
    </>
  )
}

export default Salertypecard