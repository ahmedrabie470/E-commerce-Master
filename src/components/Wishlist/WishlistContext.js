import axios from "axios";
import { createContext } from "react";
import React from "react";

export let WishlistContext = createContext();
let userToken = localStorage.getItem("userToken");
let headers = {
  token: userToken,
};
function getWishlist() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }
  function addToWishlist(id) {
    return axios
      .post("https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        productId:id
      }, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

export default function WishlistContextProvider(props) {
  return (
    <>
      <WishlistContext.Provider value={{getWishlist,addToWishlist}}>
        {props.children}
      </WishlistContext.Provider>
    </>
  );
}
