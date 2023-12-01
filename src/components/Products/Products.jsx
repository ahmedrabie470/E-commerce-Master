import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import { WishlistContext } from "../Wishlist/WishlistContext";

export default function Product() {
  let { addToCart } = useContext(CartContext);
  let { addToWishlist } = useContext(WishlistContext);
  let [search, setSearch] = useState("");

  let { isLoading, data } = useQuery("featuredProducts", getAllProducts);

  function getAllProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  async function addProductToCart(id) {
    let response = await addToCart(id);
    if (response.data.status === "success") {
      toast.success("product added successfully");
    } else {
      toast.error("Product to add failed");
    }
  }
  async function addProductToWishlist(id){
    let response  = await addToWishlist(id)
    if (response.data.status === "success") {
      toast.success("product added successfully to wishlist");
    } else {
      toast.error("Product to add failed");
    }
    }
    

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading-page mt-5  vh-100  d-flex justify-content-center  ">
          <InfinitySpin width="200" height={1000} color="rgb(24, 7, 109)" />
        </div>
      ) : (
        <>

          <div
            className="form-outline  d-flex justify-content-center align-items-center mt-5"
            data-mdb-input-init
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              id="form1"
              className="form-control rounded-5 w-50"
              placeholder="Search About Product Here"
              aria-label="Search"
            />
            <i className="fa-solid fa-magnifying-glass mx-2"></i>{" "}
          </div>
          <div className="container animate__animated  animate__fadeIn mt-5  py-2 ">
            <div className="row">
              {data?.data.data
                .filter((product) => {
                  return search.toLowerCase() === ""
                  ? product
                  : product.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
                })
                .map((product) => (
                  <div
                  key={product._id}
                  className="product col-md-2"
                  width={90}
                  >
                 
                  <Link  onClick={()=>addProductToWishlist(product._id)} className="fa-regular  fa-heart"></Link>
                    <Link to={`/productDetails/${product.id}`}>
                      <div className=" cursor-pointer animate__animated  animate__fadeIn  py-3 px-2">
                        <img
                          className="w-100 animate__animated  animate__fadeIn"
                          src={product.imageCover}
                          alt={product.title}
                        />
                        <div className="text-main font-sm fw-bolder mt-2">
                          {product.category.name}
                        </div>
                        <div className="text-main font-sm fw-bolder mt-2">
                          {product.title.split(" ").slice(0, 3).join(" ")}
                        </div>

                        <div className="d-flex  justify-content-between align-items-center  mt-3">
                          <span className="text-dark">{product.price} EGP</span>
                          <span className="text-main">
                            <i className="fas fa-star p-1 text-branch "></i>
                            {product.ratingsAverage}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      onClick={() => addProductToCart(product._id)}
                      className="btn bg-main  text-white w-100 btn-sm m-2"
                    >
                      Add To Cart
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
