import axios from "axios";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  let params = useParams();

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  let { isLoading, data } = useQuery("productDetails", () =>
    getProductDetails(params.id)
  );

  return (
    <>
      {isLoading ? (
        <>
          <div className="loading-page w-100 vh-100 d-flex justify-content-center align-items-center">
            <InfinitySpin width="200" color="rgb(24, 7, 109)" />
          </div>
        </>
      ) : (
        <>
          <div key={data?._id}  className="container pt-5 vh-100 animate__animated  animate__fadeIn text-main mt-5">
            <div className="row align-items-center">
              <div  className="col-md-3 ">
                <img
                  className="w-100"
                  src={data?.data.data.imageCover}
                  alt={data?.data.data.title}
                />
              </div>
              <div key={data?.data.data._id} className="col-md-9 ">
                <h1>{data?.data.data.title}</h1>
                <h1 className="h5">{data?.data.data.description}</h1>
                <h6 className="h5 text-branch ">
                  {data?.data.data.category.name}
                </h6>
                  <h6 className="text-main">
                    Price : {data?.data.data.price} EGP
                  </h6>
                <div className="d-flex justify-content-between">
                <h6 className="text-main">
                    Rating Quantity  : {data?.data.data.ratingsQuantity} EGP
                  </h6>
                  <span>
                    {" "}
                    <i className="fas fa-star rating-color">
                      {data?.data.data.ratingsAverage}
                    </i>
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
