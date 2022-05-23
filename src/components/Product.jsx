import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import Loader from './loader/Loader'
import ProductCard from './ProductCard' 
import CartContext from '../CartContext'

const Product = () =>{
    const {id} = useParams()
    const url = `https://fakestoreapi.com/products/${id}`
    const urlProducts = `https://fakestoreapi.com/products`
    const {addToCart} = useContext(CartContext) 

    const [product,setProduct] = useState([])
    const [related,setRelated] = useState([])
    const [error,setError] = useState([])
    // const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)

    const [quantity,setQuantity] = useState(1)

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

    const handleChange=(e)=>{
       const input = e.target.value
        setQuantity(input)
    }

    let cartItems = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : ""
    let exists = cartItems && cartItems.some(c=> c.id === product.id)

    const storeCart = () =>{
        let cartItem = {
            "id":product.id,
            "product":product.title,
            "image":product.image,
            "quantity":quantity,
            "price":product.price,
            "total":product.price*quantity
        }

        if(exists){
            setError("This product already exists in the cart.")
        }else{
            localStorage.setItem("cart",JSON.stringify([...cartItems,cartItem]))
            addToCart(product.id,product.title,product.image,quantity,product.price)
        }
    }

    let oneProduct = JSON.parse(localStorage.getItem("product"))
    // let all = JSON.parse(localStorage.getItem("all-products"))

    const rateScale = [
      {rate: 1},
      {rate: 2},
      {rate: 3},
      {rate: 4},
      {rate: 5}
    ];

    let rated = JSON.parse(localStorage.getItem("ratings")) ? JSON.parse(localStorage.getItem("ratings")) : ''

    const rateProduct = (rate) =>{
        if(rated && oneProduct.id === product.id){
            let rateItem = {
                "id":product.id,
                "product":product.title,
                "price":product.price,
                "rate":rate
            }
            localStorage.setItem("ratings",JSON.stringify([...rated,rateItem]))
        }else{
            let rateItem = {
                "id":product.id,
                "product":product.title,
                "rate":rate
            }
            localStorage.setItem("ratings",JSON.stringify([rateItem]))
        }
        
    }


    let products = related && product  ? related.filter(p => p.category === product.category) : null

    let singleProduct = localStorage.setItem("product",JSON.stringify({
        "id":product.id,
        "product":product.title,
    }))
    useEffect(()=>{
        if(singleProduct){
            setProduct(JSON.parse(localStorage.getItem("product")))
        }
        rateProduct()
        getProduct()
        relatedProducts(window.scrollTo(0, 0))
        // eslint-disable-next-line
    },[url])
    
    if(product){
        return (
        <div className="container">
            <div className="content">
                <div className="row row2">
                {loading ?
                <>
                <div className="product-col4">
                    <div className="e-span">{error}</div>
                    <img src={product.image} alt="product"/>
                </div>
                <div className="col-single">
                    Rate product
                    <ul className="rating">
                        {rateScale.map((value, index) => 
                        (<li className="rating-item active" 
                            onClick={ ()=> rateProduct(value.rate) } key={index} >
                        </li>) 
                        )}
                    </ul>
                    <h2>{product.title}</h2>
                    <h4>$ {product.price}</h4>
                    <h3 id="details">Description</h3>
                    <p>{product.description}</p>
                    {/* <h3 id="details">In Stock</h3> */}
                    {/* <p>{product.rating.count}</p> */}
                    <input type="number" value={quantity} min="1" id="cart-input" onChange={handleChange}/>
                    <button className="btn- cartBtn" onClick={ storeCart}><i className="fa fa-shopping-cart"></i> Add to cart</button>
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
    }else if(!product && ! related){
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
    }else{
        return(
            <div className="container">
               <div className="content">
                   <div className="row row2">
                    <div className="product-col4">
                            <Loader/>
                        </div>
                        <div className="col-single">
                            <h2 id="details">Product is loading ...</h2>
                        </div>
                    </div> 
               </div>
           </div>
        )
    }
}

export default Product