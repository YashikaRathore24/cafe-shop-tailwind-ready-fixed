import "./footer.css";
import {
  Coffee,
  ChevronRight,
  Phone,
  MapPin,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const links = [
  "Home",
  "About",
  "Menu",
  "Gallery",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT: Brand & Socials */}
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-circle">
              <Coffee size={38} strokeWidth={2.2} />
            </div>
            <div>
              <h2>Modi Ji Chai Wale</h2>
              <div className="title-line">
                <span></span>
                ❤
                <span></span>
              </div>
            </div>
          </div>

          <p>
            Where pink floral charm meets green freshness.
            <br />
            Come for the chai... stay for the vibe.
          </p>

          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="tel:+916375883081" aria-label="Phone">
              <Phone size={18} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Location">
              <MapPin size={18} />
            </a>
          </div>
        </div>

        {/* MIDDLE: Our Branches */}
        <div className="footer-branches">
          <h3>Our Branches</h3>
          
          {/* Branch 1: Chitrakoot */}
          <div className="branch-item">
            <h4>Chitrakoot Branch</h4>
            <p>
              <MapPin size={14} className="inline-icon" />
              <span>
                2/49, Chitrakoot,
                <br />
                Gandhi Path Road,
                <br />
                Jaipur - 302021
              </span>
            </p>
            <span className="branch-hours">Timing: 10:00 AM - 11:00 PM</span>
          </div>

          {/* Branch 2: Nirman Nagar */}
          <div className="branch-item">
            <h4>Nirman Nagar Branch</h4>
            <p>
              <MapPin size={14} className="inline-icon" />
              <span>
                12, Aasha Vihar Colony,
                <br />
                Rani Sati Nagar, Nirman Nagar,
                <br />
                Jaipur - 302019
              </span>
            </p>
            <span className="branch-hours">Timing: 11:00 AM - 11:00 PM</span>
          </div>
        </div>

        {/* RIGHT: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {links.map((item) => (
              <li key={item}>
                <ChevronRight size={15} />
                <a href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="copyright">
        © 2026 Modi Ji Chai Wale. All Rights Reserved.
      </div>
    </footer>
  );
}