import { createContext, useContext, useState } from "react";

import {Cartcontext} from "../Components/CartComponents/contexts/cartcontext";

export const CartContext = createContext();








export const CartContextProvider = ({ children }) => {
  const {cartlist,price,customername,updatecart,updateprice,updateuser}=useContext(Cartcontext);
  const [cart, setCart] = useState([]);
  const handleCart = (e) => {
    // console.log("hi");
    setCart([...cart, e]);
     alert("added to cart");
    updatecart(cart);
    console.log(cart);
    return ;
  };



  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};
