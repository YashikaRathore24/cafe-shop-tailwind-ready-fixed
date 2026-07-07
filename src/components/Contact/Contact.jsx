import "./contact.css";

import nirmanImg from "../../assets/cafe_2.png";
import chitrakootImg from "../../assets/image_9.jpeg";

import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      {/* Background Blur */}
      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>
      <div className="bg-circle bg3"></div>

      {/* ================= BRANCHES ================= */}

      <div className="branches">
        <div className="branch-heading">
          <span className="section-tag">📍 OUR BRANCHES</span>

          <h2>Visit Our Cafés</h2>

          <p>
            Enjoy the same delicious chai, snacks and warm ambience at both of
            our Jaipur locations.
          </p>
        </div>

        <div className="branches-grid">
          {/* ================= CHITRAKOOT ================= */}

          <div className="branch-card">
            <div className="branch-image">
              <img src={chitrakootImg} alt="Chitrakoot Branch" />

              <div className="location-tag">
                <FaMapMarkerAlt />
                CHITRAKOOT
              </div>
            </div>

            <div className="branch-content">
              <div className="branch-row">
                <div className="circle-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3>
                    2/49, Chitrakoot,
                    <br />
                    Gandhi Path Road,
                    <br />
                    Jaipur - 302021
                  </h3>
                </div>
              </div>

              <div className="divider"></div>

              <div className="time-row">
                <FaClock />
                <span>10:00 AM – 11:00 PM</span>
              </div>

              <div className="branch-buttons">
                <a
                  href="https://maps.google.com/?q=Modi+Ji+Chai+Wale+Chitrakoot+Jaipur"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  <FaLocationArrow />
                  Directions
                </a>

                <a
                  href="https://wa.me/916375883081"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  href="https://instagram.com/modijichaiwale__"
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-btn"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* ================= NIRMAN NAGAR ================= */}

          <div className="branch-card">
            <div className="branch-image">
              <img src={nirmanImg} alt="Nirman Nagar Branch" />

              <div className="location-tag">
                <FaMapMarkerAlt />
                NIRMAN NAGAR
              </div>
            </div>

            <div className="branch-content">
              <div className="branch-row">
                <div className="circle-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3>
                    12, Aasha Vihar Colony,
                    <br />
                    Rani Sati Nagar,
                    <br />
                    Nirman Nagar,
                    <br />
                    Jaipur - 302019
                  </h3>
                </div>
              </div>

              <div className="divider"></div>

              <div className="time-row">
                <FaClock />
                <span>10:00 AM – 11:00 PM</span>
              </div>

              <div className="branch-buttons">
                <a
                  href="https://maps.google.com/?q=Modi+Ji+Chai+Wale+Nirman+Nagar+Jaipur"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  <FaLocationArrow />
                  Directions
                </a>

                <a
                  href="https://wa.me/916375883081"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

                <a
                  href="https://instagram.com/modijichaiwale__"
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-btn"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;