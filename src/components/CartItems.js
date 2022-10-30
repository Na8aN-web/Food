import React from 'react'
import '../assets/stylesheet/cart.css'
import dish from '../assets/images/icons/dish.png'
import '../assets/stylesheet/cartItem.css'
import dot from '../assets/images/icons/button.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {productActions} from '../features/productSlice' 

function CartItems({product}) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product)
    const {cartTotalAmount} = useSelector(state => state.product)

    useEffect(()=>{
        dispatch(productActions.getTotal());
    }, [products])
    const increase = (food) =>{
        dispatch(productActions.increase(food))
    }
    const reduce = (food) =>{
        dispatch(productActions.reduce(food))
    }
    const clear = () =>{
        dispatch(productActions.clearCart())
    }
    

  return (
    <div className='cartitem-container'>
        <div className='carts'>
        {product.items.map((food) =>{
            return <div className='single-cart' key={food.id}>
                <div><img src={food.imagePath} alt={food.foodName} width='100px' height='70px'/></div>
                <div className='details'>
                <p className='para-food'>
                    <img className='food-bullet' src={dot} alt='dot' width='14px' height='14px'/>
                    {food.foodName}
                </p>
                    <div className='counter'>
                        <button onClick={() => reduce(food)} className='equation'>-</button>
                        <button className='amount-value'>{food.cartQuantity}</button>
                        <button onClick={() => increase(food)} className='equation'>+</button>
                    </div>
                </div>
                <div className='price'>${food.price * food.cartQuantity}</div>
            </div>
        })}
        <div className='item-total'>
            <h3>Item total</h3>
            <h3>${cartTotalAmount}</h3>
        </div>
        </div>
     
        <div className='final'>
            <div><button className='checkout-button'>Checkout</button></div>
            <div className='decision'>
                <button className='hold'>Hold</button>
                <button onClick={() => clear()} className='cancel'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems