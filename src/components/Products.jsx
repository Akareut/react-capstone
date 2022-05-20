import React,{useState,useEffect} from 'react'
import Loader from './loader/Loader'

const Products = () =>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>
            res.json()
        )
        .then(data=>
            // console.log(data)
            setProducts(data),
            setLoading(true)
        )
    }
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div className="container">
            <div className="content">
                <h2 className="title-left">All Products</h2>
                <div className="row products">
                    {
                        loading ?
                        products.map((product)=>{
                            return(
                                <div className="col4 product" key={product.id}> 
                                <img src={product.image} alt={product.title.substring(0, 25)}/>
                                <h2>
                                    {product.title.length > 25 ?
                                        `${product.title.substring(0, 25)}...` : product.title
                                    }
                                </h2>
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
                        })
                        :
                        <Loader/>
                        }

                </div>
              </div>
        </div>
    )
}

export default Products