import React, { useState } from "react";
import CheckoutStyle from "../Styles/Checkout.css";
const CheckOut = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1 className="text-center">Place Order</h1>
      <div className="checkout-row container w m-md-5 ">
        <div className="checkout-col-74 mx-5">
          <div className="checkout-container mx-5">
            <form action="" className="">
              <div className="checkout-row">
                <div className="checkout-col-50 ">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label for="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label for="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="checkout-row">
                    <div className="checkout-col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="checkout-col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label>
              <butron type="submit" className="btn btn-success">
                Place Order
              </butron>
            </form>
          </div>
        </div>
        <div className="checkout-col-23 text-center">
          <h1 className="w-md-75">Happy Eating</h1>
          <b className="w-25">Happy With Our Service Let Others Now</b>
          <h3 className="text-center">Give A shoutout</h3>

          <h4 className="text-center">Faboulus </h4>
          <b className="mx-5"><button
            className="btn btn-sm btn-warning mx-5"
            onClick={() => { setCount(count + 1) }}
          >
            Shoutout Hurrah <sup><b>({count})</b></sup>
          </button></b>
        </div>
        {/* <div className="checkout-col-25">
                                                <div className="checkout-container">
                                                    <h4>Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                                                    <p><a href="#">Product 1</a> <span className="checkout-price">$15</span></p>
                                                    <p><a href="#">Product 2</a> <span className="checkout-price">$5</span></p>
                                                    <p><a href="#">Product 3</a> <span className="checkout-price">$8</span></p>
                                                    <p><a href="#">Product 4</a> <span className="checkout-price">$2</span></p>
                                                    <hr/>
                                                        <p>Total <span className="checkout-price" style={{color:"black"}}><b>$30</b></span></p>
                                                </div>
                                            </div> */}
      </div>
    </div>
  );
};

export default CheckOut;
