import React,{useState,useEffect} from 'react'
import Loader from './loader/Loader'
import ProductCard from './ProductCard'

const Products = () =>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [count,setCount] = useState(0)

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products',{mode: 'cors'})
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
    },[storeProducts,count])

    const rateProduct = (id,rate) =>{
        let newProducts = products
        setCount(count + 1)
        
        newProducts = newProducts.map((product)=>{
             if(product.id === id){
                product.rate = rate
                return product
            }else{
                return product
            }
        })

        localStorage.setItem("all-products",JSON.stringify(newProducts))
    }

    if(products){
        return (
            <div className="container">
                <div className="content">
                    <h2 className="title-left">All Products</h2>
                    <div className="row products">
                        {
                            loading ?
                            products.map((product)=>{
                                return(
                                    <ProductCard updateRating={rateProduct} product={product} key={product.id}/>
                                )
                            })
                            :
                            <Loader/>
                            }

                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container">
               <div className="content">
                   <div className="row row2">
                    <div className="product-col4">
                            <Loader/>
                        </div>
                        <div className="col-single">
                            <h2 id="details">Products are loading ...</h2>
                        </div>
                    </div> 
               </div>
           </div>
        )
    }
}

export default Products