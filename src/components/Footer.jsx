import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex justify-between p-5 font-lora pe-10'>
                <div className='w-[35%]'>
                    <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&width=144" alt="" />
                    <p className='text-lg text-gray-500 pt-5'>Bokifa draws book lovers of all ages into a community,
                        engage with booklovers and meet their favourite
                        literary personalities.</p>
                    <h1 className='text-3xl text-yellow-300'>+(84) - 1800 - 4635</h1>
                    <h5 className='text-gray-500'>contact@example.com</h5>
                </div>
                <div className='flex gap-14'>
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
        </>
    )
}

export default Footer