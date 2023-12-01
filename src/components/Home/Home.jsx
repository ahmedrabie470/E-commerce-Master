
import { Link } from "react-router-dom";
import ProductSlider from "../ProductSlider/ProductSlider";
export default function Home() {
  return (
    <>
      <div className="home">


      <div className="layer text-center d-flex animate__animated  animate__fadeIn justify-content-center align-items-center">
<div className="row d-flex justify-content-center align-items-center ">
        <div className="col-md-6">
        <ProductSlider/>
        </div>
        <div className=" col-md-6  layer-content ">

          <div><h1 className="text-light">One-Of-A-Kind items</h1></div>
          <div><h5 className="text-light ">Easy, Fun Shopping</h5></div>
          <Link to="/products" className="btn bg-main mt-2 brdr-main text-light">Shope Now</Link>
          </div>

        </div>
</div>
      </div>     
      
    </>
  );
}
