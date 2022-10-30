import React from 'react'
import '../assets/stylesheet/foodItems.css'
import hamburger from '../assets/images/icons/hamburger.png'
import search from '../assets/images/icons/search.png'

import Sidebar from './Sidebar'
import Menu from './Menu'

function FoodItems() {
  return (
    <div className='food-container'>
        <div className='food-navbar'>
            <img src={hamburger} width="16px" height="16px" alt="hamburger" />
            <h3 className='navbar-header'>Food items</h3>
            <img src={search} width="16px" height="16px" alt="search" />
        </div>

        <div className='food-main'>
            <Sidebar />
            <Menu />
        </div>
    </div>
  )
}

export default FoodItems