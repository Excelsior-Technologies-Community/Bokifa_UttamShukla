import React from 'react'
import 'remixicon/fonts/remixicon.css'


const Header = () => {
    return (
        <>
            <div className='font-lora'>
                <div className='bg-green-950 text-white text-center py-2 flex justify-center items-center gap-10'>
                    <i className="ri-arrow-left-fill"></i>
                    <h5 className='tetx-lg'>All books at least 50% off list prices every day</h5>
                    <i className="ri-arrow-right-fill"></i>
                </div>
                <div className='px-5 py-8'>
                    <div className='flex justify-between items-center border-b-2 pb-8'>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo.png?v=1729482566" className='object-cover object-center' alt="" />
                        <div className="w-1/2 border-2 rounded-full flex items-center ps-3 ">
                            <input
                                className="border-0 focus:outline-none flex-1"
                                type="text"
                                placeholder="Search our store"
                            />
                            <button className="ml-2 px-4 py-3 bg-green-900 text-white rounded-full">
                                <i className="ri-search-line"></i> Subscribe
                            </button>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='border-e-2 pe-2 text-lg'>USD $</p>
                            <p className='text-lg'>English</p>
                            <div className='text-2xl flex gap-2'>
                                <i className="ri-user-line"></i>
                                <i className="ri-poker-hearts-line"></i>
                                <i className="ri-shopping-bag-line"></i>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between items-center pt-4">
                        <ul className="flex gap-4 items-center font-semibold text-lg">
                            <li>
                                <div className="dropdown">
                                    <button
                                        className="btn dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Home
                                    </button>

                                    <div className="dropdown-menu hidden p-4 absolute w-screen text-center gap-4">
                                        <div className="flex flex-nowrap gap-4">
                                            <div className="w-1/4 shrink-0">
                                                <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                <h2 className="text-sm font-semibold mt-2">Home 1</h2>
                                            </div>

                                            <div className="w-1/4 shrink-0">
                                                <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                <h2 className="text-sm font-semibold mt-2">Home 2</h2>
                                            </div>

                                            <div className="w-1/4 shrink-0">
                                                <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                <h2 className="text-sm font-semibold mt-2">Home 3</h2>
                                            </div>

                                            <div className="w-1/4 shrink-0">
                                                <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                <h2 className="text-sm font-semibold mt-2">Home 4</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className="dropdown">
                                    <a
                                        className="btn  dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Shop
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <a
                                        className="btn  dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Blog
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Blog 1</a></li>
                                        <li><a className="dropdown-item" href="#">Blog 2</a></li>
                                        <li><a className="dropdown-item" href="#">Blog 3</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <a
                                        className="btn  dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">About us</a></li>
                                        <li><a className="dropdown-item" href="#">Contact us</a></li>
                                        <li><a className="dropdown-item" href="#">Our Team</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>Contact</li>
                        </ul>
                        <p>Need help? Call Us: +84 2500 888 33</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Header