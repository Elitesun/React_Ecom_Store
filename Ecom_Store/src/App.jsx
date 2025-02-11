import React from 'react'
import Nav from './Navigation/Nav.jsx'
import Product from './Products/Product.jsx'
import Recon from './Navigation/Recon.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import './index.css'
import data from './assets/data.js'
const App = () => {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>

      <div className='flex flex-col'>
        <Nav />
        <Recon />
        <Product/>
      </div>
    </div>
 
     
    
  )
}

export default App