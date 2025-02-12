import React from 'react'
import Nav from './Navigation/Nav.jsx'
import Product from './Products/Product.jsx'
import Recon from './Navigation/Recon.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import './index.css'
import data from './assets/data.js'
import {useState} from 'react'

const App = () => {
  // State to manage selected category
  const [selectCategory, setSelectCategory] = useState(null)
  // State to manage search query
  const [query, setQuery] = useState('')

  // Radio filtering (category, prices, and colors)
  const handleChange = (e) => {
    e.preventDefault()
    setSelectCategory(e.target.value)
  }

  // Buttons filtering
  const handleClick = (e) => {
    e.preventDefault()
    setSelectCategory(e.target.value)
  }

  // Input filtering
  const handleInputChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  // Filter data based on search query
  const filteredData = data.filter(item => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  // Function to filter data based on selected category and search query
  const filteredInfo = (data, selected, query) => {
    let filteredProducts = data

    if (query) filteredProducts = filteredData

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )
    }

    return filteredProducts
  }

  // Get the filtered result
  const result = filteredInfo(data, selectCategory, query)

  return (
    <div className='flex'>
      <div>
        {/* Sidebar component with handleChange prop */}
        <Sidebar handleChange={handleChange} />
      </div>

      <div className='flex flex-col'>
        {/* Nav component with handleInputChange and query props */}
        <Nav handleInputChange={handleInputChange} query={query} />
        {/* Recon component with handleClick prop */}
        <Recon handleClick={handleClick} />
        {/* Product component with filtered products */}
        <Product products={result} />
      </div>
    </div>
  )
}

export default App