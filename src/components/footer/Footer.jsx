import "./footer.css";

import {
  Coffee,
  Heart,
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

        {/* LEFT */}

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

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
         <FaInstagram size={18} />
        </a>

        <a
          href="tel:+916375883081"
          aria-label="Phone"
        >
          <Phone size={18} />
        </a>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Location"
        >
          <MapPin size={18} />
        </a>

      </div>

        </div>

        {/* RIGHT */}

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

      {/* Small Social Icons */}

    

      <div className="copyright">
        © 2026 Modi Ji Chai Wale. All Rights Reserved.
      </div>

    </footer>
  );
}