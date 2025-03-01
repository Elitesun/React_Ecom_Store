import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Product = ({ products }) => {
  return (
    <section className="flex flex-wrap gap-4 justify-around p-4">
      {products.map((product) => (
        <div
          key={Math.random()}
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[240px] h-[380px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-500"
        >
          <div className="flex flex-col h-full">
            {/* Product Image */}
            <div className="flex items-center justify-center h-[60%] relative">
              <div className="w-[10rem] sm:w-[8rem]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-contain rounded-t-xl"
                />
              </div>
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-medium">
                - {(Math.random() * 70).toFixed(2)}%
              </span>
              {/* Wishlist Button */}
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full hover:bg-gray-100">
                <span className="cursor-pointer">
                  <FaRegHeart />
                </span>
              </button>
            </div>

            {/* Product Details */}
            <div className="p-2 flex-1 flex flex-col justify-between">
              <div>
                {/* Stock Status and Reviews */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <span className="bg-green-100 text-green-700 text-center px-2 rounded-lg text-xs font-medium">
                    In Stock
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 flex">
                      {Array.from({
                        length: Math.floor(Math.random() * 5) + 1,
                      }).map((_, index) => (
                        <AiFillStar key={index} />
                      ))}
                    </span>
                    <span className="text-xs sm:text-sm ml-2">
                      {product.reviews}
                    </span>
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-sm sm:text-base font-semibold mb-2 text-center mt-2 line-clamp-2">
                  {product.title}
                </h3>
              </div>

              {/* Price and Buttons */}
              <div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold">
                      ${product.newPrice}
                    </span>
                    <span className="text-gray-600 line-through text-sm sm:text-base">
                      ${product.prevPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart and Shopping Cart Buttons */}
                <div className="flex gap-2 sm:gap-4 mt-2">
                  <button className="flex-1 bg-blue-600 text-white py-1 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-all">
                    Add to Cart
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 active:scale-95 transition-all">
                    <span className="cursor-pointer">
                      <FiShoppingCart />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
