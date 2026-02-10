import React from 'react'
import Header from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Footer from '../components/Footer';
const Aboutus = () => {
    return (
        <>
            <div className='font-lora'>
                <Header />
                <div className="text-white bg-cover h-[50vh] flex items-center justify-center bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/Mask_group_13_1.jpg?v=1729915599&width=2000')]">
                    <h1 className="text-6xl">About Us</h1>
                </div>
                <div className='text-center py-12 bg-[#f9f4ec]'>
                    <h5 className='py-2'>who we are</h5>
                    <h1>We are world’s largest and most <br />
                        recommended online bookstore offering <br />
                        <span className='text-green-800'>40+ million
                        </span> selections.
                    </h1>
                </div>
                <div className='flex gap-4 p-4'>
                    <div className='h-1/2 w-1/2 relative'>
                        <img className='w-full object-cover' src="https://cdn.shopify.com/s/files/1/0906/6014/3387/files/Mask_group_7_1.png?v=1729850718" alt="" />
                        <div className='text-black bg-white w-2/3 z-20 absolute bottom-0 right-0 p-5 rounded-tl-2xl'>
                            <h1>Our Mission</h1>
                            <p>Our mission is simple: To help local, independent bookstores thrive in the age of ecommerce.</p>
                        </div>
                        {/* <div className=''>
                            <div>
                                <h3>Retail stores</h3>
                                <p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                            </div>
                            <div>
                                <h3>Retail stores</h3>
                                <p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.</p>
                            </div>
                        </div> */}
                    </div>
                    <div className='h-auto w-1/2'>
                        <img className='w-full h-full object-cover' src="https://ap-bokifa.myshopify.com/cdn/shop/files/Mask_group_6_1.png?v=1729850527&width=720" alt="" />
                    </div>
                </div>
                <div className='py-5'>
                    <h1 className='text-center text-4xl '>Our Story</h1>
                    <p className='text-center'>Since 1983, we've raised more than $33 million for independent <br />
                        bookstores.
                    </p>
                    <div>

                        <Swiper
                            slidesPerView={3.5}
                            spaceBetween={20}

                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_3_1.png?v=1729911271&width=350" alt="" />
                                    <h3 className='text-4xl translate-x-8 -translate-y-16 text-white'>1983</h3>
                                </div>
                            </SwiperSlide>
                        </Swiper>



                    </div>
                </div>
                <div className='h-auto py-5 font-lora w-full bg-[#f9f5f0]'>
                    <h1 className='text-center font-semibold text-5xl py-10 px-5'>What client says</h1>

                    <Swiper
                        slidesPerView={4.5}
                        spaceBetween={20}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-auto bg-white w-full py-5 px-10 rounded-2xl'>
                                <div className='py-4 border-b-2'>
                                    <h6 className='font-semibold '>Viorel M</h6>
                                    <div className='flex justify-between'>
                                        <div className='text-green-700'>
                                            <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                        </div>
                                        <div>
                                            <h4 className='text-gray-400'>Dec 1, 2024</h4>
                                        </div>
                                    </div>
                                </div>
                                <h4 className='font-semibold py-8'>Quick and easy</h4>
                                <p className='text-gray-500 '>Costs are low, there's always promotions or discounts, the website is easy to navigate, and knowing that the impact of purchasing makes me feel like I'm doing something good.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>



                </div>
                <div className='flex justify-between items-center p-5'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_2.png?v=1729851560&width=80" alt="" />
                        <h1 className='font-extralight text-green-800 text-5xl'>15,254</h1>
                        <h5>total books</h5>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_2.png?v=1729851560&width=80" alt="" />
                        <h1 className='font-extralight text-green-800 text-5xl'>15,254</h1>
                        <h5>total books</h5>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_2.png?v=1729851560&width=80" alt="" />
                        <h1 className='font-extralight text-green-800 text-5xl'>15,254</h1>
                        <h5>total books</h5>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_2.png?v=1729851560&width=80" alt="" />
                        <h1 className='font-extralight text-green-800 text-5xl'>15,254</h1>
                        <h5>total books</h5>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Aboutus