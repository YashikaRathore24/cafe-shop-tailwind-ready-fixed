import "./about.css";
import aboutImg from "../../assets/image4.jpeg";

import {
  GlassWater,
  Citrus,
  Sparkles,
  Users,
} from "lucide-react";

const points = [
  {
    icon: GlassWater,
    title: "Refreshing Mocktails",
    text: "Freshly handcrafted drinks for every mood.",
  },
 {
  icon: Citrus,
  title: "Peaceful Ambience",
  text: "Relax in a beautiful green outdoor setting with a calm and cozy atmosphere.",
},
  {
    icon: Sparkles,
    title: "Beautiful Presentation",
    text: "Every drink is served with elegance and style.",
  },
  {
    icon: Users,
    title: "Perfect Hangout Spot",
    text: "Enjoy memorable moments with friends & family.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        {/* LEFT */}

        <div className="about-image">

          <img
            src={aboutImg}
            alt="Signature Mocktails"
          />

        <div className="rating-card">

  <div className="rating-star">
    ⭐
  </div>

  <div className="rating-info">
    <h4>4.9 Rating</h4>
    <p>5000+ Happy Customers</p>
  </div>

</div>

        </div>

        {/* RIGHT */}

        <div className="about-content">

          <span className="about-tag">
            Signature Mocktails
          </span>

          <h2>
            Crafted To
            <span> Refresh </span>
            Every Moment
          </h2>

       <p className="about-desc">
  Nestled amidst lush greenery and a relaxing outdoor setting,
  <strong> Modi Ji Chai Wale</strong> is the perfect place to unwind. Enjoy
  delicious chai, refreshing mocktails, tasty snacks, and quality time with
  your loved ones in a peaceful atmosphere surrounded by nature.
</p>
          <div className="about-points">

            {points.map(({ icon: Icon, title, text }) => (

              <div
                className="point-card"
                key={title}
              >

                <div className="point-icon">
                  <Icon size={24} />
                </div>

                <div>

                  <h4>{title}</h4>

                  <p>{text}</p>

                </div>

              </div>

            ))}

          </div>

          <div className="about-bottom">

            <span>
              🍹 Sip. Relax. Refresh.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;