import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import BannerSection from './BannerSection'
import Loader from './loader/Loader'

const Home = () =>{

    const [products,setProducts] = useState([])
    const [search,setSearch] = useState("")
    const [loading,setLoading] = useState(false)

    const searchProducts = (e) =>{
        let searchValue = e.target.value
        setSearch(searchValue)
    }

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products?limit=12')
        .then(res=>
            res.json()
        )
        .then(data=>
            // console.log(data)
            setProducts(data),
            setLoading(true)
        )
    }

    const getSearch = (title) =>{
        fetch(`https://fakestoreapi.com/products/category/${title}`)
        .then(res=>
            res.json()
        )
        .then(data=>
            // console.log(data)
            setProducts(data),
            setLoading(true)
        )
    }

    const searchCategory = () =>{
        setLoading(false)
        getSearch(search)
    }

    useEffect(()=>{
        getProducts()
        getSearch()
    },[])
    
    return (
        <div className="container">
            <BannerSection/>
            <div className="content">
                <h2 className="title">Featured Products</h2>
                <div className="rowOne">
                    <Link id="all" to="/products">view all products</Link>
                    <form className="searchForm">
                        <input type="text" placeholder="Search product by category" className="search" value={search} onChange={searchProducts}/>
                        <i className="fas fa-search" onClick={searchCategory}></i>
                    </form>
                </div>
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

export default Home