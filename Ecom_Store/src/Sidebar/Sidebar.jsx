import React from 'react'
import Category from './Category.jsx'
import Color from './Color.jsx'
import Price from './Price.jsx'

const Sidebar = ({ handleChange }) => {
return (
<>
    <section className="w-60 h-full flex flex-col border-r-gray-500 p-4 shadow-sm items-center ">
        <div className='pb-[4rem] mt-3'>
            <div> 🛒</div>
        </div>
            <Category handleChange={handleChange}/>
            <Color handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
    </section>
</>

)
}

export default Sidebar