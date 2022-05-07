import {createContext, useEffect, useState } from "react";


export const Cartcontext=createContext();

export const ContextProvider=({children})=>{
     const updatecart=(value)=>{
      setcartlist(value);
     }
     const updateprice=(value)=>{
      setprice(value);
     }
     const updateuser=(value)=>{
      setcustomername(value);
     }
    const [cartlist,setcartlist]=useState([]);

      const [price,setprice]=useState(0);
      useEffect(()=>{
        var totalprice=0;
        for(let i=0;i<cartlist.length;i++)
        {          
                totalprice=totalprice+cartlist[i].price;         
            
        }
        setprice(totalprice);
      
      },[cartlist])

      const [customername,setcustomername]=useState({name:"text1",Address:"textaddress"})


    return (
        <Cartcontext.Provider value={{cartlist,price,customername,updatecart,updateprice,updateuser}} >{children}</Cartcontext.Provider>
    )
}