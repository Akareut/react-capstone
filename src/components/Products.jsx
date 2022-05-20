import React,{useState,useEffect} from 'react'


const Products = () =>{

    const [products,setProducts] = useState([])

    const getProducts = () =>{
        fetch("https://fakestoreapi.com/products")
        .then(res=> res.json)
        .then(data=> setProducts(data))
    }

    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div classNameName="container">
            <div className="content">
                <h2 className="title-left">All Products</h2>
                <div className="row products">
                    {products.map((product)=>(
                      <div className="col4 product">
                      <img src={product.image} alt="product"/>
                      <h2>{product.title}</h2>
                      <p>${product.price}</p>
                      <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                      </div>
                  </div>
            
                     
                    ))}
                   
                  
                </div>
              </div>
        </div>
    )
}

export default Products