import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { Bootstrap } from "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { CartProvider } from "react-use-cart";
const Navbar = () => {
  return (
    <CartProvider>
      <nav className="navbar navbar-expand-lg  bg-danger">
        <div className="container-fluid  text-white">
          <Link className="navbar-brand" to="/">
            <img
              src={require("../Images/pizza logo.avif")}
              width={"100px"}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item  text-white">
                <Link className="nav-link  text-white active  text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/Menus">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/Contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  text-white" to="/MyCart">
                  <FaCartShopping style={{color:"gray"}} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </CartProvider>
  );
};
<script
  src={require("../../node_modules/bootstrap/dist/js/bootstrap")}
></script>;

export default Navbar;
