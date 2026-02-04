import React from 'react'

const ScalableCards = () => {
    return (
        <>
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
        </>
    )
}

export default ScalableCards