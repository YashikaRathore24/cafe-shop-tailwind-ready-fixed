import "./contact.css";
import cafeImg from "../../assets/image5.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      {/* Background Decorations */}

      <div className="flower flower1"></div>
      <div className="flower flower2"></div>
      <div className="flower flower3"></div>

      <div className="leaf leaf1"></div>
      <div className="leaf leaf2"></div>

      {/* ===========================
          HERO SECTION
      =========================== */}

      <div className="contact-wrapper">

        {/* LEFT */}

        <div className="contact-left">

          <span className="small-title">
            ☕ WELCOME TO MODI JI CHAI WALE
          </span>

          <h2>
            Visit Us &
            <br />
            <span>Enjoy Every Sip</span>
            <span className="cup"> ☕</span>
          </h2>

          <p>
            Whether you're craving a hot cup of chai,
            refreshing mocktails or delicious snacks,
            we're ready to welcome you with a warm smile
            and a peaceful garden ambience.
          </p>

          {/* ===========================
              INFO GRID
          =========================== */}

          <div className="info-grid">

                        {/* ADDRESS */}

            <div className="mini-card">

              <div className="mini-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Address</h3>

              <p>
                2/49 Chitrakoot,
                <br />
                Gandhi Path Road,
                <br />
                Near Mall of Jaipur
              </p>

            </div>

            {/* PHONE */}

            <div className="mini-card">

              <div className="mini-icon">
                <FaPhoneAlt />
              </div>

              <h3>Phone</h3>

              <p>
                +91 6375883081
              </p>

            </div>

            {/* OPEN DAILY */}

            <div className="mini-card">

              <div className="mini-icon">
                <FaClock />
              </div>

              <h3>Open Daily</h3>

              <p>
                10:00 AM –
                <br />
                11:00 PM
              </p>

            </div>

          </div>

          {/* ===========================
              SOCIAL BUTTONS
          =========================== */}

          <div className="button-group">

            <a
              href="https://wa.me/916375883081"
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp"
            >
              <FaWhatsapp />

              WhatsApp

              <FaArrowRight className="btn-arrow" />

            </a>

            <a
              href="https://www.instagram.com/modijichaiwale__/"
              target="_blank"
              rel="noreferrer"
              className="btn instagram"
            >
              <FaInstagram />

              Instagram

              <FaArrowRight className="btn-arrow" />

            </a>

          </div>

        </div>

        {/* ===========================
            RIGHT IMAGE
        =========================== */}

        <div className="contact-right">

          <div className="image-card">

            <img
              src={cafeImg}
              alt="Modi Ji Chai Wale"
            />

            <div className="image-overlay">

              <h3>
                Experience Every Sip ☕
              </h3>

              <p>
                Fresh Chai • Mocktails • Snacks
              </p>

            </div>

          </div>

        </div>

      </div>

            {/* ==================================
              FIND US SECTION
      =================================== */}

      <div className="location-wrapper">

        {/* LEFT CARD */}

        <div className="location-card">

          <div className="location-content">

            <div className="location-icon">
              <FaMapMarkerAlt />
            </div>

            <h2>Find Us</h2>

            <div className="divider"></div>

            <p>
              We're just a few minutes from
              <br />
              Mall of Jaipur.
            </p>

            <a
              href="https://maps.google.com/?q=Modi+Ji+Chai+Wale,+Jaipur"
              target="_blank"
              rel="noreferrer"
              className="location-btn"
            >
              Get Directions
              <FaArrowRight />
            </a>

          </div>

        </div>

        {/* GOOGLE MAP */}

        <div className="location-map">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Modi+Ji+Chai+Wale,+2/49,+Chitrakoot,+Gandhi+Path+Rd,+near+Mall+of+Jaipur,+Jaipur,+Rajasthan+302021&output=embed"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
};

export default Contact;