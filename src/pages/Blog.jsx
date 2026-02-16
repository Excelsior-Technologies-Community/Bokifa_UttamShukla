import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Blog = () => {
    const newsArr = [
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_8.jpg?v=1729755150&width=533",
            title: "Behind the Scenes with Author Victoria Aveyard",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_7.jpg?v=1729755134&width=533",
            title: "5 Attractive Bookstore WordPress Themes",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_6.jpg?v=1729755116&width=533",
            title: "Top 10 Books to Make It a Great Yeargh",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_8.jpg?v=1729755150&width=533",
            title: "Behind the Scenes with Author Victoria Aveyard",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },

        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_6.jpg?v=1729755116&width=533",
            title: "Top 10 Books to Make It a Great Yeargh",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_7.jpg?v=1729755134&width=533",
            title: "5 Attractive Bookstore WordPress Themes",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_8.jpg?v=1729755150&width=533",
            title: "Behind the Scenes with Author Victoria Aveyard",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_7.jpg?v=1729755134&width=533",
            title: "5 Attractive Bookstore WordPress Themes",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_6.jpg?v=1729755116&width=533",
            title: "Top 10 Books to Make It a Great Yeargh",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },
        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_8.jpg?v=1729755150&width=533",
            title: "Behind the Scenes with Author Victoria Aveyard",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },

        {
            img: "https://ap-bokifa.myshopify.com/cdn/shop/articles/blog_i_6.jpg?v=1729755116&width=533",
            title: "Top 10 Books to Make It a Great Yeargh",
            date: "Oct 24, 2024",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi..."
        },

    ]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6;
    const totalpages = Math.ceil(newsArr.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = newsArr.slice(startIndex, endIndex)

    return (
        <>
            {/* <Header /> */}
            <div className="font-lora">
                <div className="text-white bg-cover h-[50vh] flex items-center justify-center bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/Mask_group_13_1.jpg?v=1729915599&width=2000')]">
                    <h1 className="text-6xl">News</h1>
                </div>
                <div>
                    <h2 className='text-gray-500 px-5 py-2 font-light text-6xl'>News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-4">
                        {currentItems.map((item, index) => (
                            <div key={index} className="p-5">
                                <div className="h-auto w-auto rounded-lg overflow-hidden">
                                    <img
                                        className="rounded-lg object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
                                        src={item.img}
                                        alt=""
                                    />
                                </div>
                                <div className="rounded-full hidden  sm:px-2 xl:px-4 border-2 sm:inline-block translate-x-5 -translate-y-5 bg-white text-gray-600">
                                    <p className="m-0">
                                        IN <span className="text-green-800">Tips & Tricks</span> {item.date} By Ha Ei
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-lg sm:text-3xl">{item.title}</h1>
                                    <p className="text-gray-600">{item.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="px-4 py-2 border rounded disabled:opacity-50"
                        >
                            Prev
                        </button>

                        <span className="px-4 py-2">
                            Page {currentPage} of {totalpages}
                        </span>

                        <button
                            disabled={currentPage === totalpages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="px-4 py-2 border rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>

                </div>

            </div>
            {/* <Footer /> */}

        </>
    )
}

export default Blog