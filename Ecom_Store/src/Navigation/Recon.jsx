import React from 'react'

const Recon = () => {
return (

<div className=" px-8 ml-[16%]">
  <h2 className='text-xl font-bold  mb-[10px] mt-[10px] '>Recommended</h2>
  <div className='flex gap-[10px] font-light '>
    <button className='border-[0.6px] border-solid border-[#323232] p-1 px-2 rounded-[5px] text-[#323232] cursor-pointer hover:bg-blue-600'>View All</button>
    <button className='border-[0.6px] border-solid border-[#323232] p-1 px-2 rounded-[5px] text-[#323232] cursor-pointer hover:border-l-blue-600'>Adidas</button>
    <button className='border-[0.6px] border-solid border-[#323232] p-1 px-2 rounded-[5px] text-[#323232] cursor-pointer hover:border-l-blue-600'>Nike</button>
    <button className='border-[0.6px] border-solid border-[#323232] p-1 px-2 rounded-[5px] text-[#323232] cursor-pointer hover:border-l-blue-600'>Puma</button>
  </div> 
    </div>  
)
}

 
export default Recon