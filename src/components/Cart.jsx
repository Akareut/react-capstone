import React from 'react'
import "../App.css"

const Cart = () =>{
    return (
        <div class="content row2">
        <div id="cart-error"></div>
        
        <div class="row" id="contentCart">
            
        </div>
        <div id="total-error"></div>
        <div class="total-price">
                
        </div>
        <button class="btn clear-cart">CLEAR CART</button>
        <button class="btn checkout">COMPLETE ORDER</button>

    </div>
    )
}

export default Cart