import React from "react";

const Header = () => {
  return (
    <header>
      <section>
        <h1>
          Your Trusted Moving Company for Seamless Relocations and Reliable
          Delivery Services in Brisbane and Gold Coast.
        </h1>
        <button
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("contact").offsetTop,
              behavior: "smooth",
            })
          }
        >
          Get a Quote
        </button>
      </section>
    </header>
  );
};

export default Header;
