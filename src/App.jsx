import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import logo from "./assets/logo-raina-movers.png";
function App() {
  return (
    <>
      <img src={logo} alt="Raina Movers Logo" className="logo" />
      <Header />
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
