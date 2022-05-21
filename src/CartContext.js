import {createContext,useState} from 'react'

const CartContext = createContext()

export function CartProvider ({children}){
    const [items,setItems] = useState([])

    // const addToCart = (title,image,quantity,price) =>{
    //     setItems((prevState)=>[...prevState,{title,image,quantity,price}])
    // }

    const addToCart = (product) =>{
        const productExists = items.find((item)=>
            item.id === product.id
        )
        
        if(productExists){
            setItems(items.map((item) =>
                (item.id === product.id ?{...productExists,qty:productExists.qty+1} : item))
            )
        }
    }

    return(
        <CartContext.Provider value={{items,addToCart  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
