import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className="font-lora flex flex-col xl:flex-row justify-between h-auto p-10">
                    <h3 className='text-5xl'>Stay in the know</h3>
                    <p className='w-full py-2 xl:w-1/3  text-gray-400 text-lg'>Subscribe to our newsletter and stay updated on latest offers, discounts and events near you.</p>
                    <div className="my-2 border-2 rounded-full flex flex-col sm:flex-row items-center px-3">
                        <input
                            className="border-0 focus:outline-none flex-1"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button className="ml-2 px-4 py-1  text-green-600 rounded-full">
                            Subscribe
                        </button>
                    </div>

                    <div className='flex items-center gap-2'>
                        <i className="ri-facebook-box-line bg-blue-500 p-3 rounded-full"></i>
                        <i className="ri-twitter-x-line bg-black text-white p-3 rounded-full"></i>
                        <i className="ri-instagram-line bg-purple-500 p-3 rounded-full"></i>
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start lg:justify-between px-0 sm:!px-5 font-lora ">
                    <div className='w-2/3 lg:w-[35%]'>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&width=144" alt="" />
                        <p className='text-lg text-gray-500 pt-5'>Bokifa draws book lovers of all ages into a community,
                            engage with booklovers and meet their favourite
                            literary personalities.</p>
                        <h1 className='text-3xl text-yellow-300'>+(84) - 1800 - 4635</h1>
                        <h5 className='text-gray-500'>contact@example.com</h5>
                    </div>
                    <div className='flex-col lg:flex-row flex  gap-14'>
                        <div>
                            <h3 className='text-3xl text-gray-500 border-b-2 pb-4' > Category</h3>
                            <ul className='pt-4'>
                                <li>Action Books</li>
                                <li>Comedy</li>
                                <li>Drama</li>
                                <li>Horror</li>
                                <li>Kids Books</li>
                                <li>Top 50 Books</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-3xl text-gray-500 border-b-2 pb-4'> Useful links</h3>
                            <ul className='pt-4'>
                                <li>Secure Shopping</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Shipping Policy</li>
                                <li>Returns Policy</li>
                                <li>Payment Option</li>
                            </ul>

                        </div>
                        <div>
                            <h3 className='text-3xl text-gray-500 border-b-2 pb-4'> Explore</h3>
                            <ul className='pt-4'>
                                <li>About us</li>
                                <li>Store Locator</li>
                                <li>Kids Club</li>
                                <li>Blogs</li>
                            </ul>

                        </div>
                        <div>
                            <h3 className='text-3xl text-gray-500 border-b-2 pb-4'> Get in touch</h3>
                            <ul className='pt-4'>
                                <li>Careers</li>
                                <li>Become a Franchisee</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer