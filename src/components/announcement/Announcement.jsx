import "./Announcement.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Announcement() {
  return (
    <div className="announcement">

      <div className="announcement-container">

        <div className="announcement-text">
          <span>🎉 Grand Opening</span>

          <span className="dot"></span>

          <span>
            🤝 We're Open for Collaborations
          </span>

          <span className="hide-mobile">
            Food Bloggers • Vloggers • Influencers Welcome
          </span>
        </div>

        <div className="announcement-buttons">

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>

        </div>

      </div>

    </div>
  );
}