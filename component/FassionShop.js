import React, { Fragment } from 'react'
import Image from 'next/image'
import fassionEffect from '../public/img/woman.png' 
import deal from '../public/img/deal-bg.jpg'

function FassionShop() {
  return (
    <Fragment>
        <div className='w-[1140px] mx-auto  mt-20  ' >
        <div className='w-[1140px] absolute flex justify-center pt-12'>
            <div className='pt-28'>
                <p className=' text-red-400 text-2xl text-center'>
                #FASHION SHOP
                </p>
                <h3 className='text-5xl text-center pt-5'>
                Deal Of The Day
                </h3>
            </div>

            <div>
                <Image src={fassionEffect} className='ml-20'/>
              
            </div>
           
        </div>

        <Image src={deal} className='' />

        
        </div>
    </Fragment>
  )
}

export default FassionShop