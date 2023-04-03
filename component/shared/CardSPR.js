import React from 'react'
import Image from 'next/image'

function CardSPR(props) {
  return (
    <>
    <div className=' w-[30%] flex' >
        <div>
            <Image src={props.icon}/>
        </div>

        <div>
            <h4>
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