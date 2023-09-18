import React from "react";
import AboutStyle from "../Styles/About.css";
const About = () => {
  return (
    <div className="container-fluid w-100 mb-2">
      <div className="about-container">
        <img
          src={require("../Images/herobanner.jpg")}
          alt="Snow"
          className="w-100"
        />
        <div className="about-centered">
          <h1 color="#dc3545">We Are Best Out Of Bests</h1>
        </div>
        <section className="event-section">
          <div className="main">
            <div className="about-row">
              <div className="about-column">
                <div className="about-content">
                  <img
                    src={require("../Images/past2.jpg")}
                    alt="Mountains"
                    className="w-100"
                  />
                  <h3>OutDoor Setup</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
              <div className="about-column">
                <div className="about-content">
                  <img
                    src={require("../Images/past2.jpg")}
                    alt="Lights"
                    className="w-100"
                  />
                  <h3>Event Booking</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
              <div className="about-column">
                <div className="about-content">
                  <img
                    src={require("../Images/past2.jpg")}
                    alt="Nature"
                    className="w-100"
                  />
                  <h3>Ready Made</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
              <div className="about-column">
                <div className="about-content">
                  <img
                    src={require("../Images/past2.jpg")}
                    alt="Mountains"
                    className="w-100"
                  />
                  <h3>Special Delivery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatibus sea ei, at tantas oporteat nam.
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-content">
              <img
                src={require("../Images/herobanner.jpg")}
                alt="Bear"
                className="w-100"
              />
              <h3>Taste Redefine</h3>
              <p>
                Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
                necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor
                sit amet, tempor prodesset eos no.
              </p>
              <p>
                Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus
                necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor
                sit amet, tempor prodesset eos no.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* ================================Two Side Div============== */}
      <section className="container-fluid ">
        <div className="row">
          <h2 className="text-center bg-danger mt-2">Some Words About Us</h2>
          <div className="card mb-3" style={{ maxWidth: "540px;" }}>
            <div className="row g-0 ">
              <div className="col-md-6">
                <img
                  src={require("../Images/herobanner.jpg")}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-6 ">
                <div className="card-body text-center">
                  <h5 className="card-title">Elite Taset With Best and Comfort hike</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error distinctio animi, harum, omnis earum, ducimus hic natus suscipit fugiat sint quas aliquid laborum accusamus.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Eat what Suits You
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: "540px;" }}>
            <div className="row g-0 ">
              <div className="col-md-6 ">
                <div className="card-body text-center">
                  <h5 className="card-title">World Class Chef</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, veritatis animi sit consequuntur odio similique doloribus. Odio perferendis tenetur nisi nemo voluptatum perspiciatis nam sunt!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      For You For Your Whole Gathering
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={require("../Images/herobanner.jpg")}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Chinese ,Fast, and Buffet Dishes </h5>
              <p className="card-text ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt rerum delectus voluptatum placeat blanditiis quidem in dolore expedita inventore molestiae.
              </p>
              <p className="card-text">
                <small className="text-muted">Just ON A Click Just On Your Table</small>
              </p>
            </div>
            <img
              src={require("../Images/buffet.webp")}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
