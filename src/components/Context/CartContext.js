import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
  token: userToken,
};

function addToCart(id) {
  return axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId:id,
      },
      { headers }
    )
    .then((response) => response)
    .catch((error) => error);
}

function getUserCartItems() {
  return axios
    .get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers,
    })
    .then((response) => response)
    .catch((error) => error);
}

function removeItem(productId) {
  return axios
    .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers })
    .then((response) => response)
    .catch((error) => error);
}

function updateProductCount(productId , count ) {
  return axios
    .put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {count},{ headers })
    .then((response) => response)
    .catch((error) => error);
}

function onlinePayment(cardId ,url , values ) {
  return axios
    .post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${url}`, {
      shippingAddress:values
    },{ headers })
    .then((response) => response)
    .catch((error) => error);
}



export default function CartContextProvider(props) {

  const [cartId, setCartId] = useState(null)

 async function getCartId(){ 
 let {data} =  await getUserCartItems()
  setCartId(data?.data._id)

  }

  useEffect(()=>{getCartId()},[])
  
  return (
    <CartContext.Provider value={{ addToCart , cartId ,  getUserCartItems , removeItem ,onlinePayment,updateProductCount  }}>
      {props.children}
    </CartContext.Provider>
  );
}
