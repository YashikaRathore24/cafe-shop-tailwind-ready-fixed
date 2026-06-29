import { useState } from "react";
import logo from "../../assets/logo.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Headers.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <a href="#home" className="logo-wrap">
          <img src={logo} alt="Modi Ji Chai Wale" className="logo-img" />

          <div className="logo-content">
            <h2 className="logo-text">Modi Ji Chai Wale</h2>
            <p className="logo-tag">Tea • Snacks • Mocktails</p>
          </div>
        </a>

        {/* Navigation */}
        {menuOpen &&
        
          <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            className="visit-btn mobile-visit"
            onClick={closeMenu}
          >
            Visit Us
          </a>
        </nav>
        }
      

        {/* Right Side */}
        <div className="header-right">

          <a
            href="https://wa.me/916375883081"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/modijichaiwale__"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
          >
            <FaInstagram />
          </a>

          <a href="#contact" className="visit-btn desktop-visit">
            Visit Us
          </a>

        </div>

        {/* Mobile Menu Icon */}

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
};

export default Header;