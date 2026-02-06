import React, { useState } from 'react'


const Leftsidebar = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(318);
    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value <= maxPrice)
            setMinPrice(value);
    };
    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value >= minPrice)
            setMaxPrice(value);
    };
    return (
        <>
            <div className='w-[30%] '>
                <h4 className='font-extralight border-b-2 pb-4'>Product categories</h4>
                <div className='text-gray-500'>
                    <p className='m-0'>Books(28)</p>
                    <p className='m-0'>Books News(28)</p>
                    <p className='m-0'>Family(7)</p>
                    <p className='m-0'>Fantasy(7)</p>
                    <p className='m-0'>Fiction(28)</p>
                    <p className='m-0'>Horror(7)</p>
                </div>
                <h4 className='font-extralight border-b-2 py-4'>Filters</h4>
                <div className='border-b-2 pb-4'>
                    <h4 className='font-extralight  py-4 '>Availability</h4>
                    <div className='text-gray-500'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <p className='m-0'>In Stock(27)</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <p className='m-0'>Out Of Stock(2)</p>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 pb-4'>
                    <h4 className='font-extralight  py-4 '>Price</h4>
                    <input type="range" min="0" max="318" value={minPrice} onChange={handleMinChange} />
                    <input type="range" min="0" max="318" value={maxPrice} onChange={handleMaxChange} />

                    <div className='flex gap-5 px-12 text-gray-500'>
                        <div className='border-2 p-2 '>
                            $ {minPrice}
                        </div>
                        <div className='border-2 p-2 '>
                            $ {maxPrice}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-b-2 pb-4'>
                        <h4 className='font-extralight  py-4 '>Format</h4>
                        <div className='text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <p className='m-0'>Audio cd(1)</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <p className='m-0'>Ebook(1)</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <p className='m-0'>Hardcover(9)</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <p className='m-0'>Paperback(1)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-b-2 pb-4'>
                        <h4 className='font-extralight  py-4 '>Brand</h4>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <input type="checkbox" />
                            <p className='m-0'>Ap Bokifa (9)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-b-2 pb-4'>
                        <h4 className='font-extralight  py-4 '>Category</h4>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <input type="checkbox" />
                            <p className='m-0'>E-Books(9)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-b-2 pb-4'>
                        <h4 className='font-extralight  py-4 '>Product Rating Count</h4>
                        <div className='text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <p className='m-0'>1(2)</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <p className='m-0'>4(1)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leftsidebar