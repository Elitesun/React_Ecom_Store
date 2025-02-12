import React from 'react'
import Nav from './Navigation/Nav.jsx'
import Product from './Products/Product.jsx'
import Recon from './Navigation/Recon.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import './index.css'
import data from './assets/data.js'

import {useState} from 'react'
import Category from './Sidebar/Category.jsx'
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


  const filteredInfo = (data, selected, query) => {
    
    let filteredProducts = data;


    if (query) filteredProducts = filteredData;
    
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts;
  }


    

  const result = filteredInfo(data, selectCategory, query);

  return (
    <div className='flex'>
      <div>
        <Sidebar handleChange= {handleChange}/>
      </div>

      <div className='flex flex-col'>
        <Nav handleInputChange={ handleInputChange} query={query} />
        <Recon handleClick={handleClick}/>
        <Product products={result} />
      </div>
    </div>
 
     
    
  )
}

export default App