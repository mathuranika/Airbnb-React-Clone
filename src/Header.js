import React from 'react'
import './Header.css'
import { MdSearch } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


function Header() {
  return (
    <div className='header'>
        <img
            className='header__icon'
            src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
            alt='airbnb-logo'
        />
        <div className='header__center'>
            <input type='text' />
            <MdSearch />
        </div>

        <div className='header__right'>
            <p>Become a host</p>
            <MdOutlineLanguage />
            <MdOutlineExpandMore />
            <FaUserCircle />


        </div>

    </div>
  )
}

export default Header