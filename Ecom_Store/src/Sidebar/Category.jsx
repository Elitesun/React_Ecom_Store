import React from 'react'

const Category = () => {
  return (
    <div className=' w-[15%] h-[calc(100vh-4rem)] flex flex-col border-r border-gray-200 bg-white p-4 shadow-sm top-16 left-0'>
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