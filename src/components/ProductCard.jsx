import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) =>{
    return(
        <div className="col4 product"> 
            <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title.substring(0, 25)}/>
                <h2>
                    {product.title.length > 25 ?
                    `${product.title.substring(0, 25)}...` : product.title
                    }
                </h2>
            </Link>
            <p>${product.price}</p>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
        </div>
    )
}

export default ProductCard