import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import {  Offline } from "react-detect-offline";
export default function Layout() {
  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  });
  return (
    <>
      <Navbar />

      <Outlet></Outlet>
      <div>
        <Offline>
          <div className="network">
            <i className="fas fa-wifi"></i> You Are Offline
          </div>
        </Offline>
      </div>
      <Footer/>
    </>
  );
}
