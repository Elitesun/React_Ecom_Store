import React from 'react'
import Category from './Category.jsx'
import Color from './Color.jsx'
import Price from './Price.jsx'

const Sidebar = () => {
return (
<>
    <section className=" h-full flex flex-col border-r border-gray-200 bg-white p-4 shadow-sm ">
        <div>🛒</div>
        <Category />
    </section>
</>

)
}

export default Sidebar