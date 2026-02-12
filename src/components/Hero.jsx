import React from 'react'

const Hero = () => {
    return (
        <>
            <div className=" h-auto flex items-center font-lora px-5 py-28 bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/bo_h1_slide.jpg?v=1728533089&width=3000')]">
                <div className='flex flex-col gap-2'>
                    <h6 className='text-[#5f9f9f] font-semibold'> A Brand New Series</h6>
                    <h1 className=' text-4xl lg:text-7xl  font-semibold'>The World Of <br /> Young Adult<br /> Books</h1>
                    <p className='text-lg'>Save up to 15% on new releases</p>
                    <button className='px-7 py-3 bg-white rounded-full'> Discover Now </button>
                </div>
            </div>
        </>
    )
}

export default Hero