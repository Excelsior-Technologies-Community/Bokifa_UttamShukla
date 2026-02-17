import React, { useContext, useState } from 'react'
import { CardContext } from "../Context/CardContext";
import { proddata } from '../pages/ProductData';
import { Link } from 'react-router-dom';

const PaginationGrid = ({ product }) => {


    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12;
    const totalpages = Math.ceil(proddata.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = proddata.slice(startIndex, endIndex)

    const { addToCart } = useContext(CardContext);




    return (
        <>
            <div className='lg:w-[70%]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((items) => (
                        <Link key={items.id} to={`/product/${items.id}`}>   
                            <div
                                
                                className="group hover:border rounded-xl p-3 text-center overflow-hidden"
                            >
                                {/* Image wrapper */}
                                <div className="w-full h-auto overflow-hidden rounded-lg">
                                    <img
                                        src={items.img || "/placeholder.png"}
                                        alt={items.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h4 className="mt-3 text-lg capitalize line-clamp-2">
                                    {items.title}
                                </h4>

                                <Link  to={'/'} className="text-gray-400 border-b text-sm">
                                    Ap Bokifa
                                </Link>

                                <h3 className="text-green-800 font-bold text-xl mt-2">
                                    {items.price}
                                </h3>

                                <button onClick={() => addToCart(items)} className="text-white bg-green-800 px-24 py-2 rounded-full hidden group-hover:block transition duration-300 ease-in-out">
                                    Add to cart
                                </button>
                            </div>
                        </Link>
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