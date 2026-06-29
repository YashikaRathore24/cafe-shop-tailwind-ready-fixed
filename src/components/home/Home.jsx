import "./home.css";
import heroBg from "../../assets/image_3.jpeg";

function Home() {
  const openLocation = () => {
    window.open(
      "https://www.google.com/maps?q=Modi+Ji+Chai+Wale,+2/49,+Chitrkoot,+Gandhi+Path+Rd,+near+Mall+of+Jaipur,+Jaipur,+Rajasthan+302021",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Decorative Blobs */}
      <div className="hero-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="hero-badge">
            🌸 Jaipur's Favourite Floral Café
          </div>

          <h1 className="sm:!text-6xl text-3xl">
            Brewing
            <span> Beautiful </span>
            Moments
            <br />
            Every Single Day.
          </h1>

          <p>
            Discover handcrafted chai, specialty coffee,
            refreshing mocktails, delicious snacks,
            and a floral ambience that makes every visit memorable.
          </p>

          <div className="hero-buttons">

            <a href="#menu" className="btn-primary">
              Explore Menu
            </a>

            <button
              className="btn-secondary"
              onClick={openLocation}
            >
              📍 Visit Cafe
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat">
              <h2>1000+</h2>
              <span>Happy Guests</span>
            </div>

            <div className="stat">
              <h2>4.9 ★</h2>
              <span>Google Rating</span>
            </div>

            <div className="stat">
              <h2>50+</h2>
              <span>Signature Drinks</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-visual">

          <div className="glass-box">

            <h3>✨ Experience Jaipur's Most Beautiful Café</h3>

            <p>
              A perfect blend of authentic chai,
              handcrafted coffee, floral interiors,
              delicious food, and unforgettable moments.
            </p>

            <div className="feature-list">

              <div className="feature">
                ☕ Freshly Brewed
              </div>

              <div className="feature">
                🌸 Floral Ambience
              </div>

              <div className="feature">
                🍹 Premium Mocktails
              </div>

              <div className="feature">
                🍰 Fresh Snacks
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll */}

      <div className="scroll-down">
        <span></span>
      </div>

    </section>
  );
}

export default Home;