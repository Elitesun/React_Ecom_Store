import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Product = ({products}) => {
return (

<section className='flex flex-wrap gap-2 justify-around'>
    {products.map((product) => (
    <div key={Math.random()}
        className=" sm:w-[280px] h-[430px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-6 border-t-4 border-blue-500">
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-[60%]">
                <div className="w-[13rem]">
                    <img src={product.img} alt={product.title} className="object-contain rounded-t-xl" />
                </div>
                <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    - {(Math.random() * 70).toFixed(2)}%
                </span>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100">
                    <span className="cursor-pointer">
                        <FaRegHeart /></span>
                </button>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex gap-2">
                        <span
                            className=" bg-green-100 text-green-700 text-center px-4 rounded-lg text-xs font-medium">
                            In Stock
                        </span>
                        <div className="flex items-center">
                            <span className=" text-yellow-400 flex ">
                                {Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map((_, index) => (
                                <AiFillStar key={index} />
                                ))}
                            </span>
                            <span className=" text-sm ml-2">{product.reviews}</span>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-7 text-center mt-4 line-clamp-2">
                        {product.title}
                    </h3>
                </div>
                <div>
                    <div className="flex justify-between ">
                        <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold relative bottom-4">${product.newPrice}</span>
                                <span className="text-gray-600 line-through relative bottom-4 left-2">${product.prevPrice}</span>
                        </div>
                    </div>
                    <div className="flex gap-15">
                        <button
                            className=" w-40 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all">
                            Add to Cart
                        </button>
                        <span
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 active:scale-95 transition-all">
                            <span className="cursor-pointer">
                                <FiShoppingCart /></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ))}
</section>

);
}

export default Product;