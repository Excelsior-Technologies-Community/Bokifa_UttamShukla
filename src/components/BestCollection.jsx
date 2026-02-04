import React from 'react'

const BestCollection = () => {
  return (
    <>
        <div className="flex items-center font-lora px-5 mx-2 rounded-2xl h-[60vh] bg-cover bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/bo_banner.jpg?v=1729586314&width=1530')]">
                <div className='flex flex-col gap-2'>
                    <h5 className='text-yellow-500 font-semibold'>Best Collection.</h5>
                    <h1 className='text-5xl text-white font-semibold capitalize'>Top favourite <br />
                        thriller stories</h1>
                    <p className='text-lg text-white'>Find our take on the best books of all time.</p>
                    <button className='px-4 py-3 bg-white rounded-full ' >Discover Now</button>
                </div>
            </div>
    </>
  )
}

export default BestCollection