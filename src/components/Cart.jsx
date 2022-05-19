import React from 'react'
import "../App.css"

const Cart = () =>{
    return (
    <div class="content row2">
        <div class="row" id="contentCart">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <div id="cart-error"></div>
                </tr>
                <tr>
                <td>
                        <div class="cart-content">
                            <img src={"./images/log.svg"} alt="product"/>
                        <div  class="cart-item">
                            <p>product</p>
                            <small>Price: $29</small>
                            <br/>
                            <a href="local" class="remove-Item">Remove</a>
                        </div>
                        </div>
                    </td>
                    <td>
                        <p>34</p>
                    </td>
                    <td class="cart-total">$ 456</td>`
                </tr>
                <tr>
                <td>
                        <div class="cart-content">
                            <img src={"./images/log.svg"} alt="product"/>
                        <div  class="cart-item">
                            <p>product</p>
                            <small>Price: $29</small>
                            <br/>
                            <a href="local" class="remove-Item">Remove</a>
                        </div>
                        </div>
                    </td>
                    <td>
                        <p>34</p>
                    </td>
                    <td class="cart-total">$ 456</td>`
                </tr>
                <tr>
                <td>
                        <div class="cart-content">
                            <img src={"./images/log.svg"} alt="product"/>
                        <div  class="cart-item">
                            <p>product</p>
                            <small>Price: $29</small>
                            <br/>
                            <a href="local" class="remove-Item">Remove</a>
                        </div>
                        </div>
                    </td>
                    <td>
                        <p>34</p>
                    </td>
                    <td class="cart-total">$ 456</td>`
                </tr>
            </table>
        </div>
        <div class="total-price">
                
        </div>

    </div>
    )
}

export default Cart