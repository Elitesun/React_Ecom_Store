import React from 'react'
import Nav from './Navigation/Nav.jsx'
import Product from './Products/Product.jsx'
import Recon from './Navigation/Recon.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import './index.css'
import data from './assets/data.js'

import {useState} from 'react'
const App = () => {
  const [selectCategory, setSelectCategory] = useState(null)
  const [query, setQuery] = useState('')


  // Radio filtering (category , prices and colors)
  const handleChange = (e) => {
    e.preventDefault()
    setSelectCategory(e.target.value)
  }

  // Buttons filtering
  const handleClick = (e) => {
    e.preventDefault()
    setSelectCategory(e.target.value)
    
  }

  // input filtering 

  const handleInputChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  };

  const filteredData = data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

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