import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import data from '../assets/data.js'
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Product = () => {
return (

<section className='flex flex-wrap mt-[2rem] gap-5 justify-center'>
    {data.map((product) => (
    <div key={Math.random()}
        className=" sm:w-[280px] h-[400px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-6 border-t-4 border-blue-500">
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-[60%]">
                <div className="w-[13rem]">
                    <img src={product.img} alt={product.title} className="object-contain rounded-t-xl" />
                </div>
                <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {(Math.random() * 70).toFixed(2)}%
                </span>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100">
                    <span className="material-symbols-outlined">
                        <FaRegHeart /></span>
                </button>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <span
                            className="relative left-3 bg-green-100 text-green-700 text-center px-4 rounded-lg text-xs font-medium">
                            In Stock
                        </span>
                        <div className="flex items-center">
                            <span className=" text-yellow-400 flex relative left-2">
                                {Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map((_, index) => (
                                <AiFillStar key={index} />
                                ))}
                            </span>
                            <span className="relative left-6 text-sm ml-5">{product.reviews}</span>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 relative text-center top-4 line-clamp-2">
                        {product.title}
                    </h3>
                </div>
                <div>
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold relative bottom-4">{product.prevPrice}</span><span
                                className="text-gray-600 line-through relative bottom-4 left-2">${product.newPrice}</span>
                        </div>
                    </div>
                    <div className="flex gap-15">
                        <button
                            className="flex-1 relative bottom-3 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all">
                            Add to Cart
                        </button>
                        <span
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 active:scale-95 transition-all">
                            <span className="material-symbols-outlined relative right-4 bottom-3">
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