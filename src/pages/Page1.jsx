import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'remixicon/fonts/remixicon.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
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
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&width=520",
            title: "A Short History of Nearly Everything",
            link: "/products/a-good-morning-america-book-club-pick-2",
            price: "$299.95"
        },
        {
            id: "9713924997403",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&width=520",
            title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
            link: "/products/don-t-forget-the-girl",
            price: "$299.95"
        },
        {
            id: "9713924997404",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&width=520",
            title: "Live in the Times of cholera",
            link: "/products/don-t-forget-the-girl",
            price: "$199.95"
        },
        {
            id: "9713924997405",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&width=520",
            title: "One hundred years of solitude",
            link: "/products/the-longest-ride",
            price: "$249.95"
        },
        {
            id: "9713924997406",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&width=520",
            title: "The Girl With the Dragon tattoo",
            link: "/products/the-return",
            price: "$279.95"
        },
        {
            id: "9713924997407",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&width=520",
            title: "30 Days to Change Yourself",
            link: "/products/30-days-to-change-yourself",
            price: "$149.95"
        },
        {
            id: "9713924997408",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&width=520",
            title: "Be Happy, Not Perfect",
            link: "/products/be-happy-not-perfect",
            price: "$189.95"
        },
        {
            id: "9713924997409",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&width=520",
            title: "Morning America Book Club Pick",
            link: "/products/morning-america-book-club-pick",
            price: "$209.95"
        },
        {
            id: "9713924997410",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615320&width=520",
            title: "The Author’s Legacy",
            link: "/products/the-authors-legacy",
            price: "$259.95"
        },
        {
            id: "9713924997411",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615400&width=520",
            title: "Enduring First Love",
            link: "/products/enduring-first-love",
            price: "$279.95"
        }
    ];

    const productsData2 = [
        {
            id: "9713933517083",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_25.jpg?v=1728615733&width=520",
            title: "The World According to Garp",
            link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
            price: "$29.95"
        },
        {
            id: "9713931714843",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&width=520",
            title: "The Wind-Up Bird Chronicle",
            link: "/products/scattershot-life-music-elton-and-me-2",
            price: "$39.95"
        },
        {
            id: "9713931944219",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&width=520",
            title: "A Short History of Nearly Everything",
            link: "/products/a-good-morning-america-book-club-pick-2",
            price: "$299.95"
        },
        {
            id: "9713924997403",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&width=520",
            title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
            link: "/products/don-t-forget-the-girl",
            price: "$299.95"
        },
        {
            id: "9713924997404",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&width=520",
            title: "Don't Forget the Girl",
            link: "/products/don-t-forget-the-girl",
            price: "$199.95"
        },
        {
            id: "9713924997405",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&width=520",
            title: "The Longest Ride",
            link: "/products/the-longest-ride",
            price: "$249.95"
        },
        {
            id: "9713924997406",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&width=520",
            title: "The Return",
            link: "/products/the-return",
            price: "$279.95"
        },
        {
            id: "9713924997407",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&width=520",
            title: "30 Days to Change Yourself",
            link: "/products/30-days-to-change-yourself",
            price: "$149.95"
        },
        {
            id: "9713924997408",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&width=520",
            title: "Be Happy, Not Perfect",
            link: "/products/be-happy-not-perfect",
            price: "$189.95"
        },
        {
            id: "9713924997409",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&width=520",
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
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_18.jpg?v=1728615507&width=520",
            title: "All the light we cannot see",
            link: "/products/scattershot-life-music-elton-and-me-2",
            price: "$39.95"
        },
        {
            id: "103",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_30.jpg?v=1728615904&width=520",
            title: "Extremely loud and incredibly close",
            link: "/products/a-good-morning-america-book-club-pick-2",
            price: "$299.95"
        },
        {
            id: "104",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&width=520",
            title: "the Elegance of The Hedgehog",
            link: "/products/don-t-forget-the-girl",
            price: "$299.95"
        },
        {
            id: "105",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&width=520",
            title: "The shadow of the wind  ",
            link: "/products/don-t-forget-the-girl",
            price: "$199.95"
        },
        {
            id: "106",
            img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&width=520",
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
        { id: "101", title: "", price: "", link: "" },
        { id: "102", title: "", price: "", link: "" },
        { id: "103", title: "", price: "", link: "" },
        { id: "104", title: "", price: "", link: "" },
        { id: "105", title: "", price: "", link: "" },
        { id: "106", title: "", price: "", link: "" }
    ];







    return (
        <>
            <div className="flex items-center font-lora px-5 h-[80vh] bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/bo_h1_slide.jpg?v=1728533089&width=3000')]">
                <div className='flex flex-col gap-2'>
                    <h6 className='text-[#5f9f9f] font-semibold'> A Brand New Series</h6>
                    <h1 className='text-7xl  font-semibold'>The World Of <br /> Young Adult<br /> Books</h1>
                    <p className='text-lg'>Save up to 15% on new releases</p>
                    <button className='px-7 py-3 bg-white rounded-full'> Discover Now > </button>
                </div>
            </div>

            <div className='font-lora h-[80vh] my-5 p-5 '>
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

            <div className='font-lora h-[60vh] bg-[#f9f5f0] my-5 p-5 '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-light'>Top categories</h1>
                    <button className='capitalize px-7 py-3 bg-white rounded-full'>browse all</button>
                </div>
                <div className='p-5 flex  justify-center items-center gap-10 '>
                    {
                        imagesData.map((items) => {
                            return (
                                <div key={items.id} className="border-2 py-10 px-5 inline-block text-center">
                                    <img
                                        className="w-[100px] mb-5"
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

            <div className='font-lora h-[80vh] my-5 p-5 '>
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
            <div className="flex items-center font-lora px-5 mx-2 rounded-2xl h-[60vh] bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/bo_banner.jpg?v=1729586314&width=1530')]">
                <div className='flex flex-col gap-2'>
                    <h5 className='text-yellow-500 font-semibold'>Best Collection.</h5>
                    <h1 className='text-5xl text-white font-semibold capitalize'>Top favourite <br />
                        thriller stories</h1>
                    <p className='text-lg text-white'>Find our take on the best books of all time.</p>
                    <button className='px-4 py-3 bg-white rounded-full ' >Discover Now</button>
                </div>
            </div>
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
            <div className='font-lora flex justify-between items-center gap-10 px-4'>
                <div className="h-[280px] w-[500px] rounded-2xl overflow-hidden relative">
                    <div
                        className="z-0 h-full w-full bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/2.jpg?v=1729587818&width=490')] 
                                   transition-transform duration-500 ease-in-out hover:scale-110"
                    ></div>
                    <div className='z-20 absolute top-12 right-8'>
                        <h5 className='text-blue-400'>Game. Anime. Life</h5>
                        <h2 className='text-white text-4xl uppercase font-semibold'>collect <br />
                            Shop</h2>
                        <button className='mt-3 px-7 py-3 bg-white rounded-full'>shop now</button>
                    </div>
                </div>

                <div className="h-[280px] w-[500px] rounded-2xl overflow-hidden relative">
                    <div
                        className="z-0 h-full w-full bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/1.jpg?v=1729587818&width=490')] 
                                   transition-transform duration-500 ease-in-out hover:scale-110"
                    ></div>
                    <div className='z-20 absolute top-12 right-8'>
                        <h5 className='text-yellow-300'>New this week.</h5>
                        <h2 className='text-white text-4xl uppercase font-semibold'>The Truth <br />
                            Lies Here</h2>
                        <button className='mt-3 px-7 py-3 bg-white rounded-full'>shop now</button>
                    </div>
                </div>

                <div className="h-[280px] w-[500px] rounded-2xl overflow-hidden relative">
                    <div
                        className="z-0 h-full w-full bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/3.jpg?v=1729587817&width=490')] 
                                   transition-transform duration-500 ease-in-out hover:scale-110"
                    ></div>
                    <div className='z-20 absolute top-12 right-8'>
                        <h5 className='text-green-400'>Fiction bestsellers.</h5>
                        <h2 className='text-white text-4xl uppercase font-semibold'>Woman in <br />
                            the Water</h2>
                        <button className='mt-3 px-7 py-3 bg-white rounded-full'>shop now</button>
                    </div>
                </div>
            </div>
            <div className='font-lora h-[80vh] flex p-14'>
                <div className='flex justify-between w-1/2 gap-5 '>
                    <div className=' h-[60vh] w-[75vw] '>
                        <img className='object-cover rounded-2xl' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_16.jpg?v=1728615440&width=520" alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <div className='flex'>
                                <i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><h6>(0)</h6>
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

                    <div class="bg-blue-300 flex gap-3 ">
                        <div className='h-[200px] w-[190px] p-5'>
                            <img className='object-cover rounded-2xl' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&width=520" alt="" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <div className='flex'>
                                    <i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><h6>(0)</h6>
                                </div>
                                <h3 className='text-xl'>The Seven Husbands Of Evelyn Hugo</h3>
                                <a href="" className='text-gray-400 border-b-2 text-sm'>Ap Bokifa</a>
                                <h3 className='text-green-800 font-bold text-xl'>$29.95</h3>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Page1