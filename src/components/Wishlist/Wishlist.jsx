import React, { useContext, useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext";


export default function Wishlist() {
  let { getWishlist  } = useContext(WishlistContext);
  let [wishlistProducts,setWishlistProducts] = useState(null);

  async function getProductWishlist() {
    let { data } = await getWishlist();
    setWishlistProducts(data);
  }
  
  

  useEffect(() => {
    getProductWishlist();
  }, []);

  
  return (
    <>
    {wishlistProducts?.data? 
    <>
    {wishlistProducts?.data?.map((product)=>{
      return(
        <div  key={product._id} className="container">
          <div  className="row mt-5">
            <div  className="col-md-3">
              <img width={200} src={product.imageCover} alt="productImageCover" />
            </div>
            <div className="col-md-9 mt-5">
              <h4 className="text-branch">TITLE : {product.title}</h4>
              <h4>DESCRIPTION : {product.description}</h4>
              <h4>PRICE : {product.price}</h4>
            </div>
          </div>
        </div>
      )
    })}
    </>

    
    :''}
    
    </>
  );
}
