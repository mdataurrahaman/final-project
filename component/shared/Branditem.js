import React, { Fragment } from 'react'
import Image from 'next/image'
function Branditem(props) {
  return (
   <Fragment>

    <div className=' m-5 p-8 border border-inherit'>
       
  
        <Image src={props.floral} alt={props.replace} className='w-52' /> 
     
        


       
      </div>
    


   </Fragment>
  )
}

export default Branditem