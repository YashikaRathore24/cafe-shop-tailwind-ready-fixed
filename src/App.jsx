import "./App.css";

import Header from "./components/headers/Header";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Testinomal from "./components/testominal/Testinomal";
// import Reservation from "./components/reservation/Reservation";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
    
      <Header />
      <Home />
        <Contact />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <Testinomal />
    
      {/* <Reservation /> */}
      <Footer />
    </>
  );
}

export default App;