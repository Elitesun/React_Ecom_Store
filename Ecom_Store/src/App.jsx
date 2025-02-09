import React from 'react'
import Category from './Sidebar/Category.jsx'
import Nav from './Navigation/Nav.jsx'
import Product from './Products/Product.jsx'
import Recon from './Navigation/Recon.jsx'

const App = () => {
  return (
    <>
      <Nav />
     <Recon />
     <div className=" flex">
      <Category />
      <Product />
     </div>
    </>
 
     
    
  )
}

export default App