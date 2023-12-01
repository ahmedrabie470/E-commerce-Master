import React from "react";
import slide1 from "../../Assets/images/WhatsApp Image 2023-11-27 at 6.06.12 PM (2).jpeg"
import slide2 from "../../Assets/images/WhatsApp Image 2023-11-27 at 6.06.12 PM (2).jpeg"
import slide3 from "../../Assets/images/WhatsApp Image 2023-11-27 at 6.06.12 PM.jpeg"

export default function ProductSlider() {
  
  return (
    <>
    <div className="w-100 mx-3  container  mt-0">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner rounded-3">
    <div className="carousel-item active ">
            <img src={slide1} className="d-block  w-100" alt="..."/>

    </div>
    <div className="carousel-item">
            <img src={slide3} className="d-block w-100 " alt="..."/>

    </div>
    <div className="carousel-item">
            <img src={slide1} className="d-block w-100 " alt="..."/>

    </div>
  </div>

</div>
    </div>
       
    </>
  );
}
