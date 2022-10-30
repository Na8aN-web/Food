import React, { useEffect, useState } from 'react'
import '../assets/stylesheet/menu.css'
import burger from '../assets/images/food/burger.jpg'
import buritto from '../assets/images/food/buritto.jpg'
import egusi from '../assets/images/food/egusi.jpg'
import picossa from '../assets/images/food/picossa.jpg'
import pizza from '../assets/images/food/pizza.jpg'
import porkbelly from '../assets/images/food/porkbelly.jpg'
import ramen from '../assets/images/food/ramen.jpg'
import soup from '../assets/images/food/soup.jpg'
import spaghetti from '../assets/images/food/spaghetti.jpeg'
import dot from '../assets/images/icons/button.png'
import { useRef } from 'react'
import check from '../assets/images/icons/check-mark.png'

import { useDispatch } from 'react-redux'
import {productActions} from '../features/productSlice' 

const foodData = [
    {
      id: 1,
      imagePath: burger,
      foodName: "Burger",
      price: 7.00,
    },
    {
        id: 2,
        imagePath: buritto,
        foodName: "Buritto",
        price:10.00,
    },
    {
        id: 3,
        imagePath: egusi,
        foodName: "Egusi and Swallow",
        price: 20.00,
    },
    {
        id: 4,
        imagePath: picossa,
        foodName: "Picossa",
        price: 15.00,
    },
    {
        id: 5,
        imagePath: pizza,
        foodName: "Pizza",
        price: 19.00,
    },
    {
        id: 6,
        imagePath: porkbelly,
        foodName: "Pork Belly",
        price: 25.00,
    },
    {
        id: 7,
        imagePath: ramen,
        foodName: "Ramen",
        price: 9.00,
    },
    {
        id: 8,
        imagePath: soup,
        foodName: "Soup",
        price: 30.00,
    },
    {
        id: 9,
        imagePath: spaghetti,
        foodName: "Spaghetti",
        price: 32.00,
    },
  ];

  
function Menu() {
    const dispatch = useDispatch();
    const el = useRef();
     const scrollHandler = (e) => {
            console.log(e.target);
        };
    const handleClick = (event, food ) =>{
        dispatch(productActions.addToCart(food))
        event.currentTarget.firstChild.style.display = "block"
    }

  return (
    <div className='menu-container'>
        {foodData.map((food, index)=>{
            return <div className="menu-item" id={food.id}   key={index} onClick={(e)=> handleClick(e, food)}>
                <div className='opac'  >
                    <img src={check} alt='check' width='24px' height='24px' className='checkmark'/>
                </div>
                <img src={food.imagePath} ref={el}   alt={food.foodName} width='250px' height='160px' className='food-image'/>
                <div className='header-food' >
                    <img className='food-bullet' src={dot} alt='dot' width='14px' height='14px'/>
                    {food.foodName}
                </div>
                <div><strong>${food.price}</strong></div>
            </div>
        })}
    </div>
  )
}

export default Menu