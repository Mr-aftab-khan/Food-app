import React, { useState } from "react";
import HomeStyle from "../Styles/Home.css";
import HeroSection from "../components/heroSection";
import Data from "../Assets/data";
import Pastas from "../Assets/pastaData";
import RichDeal from "../components/RichDeal";
import WhyWeSection from "../components/whyWeSection";
import Footer from "../components/footer";
const Home = () => {
  // console.log(menu)
  return (
    <div>
      <HeroSection />
      <hr />
      <h2 className="text-center">Pizza Serving</h2>
      <hr />
      <div className="container">
        <div className="row">
          {Data.map((menu) => {
            return (
              <section className="col-md-3 foood-list">
                <div className="food-container">
                  <h4 className="text-center">{menu.Name}</h4>
                  <img
                    src={menu.Image}
                    alt="food-image"
                    className="food-image"
                  />
                  <div className="food-overlay">
                    <div className="food-text">{menu.Decription}</div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <hr />
      <h2 className="text-center">Pasta Serving</h2>
      <hr />
      <div className="container">
        <div className="row">
          {Pastas.map((pasta) => {
            return (
              <section className="col-md-3 foood-list">
                <div className="food-container">
                  <h4 className="text-center">{pasta.Name}</h4>
                  <img
                    src={pasta.Image}
                    alt="food-image"
                    className="food-image"
                  />
                  <div className="food-overlay">
                    <div className="food-text">{pasta.Decription}</div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <hr />

      <h1 className="text-center">
        <button className="btn btn-danger  mt-3 mb-3">
          Rich Deals 24/7 x 12
        </button>
      </h1>
      <hr />
      <RichDeal />
      <hr />
      <h1 className="text-center bg-danger p-5">Wall Of Success</h1>
      <WhyWeSection />

    </div> //Wrapper
  );
};

export default Home;
