import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mnjaddlp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Thanks! We’ll contact you within 24 hours.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="quote-section" id="contact">
      <h2>Get Your Free Quote</h2>
      <p>Fill out the form below and we’ll get back to you within 24 hours</p>

      <div className="quote-container">
        <form className="quote-form" onSubmit={handleSubmit}>
          <h3>Request a Quote</h3>
          <p>Tell us about your moving needs</p>

          <label>Full Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Phone Number</label>
          <input type="text" name="phone" />

          <label>Moving Details</label>
          <textarea name="message" required />

          <button type="submit">Submit Request</button>

          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
