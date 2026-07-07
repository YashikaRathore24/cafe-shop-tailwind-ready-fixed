import { useState } from "react";
import logo from "../../assets/logo.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./headers.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setBranchOpen(false);
  };

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

        {/* Mobile Navigation */}

        {menuOpen && (
          <nav className="nav active">

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#menu" onClick={closeMenu}>
              Menu
            </a>

            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <div className="mobile-branches">

              <h4>
                <FaMapMarkerAlt />
                Our Branches
              </h4>

              <a
                href="https://maps.google.com/?q=2/49+Chitrakoot+Gandhi+Path+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                📍 Chitrakoot
                <span>Near Mall of Jaipur</span>
              </a>

              <a
                href="https://share.google/SZhJYCbQ1Gwzesqxl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                📍 Nirman Nagar
                <span>Near Om Sweet</span>
              </a>

            </div>

          </nav>
        )}

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

          {/* Branch Dropdown */}

          <div className="branch-dropdown">

     <button
  type="button"
  className="visit-btn desktop-visit"
  onClick={() => setBranchOpen(!branchOpen)}
>
  Our Branches
  <FaChevronDown className="branch-arrow" />
</button>
            {branchOpen && (

              <div className="branch-menu">

                <a
                  href="https://maps.google.com/?q=2/49+Chitrakoot+Gandhi+Path+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <div className="branch-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <h4>Chitrakoot</h4>

                    <p>Near Mall of Jaipur</p>

                  </div>

                </a>

                <a
                  href="https://share.google/SZhJYCbQ1Gwzesqxl"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <div className="branch-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <h4>Nirman Nagar</h4>

                    <p>Near Om Sweet</p>

                  </div>

                </a>

              </div>

            )}

          </div>

        </div>

        {/* Mobile Toggle */}

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