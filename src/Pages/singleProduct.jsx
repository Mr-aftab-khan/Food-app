import React from "react";
import { Link, useParams } from "react-router-dom";
import Menus from "../Assets/data";
import { useCart } from "react-use-cart";
const SingleProduct = () => {
  const { menuId } = useParams();
  const menu = Menus.find((menu) => menu.id === menuId);
  // console.log(menu)
  return (
    <div>

      <h1>{menu.Name}</h1>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={menu.Image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{menu.Name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$45.00</span>
                <span>${menu.price}</span>
              </div>
              <p className="lead">{menu.Decription} </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                  style={{ maxWidth: "3rem" }}
                />
                <Link
                to='/Checkout'
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to="/Menus" className="btn btn-outline-dark flex-shrink-0">
        Back To Menu
      </Link>
      

    </div>
  );
};

export default SingleProduct;
