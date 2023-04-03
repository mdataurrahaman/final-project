import React from 'react'
import Salertypecard from './shared/Salertypecard'
import women from '../public/img/1.jpg'
import nomen from '../public/img/3.jpg'
import bestseller from '../public/img/2.jpg'

function Salertype() {
  return (
    <>
    <div className='w-[1140px] mx-auto  flex  justify-between mt-10 pb-4'>
      <div className='w-[400px] '>
      <Salertypecard women3={women} title='women' item='16 item'  />
      </div>
      <div className='w-[300px] bg-neutral-900'>
      <Salertypecard women3={bestseller} best='bestseller' btn='shop Now'  />
      </div>
      <div className='w-[400px]'>
      <Salertypecard women3={nomen} title='women' item='16 item' />
      </div>
    
    
    </div>
    
    </>
  )
}

export default Salertype