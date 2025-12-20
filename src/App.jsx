import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
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
