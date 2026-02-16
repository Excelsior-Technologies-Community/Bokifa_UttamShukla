import React from 'react'

const BottomStaticCard = () => {
    return (
        <>
            <div className='font-lora p-5'>
                <h1 className='text-6xl py-5'>Recently viewed products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group border rounded-xl p-3 text-center overflow-hidden">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=800"
                                alt=""
                                className="h-auto w-full object-cover"
                            />
                        </div>
                        <h4 className="mt-3 text-lg capitalize line-clamp-2">
                            A Prayer for Owen Meany
                        </h4>
                        <a href="" className="text-gray-400 border-b text-sm">
                            Ap Bokifa
                        </a>
                        <h3 className="text-green-800 font-bold text-xl mt-2">$29.95</h3>
                        <button className="text-white w-full bg-green-800 px-6 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out">
                            Add to cart
                        </button>
                    </div>

                    <div className=" group border rounded-xl p-3 text-center overflow-hidden">
                        <div className=" overflow-hidden  rounded-lg">
                            <img
                                src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_17.jpg?v=1728615478&width=520"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h4 className="mt-3 text-lg capitalize line-clamp-2">
                            A Prayer for Owen Meany
                        </h4>

                        <a href="" className="text-gray-400 border-b text-sm">
                            Ap Bokifa
                        </a>

                        <h3 className="text-green-800 font-bold text-xl mt-2">
                            $29.95
                        </h3>
                        <button className="text-white w-full bg-green-800 px-6 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out">
                            Add to cart
                        </button>
                    </div>
                    <div className=" group border rounded-xl p-3 text-center overflow-hidden">
                        <div className=" overflow-hidden  rounded-lg">
                            <img
                                src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_4.jpg?v=1728615048&width=520"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h4 className="mt-3 text-lg capitalize line-clamp-2">
                            A Prayer for Owen Meany
                        </h4>

                        <a href="" className="text-gray-400 border-b text-sm">
                            Ap Bokifa
                        </a>

                        <h3 className="text-green-800 font-bold text-xl mt-2">
                            $29.95
                        </h3>

                        <button className="text-white w-full bg-green-800 px-6 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out">
                            Add to cart
                        </button>
                    </div>
                    <div className="group border rounded-xl p-3 text-center overflow-hidden">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src="https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=800"
                                alt=""
                                className="h-auto w-full object-cover"
                            />
                        </div>
                        <h4 className="mt-3 text-lg capitalize line-clamp-2">
                            A Prayer for Owen Meany
                        </h4>
                        <a href="" className="text-gray-400 border-b text-sm">
                            Ap Bokifa
                        </a>
                        <h3 className="text-green-800 font-bold text-xl mt-2">$29.95</h3>
                        <button className="text-white w-full bg-green-800 px-6 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out">
                            Add to cart
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BottomStaticCard