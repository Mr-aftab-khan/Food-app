import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../Styles/singleProduct.css";
import "../Styles/Menu.css";
import items from "../Assets/data";
import { useCart } from "react-use-cart";
// import PastaView from "../components/pastaView";
import PastaDetail from "../components/pastaDetail";

const Menu = () => {
  const { addItem } = useCart();

  const [showPizza, setShowPizza] = useState(true);
  const [showPasta, setShowPasta] = useState(true);
  const [showDeserts, setShowDeserts] = useState(true);
  return (
    <div className="border">
      <div className="items-section w-100">
        <h1 className="text-center mt-2 mb-2">Pizza Topping</h1>
        <div className="d-flex flex-wrap">
          {items.map((item) => {
            return (
              <div className="single-card" key={item.id}>
                <Link to={`/menu/${item.id}`} className="decoration-remover">
                  <img src={item.Image} alt="Denim Jeans" className="w-100" />
                  <h1>{item.Name}</h1>
                  <p className="single-price">${item.price}</p>
                  <p className="single-card-decs">{item.Decription}</p>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    addItem(item);
                    alert("Product Added To Cart");
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
        {/* <PastaView /> */}
        <PastaDetail />
      </div>
      <h1 className="text-center mt-2 mb-2">Choose Yourself</h1>
      <section className="choice-section ">
        <div className="d-flex justify-content-between col-3  p-2">
          <button
            className="btn btn-warning"
            onClick={() => {
              setShowPasta(true);
              setShowDeserts(true);
              setShowPizza(true);
            }}
          >
            All
          </button>
          <button
            className="btn btn-warning "
            onClick={() => {
              setShowPasta(false);
              setShowDeserts(false);
              setShowPizza(true);
            }}
          >
            Pizza
          </button>
          <button
            className="btn btn-warning ml-"
            onClick={() => {
              setShowPizza(false);
              setShowDeserts(false);
              setShowPasta(true);
            }}
          >
            Pastas
          </button>
          <button
            className="btn btn-warning ml-"
            onClick={() => {
              setShowPizza(false);
              setShowDeserts(true);
              setShowPasta(false);
            }}
          >
            Deserts
          </button>
        </div>
        {showPizza && (
          <div className="card-group  flex-wrap ">
            <div className="card">
              <img
                src={require("../Images/pizza5.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Royal Supreme</h5>
                <p className="card-text">
                  Ingredients:Panner,Red Suace,Spicy,Thin Crust.{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={require("../Images/pizza2.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Behari Kbab</h5>
                <p className="card-text">
                  Ingredients:Panner,Red Suace,Spicy,Thin Crust
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={require("../Images/pizza4.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body  text-center">
                <h5 className="card-title">Dominos</h5>
                <p className="card-text">
                  Ingredients:Panner,Red Suace,Spicy,Thin Crust{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        )}

        {showPasta && (
          <div className="card-group flex-wrap">
            <div className="card ">
              <img
                src={require("../Images/pasta5.webp")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Behari Pasta</h5>
                <p className="card-text">
                  Ingredients:Panner,Red Suace,Spicy,Thin Crust
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={require("../Images/pasta4.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Pepsico Powered Pasta</h5>
                <p className="card-text">
                  Ingredients:Panner,Red Suace,Spicy,Thin Crust
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={require("../Images/pasta3.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Cokinia Pasta</h5>
                <p className="card-text">
                  Ingredients:Panner,Red Suace,Spicy,Thin Crust
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        )}

        {showDeserts && (
          <div className="card-group flex-wrap">
            <div className="card">
              <img
                src={require("../Images/deal3.webp")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Desert Deal 1</h5>
                <p className="card-text">
                  Molten Lava,White Angle Cake,Brownies,Pasta,Coke{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={require("../Images/deal8.jpeg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Desert Deal 2</h5>
                <p className="card-text">
                  Molten Lava,White Angle Cake,Brownies,Pasta,Coke{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={require("../Images/deal9.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Desert Deal 3</h5>
                <p className="card-text">
                  Molten Lava,White Angle Cake,Brownies,Pasta,Coke{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    T & C Are Applied Copyright
                  </small>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-outline-dark flex-shrink-0"
                  // type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Menu;
