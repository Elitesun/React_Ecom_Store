import React from 'react'

const Category = () => {
  return (
    <div className=' '>
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-col gap-2">
        <button className="text-left hover:bg-gray-100 p-2 rounded-md">All Products</button>
        <button className="text-left hover:bg-gray-100 p-2 rounded-md">Sneakers</button>
        <button className="text-left hover:bg-gray-100 p-2 rounded-md">Running</button>
        <button className="text-left hover:bg-gray-100 p-2 rounded-md">Basketball</button>
        <button className="text-left hover:bg-gray-100 p-2 rounded-md">Training</button>
      </div>
    </div>
  )
}

export default Category