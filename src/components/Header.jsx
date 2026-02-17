    import React, { useContext, useState } from 'react'
    import 'remixicon/fonts/remixicon.css'
    import { CardContext } from '../Context/CardContext.jsx';
    import { Link } from "react-router-dom"




    const Header = () => {

        const { cartItem, increase, decrease, removeFromCart } = useContext(CardContext);



        const [quantity, setquantity] = useState(1)
        const inc = () => setquantity(prev => prev + 1)
        const dec = () => setquantity(prev => prev > 1 ? prev - 1 : prev)

        const [cart, setcart] = useState([]);


        return (
            <>
                <div className='font-lora'>
                    <div className='bg-green-950 text-white text-center py-2 flex justify-center items-center gap-10'>
                        <i className="ri-arrow-left-fill"></i>
                        <h5 className='tetx-lg'>All books at least 50% off list prices every day</h5>
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                    <div className='px-0 sm:!px-5 py-8'>
                        <div className='flex justify-between items-center border-b-2 pb-8'>
                            <div className='flex gap-3 md:hidden'>
                                <button>
                                    <i className="ri-menu-2-line text-2xl "></i>
                                </button>
                                <button>
                                    <i className="ri-search-2-line text-2xl"></i>
                                </button>
                            </div>
                            <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo.png?v=1729482566" className='object-cover object-center' alt="" />
                            <div className="hidden  md:w-1/2 border-2 rounded-full md:flex items-center ps-3">
                                <input
                                    className="border-0 focus:outline-none flex-1 "
                                    type="text"
                                    placeholder="Search our store"
                                />
                                <button className="ml-2 px-4 py-3 bg-green-900 text-white rounded-full">
                                    <i className="ri-search-line"></i> Subscribe
                                </button>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p className='hidden sm:block border-e-2 pe-2 text-lg'>USD $</p>
                                <p className='hidden sm:block text-lg'>English</p>
                                <div className='text-2xl flex gap-2 items-center'>
                                    <i className="ri-user-line"></i>
                                    <i className="ri-poker-hearts-line"></i>
                                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        <i className="ri-shopping-bag-line text-2xl"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="hidden md:flex justify-between items-center pt-4">
                            <ul className="flex gap-4 items-center font-semibold text-lg">

                                <li>
                                    <div className="dropdown">
                                        <button
                                            className="btn dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <Link to="/">Home</Link>
                                        </button>

                                        <div className="dropdown-menu hidden p-4 absolute w-screen text-center gap-4">
                                            <div className="flex flex-nowrap gap-4">
                                                <div className="w-1/4 shrink-0">
                                                    <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                    <h2 className="text-sm font-semibold mt-2">Home 1</h2>
                                                </div>

                                                <div className="w-1/4 shrink-0">
                                                    <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                    <h2 className="text-sm font-semibold mt-2">Home 2</h2>
                                                </div>

                                                <div className="w-1/4 shrink-0">
                                                    <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                    <h2 className="text-sm font-semibold mt-2">Home 3</h2>
                                                </div>

                                                <div className="w-1/4 shrink-0">
                                                    <img src="https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_megahome_1.png?v=1729483836&width=3000" />
                                                    <h2 className="text-sm font-semibold mt-2">Home 4</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li className="nav-item dropdown">

                                    <button
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Shop
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/shop">All Products</Link></li>
                                        <li><Link className="dropdown-item" to="/shop/sale">Sale</Link></li>
                                    </ul>

                                </li>


                                <li className="nav-item dropdown">

                                    <button
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Blog
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/blog">All Blog</Link></li>
                                        <li><Link className="dropdown-item" to="/blog/blog1">Blog1</Link></li>
                                    </ul>

                                </li>
                                <li className="nav-item dropdown">

                                    <button
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Pages
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/aboutus">About us</Link></li>
                                        <li><Link className="dropdown-item" to="/contact">Contact us</Link></li>
                                        <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                                    </ul>

                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="dropdown-item" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <p>Need help? Call Us: +84 2500 888 33</p>
                        </div>

                    </div>




                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                    >
                        {/* HEADER */}
                        <div className="offcanvas-header">
                            <h5 id="offcanvasExampleLabel">Shopping Cart</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>

                        {/* BODY */}
                        <div className="offcanvas-body">
                            {cartItem.length === 0 ? (
                                <p>Your cart is empty</p>
                            ) : (
                                cartItem.map((item) => (
                                    <div key={item.id} className="flex gap-3 py-5 border-b">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-24 w-24 object-cover"
                                        />

                                        <div className="flex-1">
                                            <h5 className="text-gray-700">{item.title}</h5>

                                            <div className="inline-flex items-center gap-3 bg-gray-200 px-2 py-1 mt-2">
                                                <button onClick={() => decrease(item.id)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => increase(item.id)}>+</button>
                                            </div>

                                            <p
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-sm text-red-500 cursor-pointer mt-1"
                                            >
                                                Remove
                                            </p>
                                        </div>

                                        <h6 className="text-green-800 font-semibold">
                                            ${item.price * item.quantity}
                                        </h6>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>



                </div>

            </>
        )
    }

    export default Header