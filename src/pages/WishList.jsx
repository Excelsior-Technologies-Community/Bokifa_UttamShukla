import React, { useContext } from "react";
import { CardContext } from "../Context/CardContext";

const WishList = ({ products }) => {
  const { addToCart } = useContext(CardContext);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((items) => (
          <div
            key={items.id}
            className="h-auto w-auto text-center group hover:border-2 p-2 rounded-xl"
          >
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

            <button
              onClick={() => addToCart(items)}
              className="text-white bg-green-800 px-14 py-2 rounded-full sm:hidden group-hover:block transition duration-300 ease-in-out mt-3"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
