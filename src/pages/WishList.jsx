import React, { useContext } from "react";
import { CardContext } from "../Context/CardContext";
import { Link } from "react-router-dom";

const WishList = () => {
  const { addToCart, wishlist, removeFromWishlist } = useContext(CardContext);


  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Wishlist:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((items) => (
          <div
            key={items.id}
            className="h-auto w-auto text-center group hover:border-2 p-2 rounded-xl"
          >
            <Link to={`/product/${items.id}`}>
              <img
                className="object-cover object-center w-full h-48 rounded-lg"
                src={items.img}
                alt={items.title}
              />

              <h4 className="text-lg capitalize mt-2">{items.title}</h4>

              {/* Avoid nested <a> inside <Link> if you use React Router */}
              <a
                href={items.link}
                className="text-gray-400 border-b-2 text-sm block mt-1"
              >
                Ap Bokifa
              </a>

              <h3 className="text-green-800 font-bold text-xl mt-2">
                {items.price}
              </h3>
            </Link>

            <button
              onClick={() => addToCart(items)}
              className="text-white bg-green-800 w-full px-14 py-2 rounded-full sm:hidden group-hover:block transition duration-300 ease-in-out mt-3"
            >
              Add to cart
            </button>
            <button onClick={() => removeFromWishlist(items.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
