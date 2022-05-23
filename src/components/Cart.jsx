import React,{useContext} from 'react'
import "../App.css"
import Loader from './loader/Loader'
import UserContext from '../UserContext'

const Cart = () =>{

const { isLoggedIn }  = useContext(UserContext)

let order = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : ''
let history = [isLoggedIn,...order]

const completeOrder = () =>{
    if(isLoggedIn){
        localStorage.setItem("order-history",JSON.stringify(history))
        localStorage.removeItem('cart');
        alert("Your order has been confirmed.")
        window.location.reload()
    }else{
        window.location.replace("/")
    }
}

const removeCartItem = (id) =>{
    let cart_ = JSON.parse(localStorage.getItem("cart"))
    let items  = cart_.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(items));
    window.location.reload()
}

let items = JSON.parse(localStorage.getItem("cart"))

if(items){
return (
<div className="container">
   <div className="content">
      <div className="row products mtop">
         {
         <>
         <table>
            <thead>
               <tr>
                   <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
               </tr>
            </thead>
            {items.map((product,index)=>(
            <tbody key={index}>
            <tr>
                <td>
                    <div className="cart-content">
                        <img src={product.image} alt="cart"/>
                        <div  className="cart-item">
                            <p>{product.product}</p>
                            <small>Price: ${product.price}</small>
                            <br/>
                            <span className="remove-Item" onClick={ ()=> removeCartItem(product.id) }>Remove</span>
                        </div>
                    </div>
                </td>
               <td>
                  <p>{product.quantity}</p>
               </td>
               <td className="cart-total">
                  <strong>$ {Number(product.price * product.quantity).toLocaleString()}</strong>
               </td>
            </tr>
            </tbody>
            ))
            }
         </table>
        <h2>Total: $ { items.reduce((a,v) =>  a = a + v.total , 0 )}</h2>

         <button className="btn-primary btn-" onClick={completeOrder}>complete order now</button>
         </>
         }
      </div>
   </div>
</div>
)
}else if(!items){
return(
<div className="container">
   <div className="content">
      <div className="row row2">
         <div className="product-col4">
            <img src={"../images/404.svg"} alt="product"/>
         </div>
         <div className="col-single">
            <h3 id="details">There are currently no items in the cart.</h3>
         </div>
      </div>
   </div>
</div>
)
}else{
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
}
}
export default Cart