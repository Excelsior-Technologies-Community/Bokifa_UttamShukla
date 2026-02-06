import React, { useState } from 'react'

const PaginationGrid = () => {

    const proddata = [
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
        },

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
            title: "The shadow of the wind",
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

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12;
    const totalpages = Math.ceil(proddata.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = proddata.slice(startIndex, endIndex)


    return (
        <>
            <div className='w-[70%]'>


                <div className="grid grid-cols-3 gap-6 ">
                    {currentItems.map((items) => (
                        <div
                            key={items.id}
                            className="group border rounded-xl p-3 text-center overflow-hidden"
                        >
                            {/* Image wrapper */}
                            <div className="w-full h-[62vh] overflow-hidden rounded-lg">
                                <img
                                    src={items.img || "/placeholder.png"}
                                    alt={items.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h4 className="mt-3 text-lg capitalize line-clamp-2">
                                {items.title}
                            </h4>

                            <a href={items.link} className="text-gray-400 border-b text-sm">
                                Ap Bokifa
                            </a>

                            <h3 className="text-green-800 font-bold text-xl mt-2">
                                {items.price}
                            </h3>

                            <button className='text-white bg-green-800 px-24 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out'>Add to cart</button>
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
        </>
    )
}

export default PaginationGrid