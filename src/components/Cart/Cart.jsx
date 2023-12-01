import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";


export default function Cart() {
  let { getUserCartItems  , removeItem , updateProductCount} = useContext(CartContext);
  let [cartDetails, setCartDetails] = useState(null);

  async function getCart() {
    let { data } = await getUserCartItems();
    setCartDetails(data);
  }
  
  
  async function deleteFromCart(id) {
    let {data}  = await removeItem(id);
    setCartDetails(data);
    
  }
  async function updateCount(id , count) {
    let {data}  = await updateProductCount(id , count);
    setCartDetails(data);
    
  }
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {cartDetails ? (
        <div  className="w-75 mx-auto p-5 bg-main-light mt-5 animate__animated  animate__fadeIn">
          <h3>Shopping Cart </h3>
          <h4 className="h6 text-main fw-bolder">
            Cart Items :{cartDetails.numOfCartItems}{" "}
          </h4>
          <h4 className="h6 text-branch fw-bolder">
            Total Cart Price : {cartDetails.data.totalCartPrice} EGP{" "}
          </h4>
          
          {cartDetails?.data?.products.map((product) => (
            <div key={product._id} className="row border-bottom  py-2 px-2  ">
              <div className="col-md-1">
                <img
                  className="w-100"
                  src={product.product.imageCover}
                  alt="productImage"
                  />
              </div>

              <div   className="col-md-11">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="h6">
                      {product.product.title.split(" ").slice(0, 3).join(" ")}
                    </h4>
                    <h4 className="h6 ">{product.price} :EGP</h4>
                  </div>
                  <div>
                    <button onClick={()=> updateCount(product.product.id , product.count +1)} className="btn bg-main btn-brdr-main p-1 mx-2 text-light">+</button>
                    <span>{product.count}</span>
                 
                    <button onClick={()=> updateCount(product.product.id , product.count -1)} className="btn bg-main btn-brdr-main p-1 mx-2 text-light">-</button>
                  </div>
                </div>
                <span className="btn  text-light ">
                  <i onClick={()=>deleteFromCart(product.product.id)} className="text-branch fas fa-trash-can"></i>{" "}
                </span>

              </div>
            </div>
          ))}
          <Link  to={'/Address'} className="btn bg-main w-25  p-1 mt-4 text-light">Online payment</Link>
        </div>
      ) : (
        <div className="loading-page w-100 vh-100 d-flex justify-content-center align-items-center">
        <InfinitySpin width="200" color="rgb(24, 7, 109)" />
      </div>
      )}
    </>
  );
}
