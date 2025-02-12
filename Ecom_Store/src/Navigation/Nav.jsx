import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart , AiOutlineUserAdd} from 'react-icons/ai'

// Nav component with a search bar and three icons (heart, shopping cart, user)
const Nav = ({handleInputChange , query}) => {
return (
<nav className=' flex border-b-2 border-solid border-b-[#f3f3f3] justify-around items-center p-4 bg-white z-999'>
    {/* Search input - value and onChange handler are passed as props */}
    <div className="flex border-b-2 border-solid border-b-[#f3f3f3]">
        <input type="text" value={query} onChange={handleInputChange} placeholder="Search Products" className="search-input" />
    </div>

    {/* Profile container with three icons */}
    <div className="profile-container">

        <a href="#">
            <FiHeart className='w-[1.5rem] h-[1.5rem] ml-[2rem]' />
        </a>

        <a href="#">
            <AiOutlineShoppingCart className='w-[1.5rem] h-[1.5rem] ml-[2rem]' />
        </a>

        <a href="#">
            <AiOutlineUserAdd className='w-[1.5rem] h-[1.5rem] ml-[2rem]' />
        </a>


    </div>

    {/* Scoped styles - I don't want to create a separate CSS file for this component */}
    <style scoped>
        {
            ` input {
                padding: 12px 20px;
                border: none;
                background: #f7f6f6;
                outline: none;
                margin-right: 20px;
                border-radius: 5px;
                position: relative;
                width: 14rem;
            }
            
            .profile-container {
                display: flex;
                gap: 2rem;
                color:black;
            }

            `
        }
    </style>





</nav>
)}


export default Nav

