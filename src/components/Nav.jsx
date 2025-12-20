import React, { useState } from "react";
import logo from "../assets/logo-raina-movers.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Raina Movers Logo" className="logo" />

      <ul className="nav-links">
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => scrollToSection("locations")}>Locations</li>
      </ul>

      <button className="quote-btn" onClick={() => scrollToSection("contact")}>
        Get a Quote
      </button>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : "hide"}`}>
        <p onClick={() => scrollToSection("services")}>Services</p>
        <p onClick={() => scrollToSection("about")}>About</p>
        <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
        <p onClick={() => scrollToSection("contact")}>Contact</p>
        <p onClick={() => scrollToSection("locations")}>Locations</p>

        <button onClick={() => scrollToSection("contact")}>Get a Quote</button>
      </div>
    </nav>
  );
};

export default Nav;
