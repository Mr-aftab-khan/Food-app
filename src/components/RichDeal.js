import React from "react";
import { BrowserRouter as Router ,Routes ,Route ,Link } from "react-router-dom";
const RichDeal = () => {
  return (
    <div>
      <div className="deal-row">
        <div className="deal-column">
          <div className="deal-card">
            <img
              src={require("../Images/deal3.webp")}
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="deal-container">
              <h2>Deluxe Offer</h2>
              <p className="deal-title">Valid For only Card Holder</p>
              <ul>
                <li>50% Off On every Pizza</li>
                <li>Free Home Delivery</li>
                <li>Suaces</li>
              </ul>
              <p>Terms & Conditions are applied</p>
              <p>
              <Link to='/Checkout'><button className="deal-button">Order Now (35$)</button></Link>
              </p>
            </div>
          </div>
        </div>

        <div className="deal-column">
          <div className="deal-card">
            <img
              src={require("../Images/deal1.jpg")}
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="deal-container">
              <h2>2 Person Deal</h2>
              <p className="deal-title">Only Dine In</p>
              <ul>
                <li>2 Medium Pizza</li>
                <li>2 Tin Coke</li>
                <li>1 Medium Fries</li>
              </ul>
              <p>Terms & Conditions are applied</p>
              <p>
              <Link to='/Checkout'><button className="deal-button">Order Now (35$)</button></Link>
              </p>
            </div>
          </div>
        </div>

        <div className="deal-column">
          <div className="deal-card">
            <img
              src={require("../Images/deal2.jpg")}
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="deal-container">
              <h2>Super Saver
              </h2>
              <p className="deal-title">Only Dine In</p>
              <ul>
                <li>Large Thin Crust Pizza</li>
                <li>1.5 Ltr Coke</li>
                <li>Suaces + 6 Wings</li>
              </ul>
              <p>Terms & Conditions are applied</p>
              <p>
                <Link to='/Checkout'><button className="deal-button">Order Now (35$)</button></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="deal-row">
        <div className="deal-column">
          <div className="deal-card">
            <img
              src={require("../Images/deal5.jpg")}
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="deal-container">
              <h2>Deluxe Offer</h2>
              <p className="deal-title">Valid For only Card Holder</p>
              <ul>
                <li>50% Off On every Pizza</li>
                <li>Free Home Delivery</li>
                <li>Suaces</li>
              </ul>
              <p>Terms & Conditions are applied</p>
              <p>
              <Link to='/Checkout'><button className="deal-button">Order Now (35$)</button></Link>
              </p>
            </div>
          </div>
        </div>

        <div className="deal-column">
          <div className="deal-card">
            <img
              src={require("../Images/deal7.webp")}
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="deal-container">
              <h2>2 Person Deal</h2>
              <p className="deal-title">Only Dine In</p>
              <ul>
                <li>2 Medium Pizza</li>
                <li>2 Tin Coke</li>
                <li>1 Medium Fries</li>
              </ul>
              <p>Terms & Conditions are applied</p>
              <p>
              <Link to='/Checkout'><button className="deal-button">Order Now (35$)</button></Link>
              </p>
            </div>
          </div>
        </div>

        <div className="deal-column">
          <div className="deal-card">
            <img
              src={require("../Images/deal8.jpeg")}
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="deal-container">
              <h2>Crust Lover</h2>
              <p className="deal-title">Only Dine In</p>
              <ul>
                <li>Large Thin Crust Pizza</li>
                <li>1.5 Ltr Coke</li>
                <li>Suaces + 6 Wings</li>
              </ul>
              <p>Terms & Conditions are applied</p>
              <p>
              <Link to='/Checkout'><button className="deal-button">Order Now (35$)</button></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichDeal;
