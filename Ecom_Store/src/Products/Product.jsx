import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import data from '../assets/data.js'

const Product = () => {
    console.log(data);
return (
<>
    <section className='flex flex-wrap gap-6 justify-center mt-[5rem]'>
        {data.map((product) => (
        <div key={Math.random()} className="w-[280px] h-[400px] bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-6 border-t-4 border-blue-500">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-center h-[60%]">
                    <div className="w-[13rem]">
                        <img src={product.img} alt={product.title} className="object-contain rounded-t-xl  " /> 
                    </div>
                    <span
                        className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
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
                            <span className="relative left-3 bg-green-100 text-green-700 text-center px-4 rounded-lg text-xs font-medium">
                                In Stock
                            </span>
                            <div className="flex items-center">
                                <span className="material-symbols-outlined text-yellow-400">
                                    star
                                </span>
                                <span className="text-sm ml-1">4.8 (120)</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            {product.title}
                        </h3>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">${product.newPrice}</span> 
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all">
                                Add to Cart
                            </button>
                            <button
                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 active:scale-95 transition-all">
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </section>
</>
);
}

export default Product;