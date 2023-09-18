import React from "react";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import "../Styles/Home.css";
const WhyWeSection = () => {
  return (
    <div className="bgc-inserter">
      <section className="container-fluid why-section">
        <div className="row">
          <div className="col-md-6 why-hero mt-3">
            <img src={require("../Images/whydemo.png")} alt="" />
          </div>
          <div className="col-md-6 mt-5">
            <span className="vl "></span>
            <h2 style={{ textAlign: "right" }} className="mt-5">Hey Some Text</h2>
            <p style={{ textAlign: "right" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptatum sunt odio voluptatem pariatur recusandae,
              quis vitae voluptate quasi! Incidunt enim officiis quos, ut
              commodi ex soluta tempora in quaerat! Inventore odio fugit saepe
              libero eligendi eaque nihil sapiente sunt?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <span className="vl "></span>
            <h2 style={{ textAlign: "right" }} className="mt-5">Hey Some Text</h2>
            <p style={{ textAlign: "right" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus voluptatum sunt odio voluptatem pariatur recusandae,
              quis vitae voluptate quasi! Incidunt enim officiis quos, ut
              commodi ex soluta tempora in quaerat! Inventore odio fugit saepe
              libero eligendi eaque nihil sapiente sunt?
            </p>
          </div>
          <div className="col-md-6 why-hero mt-3">
            <img src={require("../Images/whydemo.png")} alt="" />
          </div>
        </div>
      </section>
      <section className="container-fluid bg-danger mt-4">
        <div className="row">
          <div className="col-md-4 mt-5">
            <Link to='/Menus' className="btn btn-lg btn-warning order-btn mt-5 ml-sm-5">
              Order Now
            </Link>
            <a href="" className="text-center">
              <h4>www.foodieslevish.com</h4>
            </a>
            <div className="icon-container d-flex justify-content-evenly">
              <i>fb</i>
              <i>twitter</i>
              <i>Gmail</i>
            </div>
          </div>
          <div className="col-md-8 mt-3 mb-5">
            <h1 className="text-center">foodiesLevish</h1>
            <p className="text-center text-warning">
              <b>Every Bite Fall You In Love</b>
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              asperiores, quae dolore officiis architecto iste quo laboriosam.
              Et, veniam molestiae?Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Provident veniam delectus obcaecati optio, quasi
              aliquam illo quidem rerum eveniet nam tempore. Quas minima ullam
              eaque?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWeSection;
