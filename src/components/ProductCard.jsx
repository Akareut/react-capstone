import React from 'react'
import {Link} from 'react-router-dom'
import Ratings from './Ratings'

const ProductCard = ({product}) =>{
    const getTop = () =>{
        // window.scrollTo(0, 0)
    }

    // const ratings = JSON.parse(localStorage.getItem("ratings")) 
    //     ? JSON.parse(localStorage.getItem("ratings")):""

    // const [rated] = ratings.find(r => r.id === product.id)

    return(
        <div className="col4 product"> 
            <Link to={`/product/${product.id}`} className="product-link" onClick={getTop}>
            <img src={product.image} alt={product.title.substring(0, 25)}/>
                <h2>
                    {product.title.length > 25 ?
                    `${product.title.substring(0, 25)}...` : product.title
                    }
                </h2>
            </Link>
            <p>${product.price}</p>
                <Ratings value={product.rating.rate} text={`${product.rating.count} reviews`}/>
        </div>
    )
}

export default ProductCard