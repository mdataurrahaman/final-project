import React, {Fragment} from 'react'
import Link from 'next/link'

function ProductCatagory() {
    return (
        <Fragment>
            <div
                className='w-[1140px] mx-auto flex justify-between pt-10 border-b border-inherit pb-2'>
                <div>
                    <h3 className=' text-4xl text-red-600'>#products</h3>
                </div>

                <div className=' text-xl'>
                    <Link href="#" className='mx-6'>
                        All
                    </Link>

                    <Link href="#" className='mx-6'>
                        New
                    </Link>
                    <Link href="#" className='mx-6'>
                        Bestsellers
                    </Link>
                    <Link href="#" className='ml-6'>
                        Items Sale
                    </Link>

                </div>
            </div>
        </Fragment>
    )
}

export default ProductCatagory