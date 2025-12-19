import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p>
            "Raina Movers made my relocation so easy! Their team was
            professional and efficient."
          </p>
          <h4>- Sarah L.</h4>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
        </div>
        <div className="testimonial-card">
          <p>
            "Highly recommend Raina Brisbane Movers for anyone looking for
            reliable moving services in Brisbane."
          </p>
          <h4>- Mark D.</h4>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
        </div>
        <div className="testimonial-card">
          <p>
            "The movers were careful with my belongings and arrived on time.
            Great experience overall!"
          </p>
          <h4>- Emily R.</h4>
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
