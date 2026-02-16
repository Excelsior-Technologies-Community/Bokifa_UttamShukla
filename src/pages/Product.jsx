import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '../components/Footer';



const Product = ({ product }) => {
    

    const [format, setformat] = useState("Hardcover")
    const [quantity, setquantity] = useState(1)
    const increase = () => setquantity(prev => prev + 1)
    const decrease = () => setquantity(prev => prev > 1 ? prev - 1 : prev)
    const [focus, setfocus] = useState("Dec")

    return (
        <>
            <div className="font-lora">
                {/* <Header /> */}
                <div className='flex flex-col md:flex-row gap-2'>
                    <div className='w-full md:w-1/2 p-2 sm:p-10'>
                        <img className='object-cover object-center h-auto w-full' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_26.jpg?v=1728615762&width=800" alt="" />
                        <div className='flex items-center gap-4 mt-2 px-4'>
                            <div className='border-2 border-gray-400 p-1'>
                                <img className='h-24' src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=300" alt="" />
                            </div>
                            <div className='border-2 border-gray-400 p-1'>
                                <img className='h-24' src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=300" alt="" />
                            </div>
                            <div className='border-2 border-gray-400 p-1'>
                                <img className='h-24' src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=300" alt="" />
                            </div>
                            <div className='border-2 border-gray-400 p-1'>
                                <img className='h-24' src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=300" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 py-10 px-4'>
                        <h1 className='sm:text-3xl md:text-5xl font-light'>{product.title}</h1>
                        <div className='text-gray-400'>
                            <i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>(0 reviews)
                        </div>
                        <div className='flex items-center border-b-2 pb-4'>
                            <h6 className='text-sm'>SKU:</h6>
                            <h6 className='text-green-500'><i class="ri-check-line"></i>In Stock</h6>
                        </div>
                        <div className='flex items-center '>
                            <h1 className='text-green-700 sm:text-3xl md:text-4xl mt-3'>$29.95</h1>
                            <div className='disapper'>
                                {format === "Paperback" &&
                                    <div className='flex '>
                                        <h6 className='line-through text-gray-500 text-lg'>$35.55</h6>
                                        <div className='bg-red-700 text-white text-xl py-1 ml-2'>Save $5.60</div>
                                    </div>
                                }

                                {format === "E-book" &&
                                    <div className='flex '>
                                        <h6 className='line-through text-gray-500 text-lg'>$34.55</h6>
                                        <div className='bg-red-700 text-white text-xl py-1 ml-2'>Save $4.60</div>
                                    </div>
                                }

                                {format === "Audio Cd" &&
                                    <div className='flex '>
                                        <h6 className='line-through text-gray-500 text-lg'>$32.55</h6>
                                        <div className='bg-red-700 text-white text-xl py-1 ml-2'>Save $2.60</div>
                                    </div>
                                }
                            </div>

                        </div>

                        <p className='py-3 border-b-2 text-gray-500'>From the author of The Longest Ride and The Return comes a novel about the enduring legacy of first love, and the decisions that haunt us forever. 1996 was the year that changed everything for Maggie Dawes. Sent away at sixteen to live with an aunt she barely knew in</p>
                        <h5 className='text-gray-500'>Format: {format}</h5>
                        <div className='border-b-2 pb-4'>
                            <button className='border-2 border-gray-400 p-2 mr-2' onClick={() => setformat("Hardcover")}>
                                Hardcover
                            </button>
                            <button className='border-2 border-gray-400 p-2 mr-2' onClick={() => setformat("Paperback")}>
                                Paperback
                            </button>
                            <button className='border-2 border-gray-400 p-2 mr-2' onClick={() => setformat("E-book")}>
                                E-book
                            </button>
                            <button className='border-2 border-gray-400 p-2 mr-2' onClick={() => setformat("Audio Cd")}>
                                Audio Cd
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5 items-center">
                            <div className="flex items-center p-2 space-x-4 bg-gray-200 hover:bg-gray-300">
                                <button onClick={decrease} className="px-3 py-1">
                                    -
                                </button>
                                <span className="text-xl font-semibold">{quantity}</span>
                                <button onClick={increase} className="px-3 py-1">
                                    +
                                </button>
                            </div>

                            <button onClick={() => addToCart(product)} className="bg-green-600 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded-full shadow-md transition duration-200">
                                Add To Cart
                            </button>

                            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded-full shadow-md transition duration-200">
                                Buy It Now
                            </button>
                        </div>

                        <div className='flex justify-center py-4 border-b-2'>
                            <h6 className='font-extralight text-gray-600'> <i class="ri-heart-line"></i> Add to wishlist</h6>
                            <h6 className='font-extralight text-gray-600'> <i class="ri-repeat-2-line"></i> Add to compare</h6>
                        </div>
                        <div className='py-4'>
                            <div className='flex gap-2 items-center text-gray-600'>
                                <i class="ri-calendar-check-fill"></i>
                                <h6>2 years warranty</h6>
                            </div>
                            <div className='flex gap-2 items-center text-gray-600'>
                                <i class="ri-truck-line"></i>
                                <h6>Delivery time: 1-2 business days</h6>
                            </div>
                            <div className='flex gap-2 items-center text-gray-600'>
                                <i class="ri-reset-left-fill"></i>
                                <h6>Free 90 days return</h6>
                            </div>
                        </div>
                        <div className='flex flex-col items-center bg-[#f6f6f6] p-4'>
                            <h6>Payment Options</h6>
                            <img src="//ap-bokifa.myshopify.com/cdn/shop/files/img.png?v=1729845696&width=350" alt="" />
                        </div>
                        <div>
                            <h6>Categories : Books, Books New, Fiction, Horror, Kids Books, Non Fiction</h6>
                            <h6 className='text-gray-600'>Tags : Ebook</h6>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-3xl">
                            <a
                                href="#"
                                className="bg-blue-800 text-white rounded-full px-3 py-2 flex items-center justify-center"
                            >
                                <i className="ri-facebook-fill text-xl"></i>
                            </a>

                            <a
                                href="#"
                                className="bg-blue-400 text-white rounded-full px-3 py-2 flex items-center justify-center"
                            >
                                <i className="ri-twitter-fill text-xl"></i>
                            </a>

                            <a
                                href="#"
                                className="bg-red-600 text-white rounded-full px-3 py-2 flex items-center justify-center"
                            >
                                <i className="ri-pinterest-fill text-xl"></i>
                            </a>

                            <a
                                href="#"
                                className="bg-blue-700 text-white rounded-full px-3 py-2 flex items-center justify-center"
                            >
                                <i className="ri-linkedin-fill text-xl"></i>
                            </a>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 px-5 gap-4 justify-center py-5 border-b-2">
                        <button
                            className="focus:bg-green-800 focus:text-white px-4 py-2 rounded-md"
                            onClick={() => setfocus("Dec")}
                        >
                            Description
                        </button>

                        <button
                            className="focus:bg-green-800 focus:text-white px-4 py-2 rounded-md"
                            onClick={() => setfocus("Add Info")}
                        >
                            Additional information
                        </button>

                        <button
                            className="focus:bg-green-800 focus:text-white px-4 py-2 rounded-md"
                            onClick={() => setfocus("Reviews")}
                        >
                            Reviews
                        </button>
                    </div>

                    <div className='px-5'>
                        {focus === "Dec" && <div className=''>
                            <p className='text-gray-500 pt-10 pb-2 '>
                                From the author of The Longest Ride and The Return comes a novel about the enduring legacy of first love, and the decisions that haunt us forever. 1996 was the year that changed everything for Maggie Dawes. Sent away at sixteen to live with an aunt she barely knew in Ocracoke, a remote village on North Carolina's Outer Banks, she could think only of the friends and family she left behind . . . until she met Bryce Trickett, one of the few teenagers on the island.
                            </p>
                            <p className='text-gray-500 pb-10 '>
                                Handsome, genuine, and newly admitted to West Point, Bryce showed her how much there was to love about the wind-swept beach town--and introduced her to photography, a passion that would define the rest of her life. A collection of 10 well-researched board books to introduce a wide range of learning topics and everyday objects to the little scholars. The topics included in the set are - ABC, Numbers, Shapes, Colours, Wild Animals, Farm Animals and Pets, Birds, Fruits, Vegetables and Transport.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-3xl">
                                <div className="flex gap-2 items-center text-gray-600">
                                    <i className="ri-truck-line"></i>
                                    <h6>Shipping & Returns</h6>
                                </div>

                                <div className="flex gap-2 items-center text-gray-600">
                                    <i className="ri-award-line"></i>
                                    <h6>Warranty</h6>
                                </div>

                                <div className="flex gap-2 items-center text-gray-600">
                                    <i className="ri-bank-card-line"></i>
                                    <h6>Secure Payment</h6>
                                </div>
                            </div>

                        </div>}
                        {focus === "Add Info" && <div className='sm:w-1/3'>
                            <p className='text-gray-500 pt-10 pb-2'>
                                By changing our most important processes and
                                products, we have already made a big leap forward. This ranges from the
                                increased use of more sustainable fibers to the use of more
                                environmentally friendly printing processes to the development of
                                efficient waste management in our value chain.</p>

                            <a href="#" className='text-black'>
                                <h4>Learn more about sustainability</h4>
                            </a>

                        </div>}
                        {focus === "Reviews" && <div className='flex flex-col items-center py-5'>
                            <h6>Customer Reviews</h6>
                            <div className='flex items-center gap-4'>
                                <div className='text-green-800'>
                                    <i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i>
                                    <h6 className='text-black'>Be the first to write a review</h6>
                                </div>
                                <button className='mt-4 bg-green-800 text-white px-4 py-2'>Write a Review</button>
                            </div>

                        </div>}

                    </div>

                </div>
                <div className='h-auto py-10 text-center'>
                    <h1 className='py-10 text-4xl'>Related Products</h1>
                    <div className='px-2'>
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
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_27.jpg?v=1728615792&width=520" alt="" />
                                    <h6 className='text-lg'>The Brief Wondrous Life of Oscar Wao</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$319.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=800" alt="" />
                                    <h6 className='text-lg'>A Prayer for Owen Meany</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_25.jpg?v=1728615733&width=520" alt="" />
                                    <h6 className='text-lg'>The World According to Garp</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_17.jpg?v=1728615478&width=520" alt="" />
                                    <h6 className='text-lg'>Memoirs of a Geisha</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$289.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_4.jpg?v=1728615048&width=520" alt="" />
                                    <h6 className='text-lg'>One Hundred Years of Solitude</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$299.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615231&width=520" alt="" />
                                    <h6 className='text-lg'>The Brief Wondrous Life of Oscar Wao</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$319.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_19.jpg?v=1728615539&width=520" alt="" />
                                    <h6 className='text-lg'>A Prayer for Owen Meany</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_28.jpg?v=1728615853&width=520" alt="" />
                                    <h6 className='text-lg'>The World According to Garp</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&width=520" alt="" />
                                    <h6 className='text-lg'>Memoirs of a Geisha</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$289.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&width=520" alt="" />
                                    <h6 className='text-lg'>One Hundred Years of Solitude</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$299.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className='h-auto py-10 text-center'>
                    <h1 className=' py-10 text-4xl'>You may also like</h1>
                    <div className='px-2'>
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
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615231&width=520" alt="" />
                                    <h6 className='text-lg'>The Brief Wondrous Life of Oscar Wao</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$319.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_19.jpg?v=1728615539&width=520" alt="" />
                                    <h6 className='text-lg'>A Prayer for Owen Meany</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_28.jpg?v=1728615853&width=520" alt="" />
                                    <h6 className='text-lg'>The World According to Garp</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&width=520" alt="" />
                                    <h6 className='text-lg'>Memoirs of a Geisha</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$289.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&width=520" alt="" />
                                    <h6 className='text-lg'>One Hundred Years of Solitude</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$299.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615231&width=520" alt="" />
                                    <h6 className='text-lg'>The Brief Wondrous Life of Oscar Wao</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$319.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_19.jpg?v=1728615539&width=520" alt="" />
                                    <h6 className='text-lg'>A Prayer for Owen Meany</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_28.jpg?v=1728615853&width=520" alt="" />
                                    <h6 className='text-lg'>The World According to Garp</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$29.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&width=520" alt="" />
                                    <h6 className='text-lg'>Memoirs of a Geisha</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$289.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='h-auto group hover:shadow-2xl p-4'>
                                    <img className='object-cover object-center' src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&width=520" alt="" />
                                    <h6 className='text-lg'>One Hundred Years of Solitude</h6>
                                    <a href="#" className='text-black'>Ap Bokifa</a>
                                    <h5 className='text-green-800'>$299.95</h5>
                                    <button className='bg-green-800 sm:hidden group-hover:inline-block text-white px-16 py-2 rounded-full'>Add to Cart</button>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                {/* <Footer /> */}

            </div>
        </>
    )
}

export default Product