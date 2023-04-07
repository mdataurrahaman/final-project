import React, {Fragment} from 'react'
import Image from 'next/image'
import logo1 from '../../public/img/logo.png'
import Card from './Card'
import women from '../../public/img/1.jpg'
import men from '../../public/img/3.jpg'
import kids from '../../public/img/9.jpg'
import Link from 'next/link'

export default function Navbar() {
    return (
        <Fragment>

            <nav
                className="flex items-center justify-between lg:px-8 bg-zinc-50 "
                aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your About</span>
                        <Image className="h-8 w-auto" src={logo1} alt=""/>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link
                        href="#"
                        className="text-sm py-6 font-semibold leading-6 text-gray-900 hover-display">Home
                        <i className="fa-solid fa-angle-down"></i>
                        <ul className='hidden absolute hover-block mt-6 '>
                            <li className='py-1.5 border border-inherit pl-1 pr-14'>
                                <Link href=''>
                                    Home-1
                                </Link>
                            </li>
                            <li className='py-1.5 border border-inherit pl-1 pr-14'>
                                <Link href=''>
                                    Home-2
                                </Link>
                            </li>
                        </ul>
                    </Link>

                    <Link
                        href="#"
                        className="text-sm font-semibold leading-6 py-6 text-gray-900 hover-display ">Shop
                        <i className="fa-solid fa-angle-down"></i>

                        <div
                            className=' hidden hover-block absolute ml-[-515px] lg:container mt-6 border border-inherit'>
                            <div className='flex flex-wrap justify-between ml-2'>
                                <div>

                                    <Link href="#" className='capitalize border-b-2 border-gray-100 pr-36 pb-3'>
                                        Shop page
                                    </Link>
                                    <ul className='mt-6'>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <Link href="#" className='capitalize border-b-2 border-gray-100 pr-36 pb-3'>
                                        product details page
                                    </Link>

                                    <ul className='mt-6'>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <Link href="#" className='capitalize border-b-2 border-gray-100 pr-36 pb-3'>
                                        single product page
                                    </Link>

                                    <ul className='mt-6'>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <Link href="#" className='capitalize border-b-2 border-gray-100 pr-36 pb-3'>
                                        other page
                                    </Link>

                                    <ul className='mt-6'>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <Link href="#" className='capitalize border-b-2 border-gray-100 pr-36 pb-3'>
                                        other page
                                    </Link>

                                    <ul className='mt-6'>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href=''>
                                                shop 3 column
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className=' flex mt-5 ml-2  '>

                                <Card title=" women" model={women}/>
                                <Card title=" men" model={men}/>
                                <Card title="kids" model={kids}/>
                            </div>

                        </div>

                    </Link>

                    <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 py-6 hover-display">Blogs
                        <i className="fa-solid fa-angle-down"></i>

                        <ul className='hidden absolute hover-block mt-6 '>
                            <li className='py-1.5 border border-inherit pl-1 pr-14'>
                                <Link href=''>
                                    blog-1
                                </Link>
                            </li>
                            <li className='py-1.5 border border-inherit pl-1 pr-14'>
                                <Link href=''>
                                    blog-2
                                </Link>
                            </li>
                            <li className='py-1.5 border border-inherit pl-1 pr-14'>
                                <Link href=''>
                                    blog-3
                                </Link>
                            </li>
                            <li className='py-1.5 border border-inherit pl-1 pr-14'>
                                <Link href=''>
                                    blog-4
                                </Link>
                            </li>
                        </ul>
                    </Link>

                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 py-6">About</Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 py-6">Contact us</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">sign in
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 ml-7 ">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 ml-7">
                        <i className="fa-regular fa-heart"></i>
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 ml-7 border-2 border-black">
                        <i className="fa-solid fa-u mx-2"></i>
                    </Link>
                </div>
            </nav>

        </Fragment>
    )
}
