import React from 'react'

const WeekHighlight = () => {
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

    return (
        <>
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
        </>
    )
}

export default WeekHighlight