import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart , AiOutlineUserAdd} from 'react-icons/ai'

const Nav = () => {
return (
<nav className='flex border-b-2 border-solid border-b-[#f3f3f3] justify-around items-center p-20 z-999 ml-[2rem]'>
    <div className="flex border-b-2 border-solid border-b-[#f3f3f3]">
        <input type="text" placeholder="Search Products" className="search-input" />
    </div>

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

    {/* scoped stu=yles . i dont want to create a Nav.css so let it stay here */}
    <style jsx>
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
                color: #f3f3f3;
            }

            `
        }
    </style>





</nav>
)
}


export default Nav