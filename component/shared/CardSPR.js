import React from 'react'


function CardSPR(props) {
  return (
    <>
    <div className=' w-[32%] flex border border-inherit p-6'  >
        <div className='mt-3'>
           <span className=' text-4xl p-3 rounded-full bg-red-400'>
           {props.icon}
           </span>
        </div>

        <div className='ml-5'>
            <h4 className=' text-3xl'>
                {props.title}
            </h4>
            <p>
                {props.description}
            </p>
        </div>

    </div>
    </>
  )
}

export default CardSPR