import axios from "axios";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import visa from "../../Assets/images/card-visa.svg";
import value from "../../Assets/images/valu_v2.svg";
import master from "../../Assets/images/card-mastercard.svg";
import cash from "../../Assets/images/cod-en.svg";
import appStore from "../../Assets/images/app-store.svg";
import Huawei from "../../Assets/images//Huawei-icon.png";
import googlePlay from "../../Assets/images/google-play.svg";
export default function Footer() {
  function allSubCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`);
  }
  let { isLoading, data } = useQuery("subcategories", () => allSubCategories());
  return (
    <>
      {isLoading ? (
        <>
          <div className="loading-page w-100  vh-100 d-flex align-items-center justify-content-center ">
            <InfinitySpin width="200" color="rgb(24, 7, 109)" />
          </div>{" "}
        </>
      ) : (
        <div className="container-fluid layerFooter text-light p-3 mt-4">
          <div className="row text-branch  ">
            <div className="col-md-2 ">
              <h6>ELECTRONICS</h6>
            </div>
            <div className="col-md-2 ">
              <h6>FASHION</h6>
            </div>{" "}
            <div className="col-md-2 ">
              <h6>HOME AND KITCHEN</h6>
            </div>{" "}
            <div className="col-md-2 ">
              <h6>BEAUTY</h6>
            </div>{" "}
            <div className="col-md-2 ">
              <h6>KIDS, BABY & TOYS</h6>
            </div>{" "}
            <div className="col-md-2 ">
              <h6>ELECTRONICS</h6>
            </div>
            {data?.data.data.map((category) => {
              return (
                <>
                  {
                    <div
                      key={category._id}
                      className="col-md-2 p-2 cursor-pointer product"
                    >
                      <h6 className=" text-light py-2 ">{category.name}</h6>
                    </div>
                  }
                </>
              );
            })}
            <div  className="p-5  d-flex justify-content-around">
              <div className="text-center ">
                <h6 className="mb-3">CONNECT WITH US</h6>
                <div className=" d-flex align-items-center">
                  <div className="nav-item text-light d-flex align-items-center ">
                    <i className="p-2 rounded-circle bg-light text-main fab fa-facebook mx-3 icon"></i>
                    <i className="p-2 rounded-circle bg-light text-main fab fa-instagram mx-3 icon"></i>
                    <i className="p-2 rounded-circle bg-light text-main fab fa-twitter mx-3 icon"></i>
                    <i className="p-2 rounded-circle bg-light text-main fab fa-youtube mx-2 icon"></i>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h6>SHOP ON THE GO</h6>
                <img
                  className="m-1 p-2 cursor-pointer"
                  src={googlePlay}
                  alt=""
                />
                <img className="m-1 p-2 cursor-pointer" src={appStore} alt="" />
                <img
                  className="m-1 p-2 cursor-pointer "
                  width={100}
                  src={Huawei}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid bg-main  ">
        <div className="row text-light d-flex align-items-center">
          <div className="col-md-3">
            <div className="nav  d-flex align-items-center justify-content-start ">
              <div className=" text-light  d-flex align-items-center ">
                <h6 className="cursor-pointer">
                  © 2023 3k. All Rights Reserved
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-2 "></div>
          <div className="col-md-7 ">
            <div className="nav align-items-center text-light   justify-content-end  p-4 ">
              <div>
                <img className="m-1 p-2 cursor-pointer" src={visa} alt="" />
                <img className="m-1 p-2 cursor-pointer" src={value} alt="" />
                <img className="m-1 p-2 cursor-pointer" src={master} alt="" />
                <img className="m-1 p-2 cursor-pointer" src={cash} alt="" />
              </div>

              <h6 className="p-2 disabled cursor-pointer">Terms of Use</h6>

              <h6 className="p-2 disabled cursor-pointer">Terms of Sale</h6>

              <h6 className="p-2 disabled cursor-pointer">Privacy Policy</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
