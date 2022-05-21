import React,{useState,useEffect} from 'react'
import Loader from './loader/Loader'
import ProductCard from './ProductCard'

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
        .catch((err) => console.log(err));
    }
    let storeProducts = localStorage.setItem("all-products",JSON.stringify(products))

    useEffect(()=>{
        if(storeProducts){
            setProducts(JSON.parse(localStorage.getItem("all-products")))
        }else{
            getProducts()
        }
    },[storeProducts])

    return (
        <div className="container">
            <div className="content">
                <h2 className="title-left">All Products</h2>
                <div className="row products">
                    {
                        loading ?
                        products.map((product)=>{
                            return(
                                <ProductCard product={product} key={product.id}/>
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