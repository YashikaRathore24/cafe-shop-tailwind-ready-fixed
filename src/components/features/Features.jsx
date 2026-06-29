import "./feature.css";
import {
  Coffee,
  Leaf,
  Flower2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Authentic Chai",
    desc: "Handcrafted kulhad chai brewed the traditional way, full of flavour.",
  },
  {
    icon: Leaf,
    title: "Green Ambience",
    desc: "Lush plants and natural greenery for a calm, refreshing escape.",
  },
  {
    icon: Flower2,
    title: "Floral Vibes",
    desc: "Soft pink florals everywhere — the prettiest backdrop in town.",
  },
  {
    icon: Sparkles,
    title: "Cozy Seating",
    desc: "Warm wooden corners perfect for friends, books and slow evenings.",
  },
];

function Features() {
  return (
    <section className="features" id="features">

      {/* Dark Overlay */}
      <div className="features-overlay"></div>

      {/* Heading */}
      <div className="features-header">
        <h2 className="section-title">
          Why Visit Us
        </h2>

        <p className="features-subtitle">
          More than just a café, we create memorable experiences with
          warmth, flavour and good vibes.
        </p>
      </div>

      {/* Floating Cards */}
      <div className="features-container">
        <div className="features-grid">

          {features.map(({ icon: Icon, title, desc }) => (

            <div
              className="feature-card"
              key={title}
            >
              <div className="feature-icon">
                <Icon size={38} strokeWidth={2.2} />
              </div>

              <h3>{title}</h3>

              <p>{desc}</p>

            </div>

          ))}

        </div>
      </div>

    </section>
  );
}

export default Features;