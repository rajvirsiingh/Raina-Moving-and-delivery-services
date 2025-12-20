import React from "react";

const Contact = () => {
  return (
    <section className="quote-section" id="contact">
      <h2>Get Your Free Quote</h2>
      <p>Fill out the form below and we’ll get back to you within 24 hours</p>

      <div className="quote-container">
        <form className="quote-form">
          <h3>Request a Quote</h3>
          <p>Tell us about your moving needs</p>

          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email</label>
          <input type="email" placeholder="john@example.com" />

          <label>Phone Number</label>
          <input type="text" placeholder="(555) 123-4567" />

          <label>Moving Details</label>
          <textarea placeholder="Tell us about your move - dates, locations, size of move, etc."></textarea>

          <button type="submit">Submit Request</button>
        </form>

        <div className="contact-info">
          <div className="contact-card">
            <i className="fa fa-phone-square" aria-hidden="true"></i>
            <div>
              <h4>Phone</h4>
              <a href="#">(043) 108-6577</a>
            </div>
          </div>

          <div className="contact-card">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <div>
              <h4>Email</h4>
              <a href="#">sarabjtsngh@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <div>
              <h4>Office</h4>
              <p>
                123 Moving Street
                <br />
                Brisbane, QLD 4000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
