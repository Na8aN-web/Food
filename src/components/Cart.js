import React from 'react'
import '../assets/stylesheet/cart.css'
import dish from '../assets/images/icons/dish.png'
import CartItems from './CartItems'
import { useSelector } from 'react-redux'

function Cart() {
  const product = useSelector((state) => state.product);
  return(
  <div className='cart-container'>
        <div className='cart-navbar'>
            <h3 className='cart-header'>Cart ({product.items.length})</h3>
        </div>
        {product.items.length === 0 ? (
          <div className='main-cart'>
          <img src={dish} alt='dish' width='200px' height='200px'/>
          <h3>Your cart is empty</h3>
          <p>Please add some items from the menu</p>
      </div>
        ) : (<div>
          <CartItems product={product}/>
        </div>)}
        
    
  </div>
  )
   
}

export default Cart