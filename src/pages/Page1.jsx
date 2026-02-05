import React, { useRef, useState } from 'react'
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
const Page1 = () => {

    const imagesData = [
        {
            id: 1,
            title: "Fantasy",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80"
        },
        {
            id: 2,
            title: "Horror",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_7.png?v=1729585074&width=80"
        },
        {
            id: 3,
            title: "Fiction",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_5.png?v=1729585073&width=80"
        },
        {
            id: 4,
            title: "Romance",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_4.png?v=1729585074&width=80"
        },
        {
            id: 5,
            title: "History",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_2.png?v=1729585074&width=80"
        },
        {
            id: 6,
            title: "Biography",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_1.png?v=1729585073&width=80"
        },
        {
            id: 7,
            title: "Kids",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_3.png?v=1729585074&width=80"
        },
        {
            id: 8,
            title: "Family",
            image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_6.png?v=1729585073&width=80"
        }
    ];

    const productsData = [
        {
            id: "9713931944219",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&",
            title: "A Short History of Nearly Everything",
            link: "/products/a-good-morning-america-book-club-pick-2",
            price: "$299.95"
        },
        {
            id: "9713924997403",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&",
            title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
            link: "/products/don-t-forget-the-girl",
            price: "$299.95"
        },
        {
            id: "9713924997404",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&",
            title: "Live in the Times of cholera",
            link: "/products/don-t-forget-the-girl",
            price: "$199.95"
        },
        {
            id: "9713924997405",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&",
            title: "One hundred years of solitude",
            link: "/products/the-longest-ride",
            price: "$249.95"
        },
        {
            id: "9713924997406",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&",
            title: "The Girl With the Dragon tattoo",
            link: "/products/the-return",
            price: "$279.95"
        },
        {
            id: "9713924997407",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&",
            title: "30 Days to Change Yourself",
            link: "/products/30-days-to-change-yourself",
            price: "$149.95"
        },
        {
            id: "9713924997408",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&",
            title: "Be Happy, Not Perfect",
            link: "/products/be-happy-not-perfect",
            price: "$189.95"
        },
        {
            id: "9713924997409",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&",
            title: "Morning America Book Club Pick",
            link: "/products/morning-america-book-club-pick",
            price: "$209.95"
        },
        {
            id: "9713924997410",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615320&",
            title: "The Author’s Legacy",
            link: "/products/the-authors-legacy",
            price: "$259.95"
        },
        {
            id: "9713924997411",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615400&",
            title: "Enduring First Love",
            link: "/products/enduring-first-love",
            price: "$279.95"
        }
    ];

    const productsData2 = [
        {
            id: "9713933517083",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_25.jpg?v=1728615733&",
            title: "The World According to Garp",
            link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
            price: "$29.95"
        },
        {
            id: "9713931714843",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&",
            title: "The Wind-Up Bird Chronicle",
            link: "/products/scattershot-life-music-elton-and-me-2",
            price: "$39.95"
        },
        {
            id: "9713931944219",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&",
            title: "A Short History of Nearly Everything",
            link: "/products/a-good-morning-america-book-club-pick-2",
            price: "$299.95"
        },
        {
            id: "9713924997403",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&",
            title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
            link: "/products/don-t-forget-the-girl",
            price: "$299.95"
        },
        {
            id: "9713924997404",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&",
            title: "Don't Forget the Girl",
            link: "/products/don-t-forget-the-girl",
            price: "$199.95"
        },
        {
            id: "9713924997405",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&",
            title: "The Longest Ride",
            link: "/products/the-longest-ride",
            price: "$249.95"
        },
        {
            id: "9713924997406",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&",
            title: "The Return",
            link: "/products/the-return",
            price: "$279.95"
        },
        {
            id: "9713924997407",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&",
            title: "30 Days to Change Yourself",
            link: "/products/30-days-to-change-yourself",
            price: "$149.95"
        },
        {
            id: "9713924997408",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&",
            title: "Be Happy, Not Perfect",
            link: "/products/be-happy-not-perfect",
            price: "$189.95"
        },
        {
            id: "9713924997409",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&",
            title: "Morning America Book Club Pick",
            link: "/products/morning-america-book-club-pick",
            price: "$209.95"
        }
    ];

    const productsData3 = [
        {
            id: "101",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=800",
            title: "A prayer for owen meany",
            link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
            price: "$29.95"
        },
        {
            id: "102",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_18.jpg?v=1728615507&",
            title: "All the light we cannot see",
            link: "/products/scattershot-life-music-elton-and-me-2",
            price: "$39.95"
        },
        {
            id: "103",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_30.jpg?v=1728615904&",
            title: "Extremely loud and incredibly close",
            link: "/products/a-good-morning-america-book-club-pick-2",
            price: "$299.95"
        },
        {
            id: "104",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&",
            title: "the Elegance of The Hedgehog",
            link: "/products/don-t-forget-the-girl",
            price: "$299.95"
        },
        {
            id: "105",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&",
            title: "The shadow of the wind  ",
            link: "/products/don-t-forget-the-girl",
            price: "$199.95"
        },
        {
            id: "106",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&",
            title: "The Wind up bird",
            link: "/products/the-longest-ride",
            price: "$249.95"
        },
        {
            id: "107",
            img: "",
            title: "The Return",
            link: "/products/the-return",
            price: "$279.95"
        },

    ];

    const Gridproducts = [
        {
            id: "1011",
            title: "The Seven Husbands Of Evelyn Hugo",
            price: "269.95",
            link: "",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&"
        },
        {
            id: "1012",
            title: "Memoirs of a Geisha",
            price: "289.95",
            link: "",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_17.jpg?v=1728615478&width"
        },
        {
            id: "1013",
            title: "Scattershot: Life, Music, Elton, and Me",
            price: "309.95",
            link: "",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_2.jpg?v=1728614778&"
        },
        {
            id: "1014",
            title: "The Catcher in the Rye",
            price: "29.95",
            link: "",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&"
        },
        {
            id: "1015",
            title: "The City and Its Uncertain Walls: A Novel",
            price: "339.95",
            link: "",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_29.jpg?v=1728615878&"
        },
        {
            id: "1016",
            title: "The House of the Spirits",
            price: "29.95",
            link: "",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_21.jpg?v=1728615595&"
        }
    ];

    const FeaturedAuthData = [
        {
            id: "201",
            title: "Camelia Doe",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_302.png?v=1729737036&width=120",
        },
        {
            id: "202",
            title: "Joe Knight",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_289.png?v=1729737036&width=120",
        },
        {
            id: "203",
            title: "Summer Chandler",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_291.png?v=1729737036&width=120",
        },
        {
            id: "204",
            title: "Dennis Daniels",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_292.png?v=1729737036&width=120",
        },
        {
            id: "205",
            title: "Aubrie Butler",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_293.png?v=1729737036&width=120",
        },
        {
            id: "206",
            title: "Matias Casey",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_282.png?v=1729737036&width=120",
        },
        {
            id: "207",
            title: "Melany Rodriguez",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_288.png?v=1729737036&width=120",
        },
        {
            id: "208",
            title: "Sophia Bennett",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_302.png?v=1729737036&width=120",
        },
        {
            id: "209",
            title: "Ethan Morales",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_302.png?v=1729737036&width=120",
        },
    ];









    return (
        <>
            <Header />
            <Hero />

            <div className='font-lora h-[80vh]  my-5 p-5 '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-light'>This week's highlights</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                </div>
                <div className='p-5 flex  justify-center items-center gap-10 '>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={20}


                        className="mySwiper"
                    >
                        {productsData.map((items) => {
                            return (
                                <SwiperSlide>
                                    <div className='h-auto w-auto text-center group hover:border-2 p-2 rounded-xl' key={items.id}>
                                        <img className='object-cover object-center'
                                            src={items.img} alt="" />
                                        <h4 className='text-lg capitalize'>{items.title}</h4>
                                        <a href={items.link} className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                        <h3 className='text-green-800 font-bold text-xl'>{items.price}</h3>
                                        <button className='text-white bg-green-800 px-14 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out'>Add to cart</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>


                </div>
            </div>

            <div className='font-lora h-[60vh] w-full bg-[#f9f5f0] my-5 p-5 '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-light'>Top categories</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full'>browse all</button>
                </div>
                <div className='p-5 flex  justify-center items-center gap-10 '>
                    {
                        imagesData.map((items) => {
                            return (
                                <div key={items.id} className="border-2 py-10 px-4 inline-block text-center">
                                    <img
                                        className="w-[70px] mb-5"
                                        src={items.image}
                                        alt={items.title}
                                    />
                                    <h4>{items.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='font-lora h-auto my-5 p-5 '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-light'>Current bestselling books</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                </div>
                <div className='p-5 flex  justify-center items-center gap-10 '>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={20}


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
                                        <button className='text-white bg-green-800 px-14 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out'>Add to cart</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>


                </div>
            </div>
            <BestCollection />
            <div className='font-lora h-[80vh] my-5 p-5 '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-light'>Half price books</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                </div>
                <div className='p-5 flex  justify-center items-center gap-10 '>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={20}


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
                                        <button className='text-white bg-green-800 px-14 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out'>Add to cart</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>


                </div>
            </div>
            <ScalableCards />
            <div className='font-lora py-10'>
                <div className='flex justify-between items-center px-10'>
                    <h1 className='text-5xl font-light'>Picks for you</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                </div>

                <div className=' h-[80vh] flex p-14'>
                    <div className='flex justify-between w-1/2 gap-5 '>
                        <div className=' h-[60vh] w-[75vw] '>
                            <img className='object-cover rounded-2xl' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_16.jpg?v=1728615440&" alt="" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <div className='flex'>
                                    <i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><h6>(0)</h6>
                                </div>
                                <h3 className='text-xl'>The Seven Husbands Of Evelyn Hugo</h3>
                                <a href="" className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                <p>From the author of The Longest Ride and The Return comes a novel about the enduring legacy of first love, and the decisions that haunt.</p>
                                <h3 className='text-green-800 font-bold text-xl'>$29.95</h3>
                            </div>
                            <div>
                                <button className='text-white bg-green-800 px-14 py-2 rounded-full'>+ Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-3 gap-4 w-1/2'>
                        {Gridproducts.map((items) => {
                            return (
                                <div className=" border-b-2 flex gap-3 rounded-b-2xl" key={items.id}>
                                    <div className=' p-5'>
                                        <img className='object-cover h-[120px]  rounded-2xl w-full' src={items.img} alt="" />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <div>
                                            <div className='flex'>
                                                <i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><h6>(0)</h6>
                                            </div>
                                            <h3 className='text-xl'>{items.title}</h3>
                                            <a href={items.link} className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                            <h3 className='text-green-800 font-bold text-xl'>${items.price}</h3>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}



                    </div>
                </div>
            </div>
            <div className='font-lora'>
                <h1 className='text-5xl text-center py-5'>Featured authors</h1>
                <div className='px-10'>
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={5}
                        navigation={true}
                        modules={[Navigation]}

                        className="mySwiper"
                    >
                        {FeaturedAuthData.map((items) => {
                            return (
                                <SwiperSlide>
                                    <div className='h-auto w-auto text-center flex flex-col gap-2 p-5 ' key={items.id}>
                                        <img className='w-[130px] object-cover object-center rounded-full'
                                            src={items.img} alt="" />
                                        <h4 className='text-lg capitalize'>{items.title}</h4>

                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>
            <div className='h-auto py-5 font-lora w-full bg-[#f9f5f0]'>
                <h1 className='font-semibold text-5xl py-10 px-5'>What client says</h1>

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
            <div class="font-lora grid grid-cols-4 grid-rows-1 gap-6 text-center py-10">
                <div class="flex flex-col items-center space-y-2">
                    <i class="ri-truck-line text-4xl "></i>
                    <h2 class="text-lg font-semibold">FAST DELIVERY</h2>
                    <h5 class="text-sm text-gray-500">Free standard delivery</h5>
                </div>

                <div class="flex flex-col items-center space-y-2">
                    <i class="ri-gift-line text-4xl "></i>
                    <h2 class="text-lg font-semibold">BEST PRICES & OFFERS</h2>
                    <h5 class="text-sm text-gray-500">Multiple gift options available</h5>
                </div>

                <div class="flex flex-col items-center space-y-2">
                    <i class="ri-percent-line text-4xl "></i>
                    <h2 class="text-lg font-semibold">GREAT DAILY DEAL</h2>
                    <h5 class="text-sm text-gray-500">Orders $50 or more</h5>
                </div>

                <div class="flex flex-col items-center space-y-2">
                    <i class="ri-shopping-cart-line text-4xl "></i>
                    <h2 class="text-lg font-semibold">CLICK & COLLECT</h2>
                    <h5 class="text-sm text-gray-500">Check your local stores now</h5>
                </div>
            </div>
            <div>
                <div className='font-lora h-auto p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-5xl font-light'>News & events</h1>
                        <button className='capitalize px-7 py-3 bg-white rounded-full border-2'>browse all</button>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_8.jpg?v=1729755150&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Behind the Scenes with Author Victoria Aveyard</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                       <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' 
                                    src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_7.jpg?v=1729755134&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>5 Attractive Bookstore WordPress Themes</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' 
                                    src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_6.jpg?v=1729755116&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Top 10 Books to Make It a Great Yeargh</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' 
                                    src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_5.jpg?v=1729755099&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Author Special: A Q&A with Brené Brown</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' 
                                    src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_4_0d786b92-cfae-487f-b2c0-5d6e4ef47c7c.jpg?v=1729755082&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Should You Feel Embarrassed for Reading Kids Bo...</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' 
                                    src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_2.jpg?v=1729755046&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Activities of the Frankfurt Book Fair Internati...</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-5 '>
                                <div className='h-auto w-auto rounded-lg  overflow-hidden '>
                                    <img className=' rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110' 
                                    src="https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_1.jpg?v=1729754862&width=533" alt="" />
                                </div>
                                <div className=' rounded-full px-2 border-2 inline-block translate-x-8 -translate-y-10 bg-white text-gray-600    '>
                                    <p>IN <span className='text-green-800 '>Tips & Tricks</span> Oct 24, 2024 By Ha Ei</p>
                                </div>
                                <div>
                                    <h1 className='text-3xl'>Top 5 Tarot Decks for the Tarot World Summit</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>



                </div>

            </div>
            <div className='font-lora flex justify-between h-auto p-10'>
                <h3 className='text-5xl'>Stay in the know</h3>
                <p className='w-1/3 text-gray-400 text-lg'>Subscribe to our newsletter and stay updated on latest offers, discounts and events near you.</p>
                <div className="border-2 rounded-full flex items-center px-3">
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
                    <i class="ri-facebook-box-line bg-blue-500 p-3 rounded-full"></i>
                    <i class="ri-twitter-x-line bg-black text-white p-3 rounded-full"></i>
                    <i class="ri-instagram-line bg-purple-500 p-3 rounded-full"></i>
                </div>
            </div>
            <Footer />


        </>
    )
}

export default Page1