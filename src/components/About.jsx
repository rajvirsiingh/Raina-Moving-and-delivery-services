import React from "react";
import movingTruck from "../assets/man-loading-moving-truck.jpg";
const About = () => {
  return (
    <div className="about-container" id="about">
      <section>
        <img src={movingTruck} alt="Moving Truck" />
      </section>
      <section>
        <h2>About Raina Movers and Delivery services</h2>
        <p>
          Raina Movers is a leading moving company based in Brisbane and Gold
          Coast, Australia. With over a decade of experience in the industry, we
          specialize in providing top-notch residential and commercial moving
          services. Our mission is to make every move a smooth and hassle-free
          experience for our clients.
        </p>
        <p>
          At Raina Movers, we understand that moving can be a stressful time.
          That's why we offer comprehensive moving solutions tailored to meet
          the unique needs of each customer. From packing and loading to
          transportation and
        </p>
        <div className="about-icons-container">
          <div className="about-icons">
            <i className="fa fa-shield" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>100%</h3>
              <p>Insured Moves</p>
            </div>
          </div>
          <div className="about-icons">
            <i className="fa fa-users" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>1000+</h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="about-icons">
            <i className="fa fa-clock" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
          <div className="about-icons">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            <div className="about-icon-text">
              <h3>10 Years</h3>
              <p>Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
