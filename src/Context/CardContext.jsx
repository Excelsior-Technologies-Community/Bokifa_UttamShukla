import React, { createContext, useState } from 'react'
export const CardContext = createContext();
export const CardProvider = ({ children }) => {
    const [cartItem, setcartItem] = useState([])
    const [wishlist, setWishlist] = useState([])

    const addToCart = (product) => {
        setcartItem((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) => {
                    return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item;
                })
            }
            return [
                ...prevItems,
                {
                    ...product,
                    price: Number(parseFloat(product.price.replace("$", "")).toFixed(2)),
                    quantity: 1
                }
            ]

        })
    }

    const addToWishlist = (item) => {
        console.log("wishlist added", item);

        setWishlist(prev => {
            const exists = prev.find(p => p.id === item.id);
            if (exists) return prev;
            return [...prev, item];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist(prev => prev.filter(item => item.id !== id));
    };

    const removeFromCart = (id) => {
        setcartItem((prevItems) => prevItems.filter((item) => item.id !== id));

    }

    const increase = (id) => {
        setcartItem((prevItems) => prevItems.map((item) => {
            return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
        }))
    }

    const decrease = (id) => {
        setcartItem((prevItems) => prevItems.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    }

    return (
        <CardContext.Provider value={{
            cartItem, wishlist, addToCart, removeFromCart, increase, decrease, addToWishlist,
            removeFromWishlist
        }}>
            {children}
        </CardContext.Provider>
    )
}
