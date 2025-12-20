import React from "react";

const Services = () => {
  return (
    <section className="services-container" id="services">
      <h2>Our Services</h2>
      <p>Details about the services offered will go here.</p>
      <div className="services-list-container">
        <div className="service-item">
          <i className="fa fa-box" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Packing Services</h3>
            <p>
              We provide professional packing services to ensure your belongings
              are safe during the move.
            </p>
          </div>
        </div>

        <div className="service-item">
          <i className="fa fa-truck" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Transportation</h3>
            <p>
              We offer reliable transportation services to get your belongings
              to your new location on time.
            </p>
          </div>
        </div>

        <div className="service-item">
          <i className="fa fa-home" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Residential Moving</h3>
            <p>
              We specialize in residential moves, ensuring a smooth transition
              to your new home.
            </p>
          </div>
        </div>

        <div className="service-item">
          <i className="fa fa-building" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Commercial Moving</h3>
            <p>
              Our team is equipped to handle office relocations with minimal
              downtime for your business.
            </p>
          </div>
        </div>

        <div className="service-item">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Food Delivery</h3>
            <p>
              We provide prompt and reliable food delivery services to ensure
              your meals arrive fresh and on time.
            </p>
          </div>
        </div>
        <div className="service-item">
          <i className="fa fa-archive" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Package Handling</h3>
            <p>
              We offer secure and efficient package handling services for all
              your shipping needs.
            </p>
          </div>
        </div>
        <div className="service-item">
          <i className="fa fa-trash" aria-hidden="true"></i>
          <div className="service-item-text">
            <h3>Garbage Removal</h3>
            <p>
              Declutter your space with our reliable garbage removal services.
              We handle waste disposal efficiently and responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
