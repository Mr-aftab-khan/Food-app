import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="container-fluid  mt-3 mb-0">
        <div className="row d-flex">
          <div className="col-md-4">
            <img
              src={require("../Images/pizza logo.avif")}
              className="w-75    "
              alt=""
            />
          </div>
          <div className="col-md-4 pt-5">
            <h2>Contact</h2>
            <ul>
              <li>+92-304-2203-12</li>
              <li>levishfood@foodPanda.com</li>
              <li>Hut#4th Floor#3 Mall Of Multan</li>
              <li>levish@foodies@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h2>Special Links</h2>
            <ul>
              <li>Menu</li>
              <li>Combo Offer</li>
              <li>Home Delivery</li>
              <li>Special Deals</li>
              <li>Reservation</li>
            </ul>
          </div>
        </div>
        
        <hr />
        <p className="text-center ">
          Copyright 2023-2026 by Refsnes Data. All Rights Reserved. Project is
          Powered by Legendary IT Team.
        </p>
        <hr />
      </section>
    </div>
  );
};

export default Footer;

