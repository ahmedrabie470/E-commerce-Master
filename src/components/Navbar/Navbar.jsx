import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/Screenshot 2023-11-26 192642.png";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Navbar() {
  let { userToken, setUserToken } = useContext(UserContext);

  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/Login");
  }
  return (
    <nav className="navbar navbar-expand-lg  bg-main text-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          <img
            className="m-0 py-0 rounded-1  shadow-lg"
            src={logo}
            width={150}
            alt="3k store"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userToken !== null ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/Category"
                  >
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/Products"
                  >
                    product
                  </Link>
                </li>

              </>
            ) : (
              ""
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {userToken !== null ? (
              <>
             <div className="d-flex justify-content-center align-items-center">
               <Link  to={'/wishlist'} className="fa-regular fa-heart   text-light"></Link>
               <Link to={'/wishlist'} className="fw-bold mx-2 text-light">wishlist</Link>

               <Link  to={'/cart'}  className="fa-solid fa-cart-shopping text-light mx-2">  </Link>
               <Link to={'/cart'} className="fw-bold text-light">cart</Link>
             <li className="nav-item">
                  <span
                    onClick={() => logout()}
                    className="nav-link rounded-5 mx-2 px-3 logout text-main bg-light active cursor-pointer"
                    aria-current="page"
                  >
                    Logout
                  </span>
                </li>
             </div>
               
              </>
            ) : (
              <>
                <li className="nav-item ">
                  <Link
                    className="nav-link rounded-5 mx-2 px-3 logout text-darkpro bg-light active"
                    aria-current="page"
                    to="/Login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link rounded-5 mx-2 px-3 logout text-dark bg-light active"
                    aria-current="page"
                    to="/Register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
