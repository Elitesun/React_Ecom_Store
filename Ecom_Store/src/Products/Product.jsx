import React from 'react'
import { useEffect, useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.log('Error :', err))
    }, [])

    return (
        <>
            <section className='flex flex-wrap gap-4 justify-center mt-[4rem]'>
                {products.map((product) => (
                    <section key={product.id} className="flex w-[20rem] h-[25rem] border-2 border-solid border-[#ff0e0e] justify-center rounded-lg cursor-pointer">
                        <div className='relative w-full h-full p-4'>
                            <div className="flex justify-center pb-6">
                                <img src={product.image} alt={product.title} className="w-[130px] h-[170px] object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <h3 className='relative text-center text-lg font-semibold'>{product.title}</h3>
                            </div>
                            <div className="flex justify-normal ">
                                <p className="indent-4 text-xl font-bold">${product.price}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </>
    )
}
export default Product