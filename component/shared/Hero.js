import React, {Fragment} from 'react'
import Image from 'next/image'

export default function Hero(props) {
    return (
        <Fragment>
            <div className=' flex justify-center w-[1170px] pt-4 mx-auto '>
                <div className='w-[50%] pl-20 '>
                    <p className=' pt-20 text-3xl '>offer 2021</p>
                    <h2 className=' text-7xl max-w-xs '>
                        sale up to
                        <strong>50% off</strong>
                    </h2>
                    <button
                        className='text-white px-4 py-2 bg-red-400 rounded-xl  mt-10'
                        type='button'>shop now
                        <i className="fa-solid fa-basket-shopping "></i>
                    </button>
                </div>

                <div className='w-[50%]'>
                    <Image src={props.slider} alt='50% off' className=' mx-auto z-30'/>
                    <div
                        className=' w-[250px] h-[150px] flex bg-white rounded justify-between ml-[300px] mt-[-150px] z-50 absolute'>
                        <div className=' mx-auto my-auto  '>
                            <h5>
                                full dress
                            </h5>
                            <span>
                                $21:00
                            </span>
                            <button className='text-red-400 block' type='button'>shop now
                                <i className="fa-solid fa-basket-shopping "></i>
                            </button>

                        </div>
                        <div className=' mx-auto my-auto  '>
                            <Image alt='dress' src={props.dress}/>
                        </div>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}