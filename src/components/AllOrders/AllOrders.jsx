import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode"
export default function AllOrders() {
    let [orders , setOrders] = useState(null) 
    let encodedToken = localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken)
    let userId = decodedToken.id

    async function getAllOrders(){
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
        setOrders(data)
        console.log(data);
      }
      
      useEffect(()=>{getAllOrders()},[])
  return (
    <>
     <div className="container">
              <div className="row  d-flex mt-5">
    {orders?.map((orders)=>{ 
      console.log(orders);
      return( <div key={orders._id} className="container d-flex">
           
              <div className="col-md-8 ">
              <div className="d-flex justify-content-between">
                <div className="text-main">
                {orders.cartItems.map((i)=>{
                  return(
                    <>
                      <img className='w-25' src={i.product.imageCover} alt="" />
                      <h4 className='p-2'>{i.product.title}</h4>
                    </>
                  )})}
                  </div>
                  
                </div>
                <h4 className='p-2 text-main'>Tax Price : {orders.taxPrice}</h4>
                <h4 className=" p-2 text-main">Shipping Price : {orders.shippingPrice}</h4>
                  <h4 className="text-main p-2">
                  Payment Method Type : {orders.paymentMethodType} 
                  </h4>
                <h4 className=" p-2 text-branch ">
                Total Order Price : {orders.totalOrderPrice}
                </h4>
                  
                
              </div>
              <div className="col-md-4 text-branch">
                  <h4 className='mb-3'>Customer Information</h4>
                <h5 className="text-main">
                customer name : {orders.user.name}
                  </h5>
                    <h5 className='text-main'>
                    email: {orders.user.email}
                    </h5>
                  </div>
            </div>
            
           )
          })}
       </div>
       </div>

    
    </>
  )
}
