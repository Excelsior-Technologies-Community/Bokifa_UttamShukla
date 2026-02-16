import React, { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'remixicon/fonts/remixicon.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Hero from '../components/Hero';
import BestCollection from '../components/BestCollection';
import ScalableCards from '../components/ScalableCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CardContext } from "../Context/CardContext";
import { imagesData, productsData, productsData2, productsData3, Gridproducts, FeaturedAuthData } from './ProductData';

const Page1 = ({ product }) => {

    const { addToCart } = useContext(CardContext);

    return (
        <>
            {/* <Header /> */}
            <Hero />

            <div className='font-lora h-auto  my-5 p-5'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <h1 className='text-5xl font-light pb-3'>This week's highlights</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                </div>
                <div className='p-0 sm:p-5 flex  justify-center items-center gap-10 '>
                    <Swiper
                        slidesPerView={1}   // default for very large screens
                        spaceBetween={20}
                        breakpoints={{
                            // when window width is >= 500px
                            500: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 6,
                            },
                        }}
                        className="mySwiper"
                    >
                        {productsData.map((items) => (
                            <SwiperSlide key={items.id}>
                                <div className="h-auto w-auto text-center group hover:border-2 p-2 rounded-xl">
                                    <img
                                        className="object-cover object-center"
                                        src={items.img}
                                        alt=""
                                    />
                                    <h4 className="text-lg capitalize">{items.title}</h4>
                                    <a href={items.link} className="text-gray-400 border-b-2 text-sm">
                                        Ap Bokifa
                                    </a>
                                    <h3 className="text-green-800 font-bold text-xl">{items.price}</h3>
                                    <button onClick={() => addToCart(items)} className="text-white bg-green-800 px-14 py-2 rounded-full sm:hidden group-hover:block transition duration-300 ease-in-out">
                                        Add to cart
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>
            </div>

            <div className="font-lora h-auto w-full bg-[#f9f5f0] my-5 p-5">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h1 className="text-5xl font-light pb-3">Top categories</h1>
                    <button className="capitalize px-7 py-3 bg-white rounded-full">browse all</button>
                </div>

                <div
                    className="
      grid gap-10 p-5
      grid-cols-1 grid-rows-7       /* default: <375px → 2 cols, 7 rows */
      sm:grid-cols-2 sm:grid-rows-4 /* ≥375px → 2 cols, 4 rows */
      md:grid-cols-4 md:grid-rows-2 /* ≥768px → 4 cols, 2 rows */
      lg:grid-cols-8 lg:grid-rows-1 /* ≥1024px → 7 cols, 1 row */
      justify-center items-center
    "
                >
                    {imagesData.map((items) => (
                        <div key={items.id} className="border-2 py-10 px-4 flex flex-col items-center text-center">
                            <img
                                className="w-[70px] mb-5"
                                src={items.image}
                                alt={items.title}
                            />
                            <h4>{items.title}</h4>
                        </div>
                    ))}
                </div>
            </div>


            <div className='font-lora h-auto my-5 p-5 '>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <h1 className='text-5xl font-light pb-3'>Current bestselling books</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2 pb-6'>browse all</button>
                </div>
                <div className=' p-0 sm:p-5 flex  justify-center items-center gap-10 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            // when window width is >= 500px
                            500: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 6,
                            },
                        }}


                        className="mySwiper"
                    >
                        {productsData2.map((items) => {
                            return (
                                <SwiperSlide>
                                    <div className='h-auto w-auto text-center group hover:border-2 p-2 rounded-xl' key={items.id}>
                                        <img className='object-cover object-center'
                                            src={items.img} alt="" />
                                        <h4 className='text-lg capitalize'>{items.title}</h4>
                                        <a href={items.link} className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                        <h3 className='text-green-800 font-bold text-xl'>{items.price}</h3>
                                        <button onClick={() => addToCart(items)} className='text-white bg-green-800 px-14 py-2 rounded-full sm:hidden group-hover:block transition duration-300 ease-in-out'>Add to cart</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>


                </div>
            </div>
            <BestCollection />
            <div className='font-lora h-auto my-5 p-5 '>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <h1 className='text-5xl font-light pb-3'>Half price books</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full pb-3 border-2'>browse all</button>
                </div>
                <div className='p-0 sm:p-5 flex  justify-center items-center gap-10 '>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            // when window width is >= 500px
                            500: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 6,
                            },
                        }}


                        className="mySwiper"
                    >
                        {productsData3.map((items) => {
                            return (
                                <SwiperSlide>
                                    <div className='h-auto w-auto text-center group hover:border-2 p-2 rounded-xl' key={items.id}>
                                        <img className='object-cover object-center'
                                            src={items.img} alt="" />
                                        <h4 className='text-lg capitalize'>{items.title}</h4>
                                        <a href={items.link} className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                        <h3 className='text-green-800 font-bold text-xl'>{items.price}</h3>
                                        <button onClick={() => addToCart(items)} className='text-white bg-green-800 px-14 py-2 rounded-full sm:hidden group-hover:block transition duration-300 ease-in-out'>Add to cart</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>


                </div>
            </div>
            <ScalableCards />
            <div className='h-auto font-lora py-10 mb-48'>
                <div className='flex flex-col sm:flex-row justify-between items-center px-10'>
                    <h1 className='text-5xl font-light'>Picks for you</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                </div>

                <div className=' h-auto flex-col lg:flex-row flex p-0 lg:p-14'>
                    <div className='flex justify-between h-auto w-full lg:w-1/2 gap-3 p-2 sm:p-0 sm:gap-5 '>
                        <div className=' h-auto w-[75vw] '>
                            <img className='object-cover rounded-2xl' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_16.jpg?v=1728615440&" alt="" />
                        </div>
                        <div className='flex flex-col '>
                            <div>
                                <div className='flex'>
                                    <i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><h6>(0)</h6>
                                </div>
                                <h3 className='text-xl'>The Seven Husbands Of Evelyn Hugo</h3>
                                <a href="" className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                <p>From the author of The Longest Ride and The Return comes a novel about the enduring legacy of first love, and the decisions that haunt.</p>
                                <h3 className='text-green-800 font-bold text-xl pb-5'>$29.95</h3>
                            </div>
                            <div>
                                <button onClick={() => addToCart(items)} className='text-white bg-green-800 px-14 py-2 rounded-full'>+ Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-auto gap-4 w-full lg:w-1/2">
                        {Gridproducts.map((items) => {
                            return (
                                <div
                                    className="border-b-2 flex flex-col sm:flex-row gap-3 rounded-b-2xl"
                                    key={items.id}
                                >
                                    <div className="p-5">
                                        <img
                                            className="object-cover h-[200px] w-[300px] sm:h-[120px]  rounded-2xl sm:w-full"
                                            src={items.img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between p-5 sm:p-0">
                                        <div>
                                            <div className="flex">
                                                <i className="ri-star-line"></i>
                                                <i className="ri-star-line"></i>
                                                <i className="ri-star-line"></i>
                                                <i className="ri-star-line"></i>
                                                <i className="ri-star-line"></i>
                                                <h6>(0)</h6>
                                            </div>
                                            <h3 className="text-xl">{items.title}</h3>
                                            <a
                                                href={items.link}
                                                className="text-gray-400 border-b-2 text-sm"
                                            >
                                                Ap Bokifa
                                            </a>
                                            <h3 className="text-green-800 font-bold text-xl">
                                                ${items.price}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            <div className='font-lora h-auto'>
                <h1 className='text-5xl text-center py-5'>Featured authors</h1>
                <div className='px-10'>
                    <Swiper
                        spaceBetween={5}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // for screens < 375px
                            },
                            375: {
                                slidesPerView: 2, // for screens < 768px
                            },
                            768: {
                                slidesPerView: 4, // for screens < 1024px
                            },
                            1024: {
                                slidesPerView: 7, // for screens >= 1024px
                            },
                        }}
                    >
                        {FeaturedAuthData.map((items) => (
                            <SwiperSlide key={items.id}>
                                <div className="h-auto w-auto text-center flex flex-col items-center gap-2 p-5">
                                    <img
                                        className="w-[130px] object-cover object-center rounded-full"
                                        src={items.img}
                                        alt=""
                                    />
                                    <h4 className="text-lg capitalize">{items.title}</h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            <div className='h-auto py-5 font-lora w-full bg-[#f9f5f0]'>
                <h1 className='font-semibold text-5xl py-10 sm:px-5'>What client says</h1>

                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        375: {
                            slidesPerView: 1, // for screens < 768px
                        },
                        768: {
                            slidesPerView: 2, // for screens < 1024px
                        },

                        1024: {
                            slidesPerView: 3.5, // for screens >= 1024px
                        },
                    }}

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
            <div className="font-lora grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-10">
                <div className="flex flex-col items-center space-y-2">
                    <i className="ri-truck-line text-4xl"></i>
                    <h2 className="text-lg font-semibold">FAST DELIVERY</h2>
                    <h5 className="text-sm text-gray-500">Free standard delivery</h5>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <i className="ri-gift-line text-4xl"></i>
                    <h2 className="text-lg font-semibold">BEST PRICES & OFFERS</h2>
                    <h5 className="text-sm text-gray-500">Multiple gift options available</h5>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <i className="ri-percent-line text-4xl"></i>
                    <h2 className="text-lg font-semibold">GREAT DAILY DEAL</h2>
                    <h5 className="text-sm text-gray-500">Orders $50 or more</h5>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <i className="ri-shopping-cart-line text-4xl"></i>
                    <h2 className="text-lg font-semibold">CLICK & COLLECT</h2>
                    <h5 className="text-sm text-gray-500">Check your local stores now</h5>
                </div>
            </div>

            <div>
                <div className='font-lora h-auto p-5'>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <h1 className='text-5xl font-light pb-3'>News & events</h1>
                        <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={
                            {
                                640: {
                                    slidesPerView: 1,
                                },
                                900: {
                                    slidesPerView: 2,
                                },
                                1280: {
                                    slidesPerView: 3,
                                },
                            }
                        }

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='sm:p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_8.jpg?v=1729755150&width=533" alt="" />
                                </div>
                                <div className='hidden  rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>Behind the Scenes with Author Victoria Aveyard</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sm:p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                                        src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_7.jpg?v=1729755134&width=533" alt="" />
                                </div>
                                <div className='hidden rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>5 Attractive Bookstore WordPress Themes</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                                        src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_6.jpg?v=1729755116&width=533" alt="" />
                                </div>
                                <div className='hidden rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>Top 10 Books to Make It a Great Yeargh</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                                        src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_5.jpg?v=1729755099&width=533" alt="" />
                                </div>
                                <div className='hidden rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>Author Special: A Q&A with Brené Brown</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                                        src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_4_0d786b92-cfae-487f-b2c0-5d6e4ef47c7c.jpg?v=1729755082&width=533" alt="" />
                                </div>
                                <div className='hidden rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>Should You Feel Embarrassed for Reading Kids Bo...</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                                        src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_2.jpg?v=1729755046&width=533" alt="" />
                                </div>
                                <div className='hidden rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>Activities of the Frankfurt Book Fair Internati...</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110'
                                        src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_1.jpg?v=1729754862&width=533" alt="" />
                                </div>
                                <div className='hidden rounded-full px-2 border-2 sm:inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-lg sm:text-3xl'>Top 5 Tarot Decks for the Tarot World Summit</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>



                </div>

            </div>

            {/* <Footer /> */}


        </>
    )
}

export default Page1