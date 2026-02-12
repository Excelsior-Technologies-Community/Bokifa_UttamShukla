import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'


const Header = () => {

    const [quantity, setquantity] = useState(1)
    const increase = () => setquantity(prev => prev + 1)
    const decrease = () => setquantity(prev => prev > 1 ? prev - 1 : prev)

    return (
        <>
            <div className='font-lora'>
                <div className='bg-green-950 text-white text-center py-2 flex justify-center items-center gap-10'>
                    <i className="ri-arrow-left-fill"></i>
                    <h5 className='tetx-lg'>All books at least 50% off list prices every day</h5>
                    <i className="ri-arrow-right-fill"></i>
                </div>
                <div className='px-0 sm:!px-5 py-8'>
                    <div className='flex justify-between items-center border-b-2 pb-8'>
                        <div className='flex gap-3 md:hidden'>
                            <button>
                                <i className="ri-menu-2-line text-2xl "></i>
                            </button>
                            <button>
                                <i className="ri-search-2-line text-2xl"></i>
                            </button>
                        </div>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo.png?v=1729482566" className='object-cover object-center' alt="" />
                        <div className="hidden  md:w-1/2 border-2 rounded-full md:flex items-center ps-3">
                            <input
                                className="border-0 focus:outline-none flex-1 "
                                type="text"
                                placeholder="Search our store"
                            />
                            <button className="ml-2 px-4 py-3 bg-green-900 text-white rounded-full">
                                <i className="ri-search-line"></i> Subscribe
                            </button>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='hidden sm:block border-e-2 pe-2 text-lg'>USD $</p>
                            <p className='hidden sm:block text-lg'>English</p>
                            <div className='text-2xl flex gap-2 items-center'>
                                <i className="ri-user-line"></i>
                                <i className="ri-poker-hearts-line"></i>
                                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <i className="ri-shopping-bag-line text-2xl"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:flex justify-between items-center pt-4">
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
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header border-b-2 py-4">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel"><i className="ri-shopping-bag-2-line"></i> 1 item</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className='flex flex-col items-center pt-5'>
                            <div>

                            </div>
                            <p>Spend $640.05 more and get free shipping!</p>
                            <h2 className='h-1 w-[90%] bg-black'></h2>
                            <div className='flex gap-3  py-5 border-b-2'>
                                <img className='object-cover object-center h-36' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_22.jpg?v=1728615626&width=520" alt="" />

                                <div>
                                    <h5 className='text-gray-600'>The Elegance of the Hedgehog - Hardcover</h5>
                                    <div>
                                        <div className=" inline-flex me-2 items-center p-1 space-x-4 bg-gray-200  hover:bg-gray-300 ">
                                            <button onClick={decrease} className="px-1 py-1 " >
                                                -
                                            </button>
                                            <span className="text-xl font-semibold">
                                                {quantity}
                                            </span>
                                            <button onClick={increase} className="px-1 py-1" >
                                                +
                                            </button>
                                        </div>
                                        <a href="#" className='text-gray-600'>remove</a>
                                    </div>
                                </div>
                                <h4 className='text-green-800'>$359.95</h4>
                            </div>
                        </div>
                        <div className='flex gap-4 py-2 items-start text-center '>
                            <div>
                                <i class="ri-git-repository-commits-line"></i><br />
                                Add note
                            </div>
                            <div>
                                <i class="ri-git-repository-commits-line"></i><br />
                                shipping
                            </div>
                        </div>
                        <h6>Subtotal: <span className='text-3xl'>$359.95 USD</span> </h6>
                        <h6>Taxes and shipping calculated at checkout</h6>
                        <div className='flex flex-col gap-2 py-5'>
                            <button className=" bg-green-700 text-white px-4 py-2 rounded-full">Checkout</button>
                            <button className="bg-green-700 text-white px-4 py-2 rounded-full">Cart </button>
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}

export default Header