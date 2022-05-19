import React from 'react'

const Product = () =>{
    return (
        <div class="row row2">
            <div class="product-col4">
                <img src={"./images/log.svg"} alt="product"/>
            </div>
            <div class="col-single">
                <h2>Product</h2>
                <h4>$ 200</h4>
                <h3 id="details">Description</h3>
                <p>lorem</p>
                <h3 id="details">In Stock</h3>
                <p>2</p>
                <input type="number" value="1" min="1" id="cart-input"/>
                <button class="btn cartBtn"><i class="fa fa-shopping-cart"></i> Add to cart</button>
            </div>
        </div>
    )
}

export default Product