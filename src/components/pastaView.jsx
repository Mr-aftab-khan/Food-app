import React from "react";
import { Link, useParams } from "react-router-dom";
import items from "../Assets/pastaData";
import { useCart } from "react-use-cart";

const PastaView = () => {
  const { pastaId } = useParams();
  // console.log(pastaId)
  const pasta = items.find((pasta) => pasta.id === pastaId);
  // console.log(pasta);
  return <div>

  <h1>{pasta.Name}</h1>
  <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6">
          <img
            className="card-img-top mb-5 mb-md-0"
            src={pasta.Image}
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: BST-498</div>
          <h1 className="display-5 fw-bolder">{pasta.Name}</h1>
          <div className="fs-5 mb-5">
            <span className="text-decoration-line-through">$45.00</span>
            <span>${pasta.price}</span>
          </div>
          <p className="lead">{pasta.Decription} </p>
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
  <Link to="/pastas" className="btn btn-outline-dark flex-shrink-0">
    Back To pasta
  </Link>
  

</div>;
};

export default PastaView;
