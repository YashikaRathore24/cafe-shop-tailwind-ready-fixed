import "./gallery.css";
import { useState } from "react";

import image7 from "../../assets/image_7.jpeg";
import image8 from "../../assets/image_8.jpeg";
import image9 from "../../assets/image_9.jpeg";
import image10 from "../../assets/image_10.jpeg";
import image11 from "../../assets/image_11.jpeg";

import heroBg from "../../assets/image_10.jpeg";

const images = [
  {
    id: 1,
    src: image10,
    title: "Cafe Ambience",
  },
  {
    id: 2,
    src: image8,
    title: "Evening Vibe",
  },
  {
    id: 3,
    src: image9,
    title: "Happy Moments",
  },
  {
    id: 4,
    src: image7,
    title: "Cozy Corner",
  },
  {
    id: 5,
    src: image11,
    title: "Evening Vibes",
  },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll
    ? images
    : images.slice(0, 3);

 return (
  <section className="gallery" id="gallery">
    <div className="gallery-container">

      <div className="gallery-heading">
        <span className="gallery-tag">CAPTURED MOMENTS</span>

        <h2 className="gallery-title">Gallery</h2>

        <p className="gallery-description">
          Every cup tells a story. Discover the warmth, flavours and
          beautiful memories at Modi Ji Chai Wale.
        </p>
      </div>

      <div className="gallery-grid">
        {displayedImages.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.src} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {images.length > 3 && (
        <div className="gallery-btn-wrapper">
          <button
            className="gallery-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "Show More →"}
          </button>
        </div>
      )}
    </div>
  </section>
);
}