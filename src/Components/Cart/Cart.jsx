import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <div className='cart'>
        <span class="material-symbols-outlined item">favorite</span>
        <span class="material-symbols-outlined item">person</span>
        <a href='' ><span class="material-symbols-outlined item">shopping_cart</span></a>
        <div className="nav-cart-count"></div>
        
    </div>
  )
}

export default Cart