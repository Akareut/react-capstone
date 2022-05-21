import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import Loader from './loader/Loader'
import ProductCard from './ProductCard'

const Product = () =>{
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const urlProducts = `https://fakestoreapi.com/products`

    const [product,setProduct] = useState(null)
    const [related,setRelated] = useState([])
    const [loading,setLoading] = useState(false)

    const getProduct = () =>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data), setLoading(true))
        .catch((err) => console.log(err));
    }

    const relatedProducts = () =>{
        fetch(urlProducts)
        .then(res=>res.json())
        .then(data=>setRelated(data), setLoading(true))
        .catch((err) => console.log(err));
    }
    
    let products = related && product  ? related.filter(p => p.category === product.category) : null

    useEffect(()=>{
        getProduct()
        relatedProducts()
        // eslint-disable-next-line
    },[])
    
    if(product){
        return (
        <div className="container">
            <div className="content">
                <div className="row row2">
                {loading ?
                <>
                <div className="product-col4">
                    <img src={product.image} alt="product"/>
                </div>
                <div className="col-single">
                    <h2>{product.title}</h2>
                    <h4>$ {product.price}</h4>
                    <h3 id="details">Description</h3>
                    <p>{product.description}</p>
                    <h3 id="details">In Stock</h3>
                    <p>{product.rating.count}</p>
                    <input type="number" defaultValue="1" min="1" id="cart-input"/>
                    <button className="btn- cartBtn"><i className="fa fa-shopping-cart"></i> Add to cart</button>
                </div>
                </>
                :
                <Loader/>
                }
            </div>
            <h2 className="title-left">Related Products</h2>
                <div className="row products">
                    {
                        loading ?
                        products && products.map((product)=>{
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
    }else{
    return(
        <>
        {
            !product && loading ?
           <div className="container">
               <div className="content">
                   <div className="row row2">
                    <div className="product-col4">
                            <img src={"../images/404.svg"} alt="product"/>
                        </div>
                        <div className="col-single">
                            <h3 id="details">Product was not found.</h3>
                        </div>
                    </div> 
               </div>
           </div>
           :
            <Loader/>
        }
        </>
    )
    }
}

export default Product