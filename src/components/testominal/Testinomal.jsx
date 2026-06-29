import "./testinominal.css";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Jaipur",
    rating: 5,
    text: "Best chai in Jaipur! The ambience is peaceful and the floral décor is beautiful. A perfect place to relax and unwind.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Regular Customer",
    rating: 5,
    text: "Loved the Kulhad Chai and Pizza. Definitely coming back with friends. Great ambience and quick service!",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    location: "Jaipur",
    rating: 5,
    text: "A perfect place to relax, work and enjoy delicious snacks with amazing chai.",
  },
];

export default function Testinomal() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );

  const next = () =>
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );

  const left =
    reviews[(current - 1 + reviews.length) % reviews.length];

  const center = reviews[current];

  const right =
    reviews[(current + 1) % reviews.length];

  return (
    <section className="testimonial">

      <div className="testimonial-container">

        <span className="small-heading">
          ❤ LOVED BY OUR CUSTOMERS
        </span>

        <h2>
          What Customers <span>Say</span>
        </h2>

        <p className="subtitle">
          Every cup tells a story. Here's what our wonderful customers have to
          say about their experience.
        </p>

        <div className="rating">

          <div className="stars">
            {[1,2,3,4,5].map((item)=>(
              <Star
                key={item}
                size={20}
                fill="#FDB813"
                color="#FDB813"
              />
            ))}
          </div>

          <h3>4.8</h3>

          <p>
            Rated Excellent by 1,200+ Happy Customers
          </p>

        </div>

        <div className="review-slider">

          <button className="arrow" onClick={prev}>
            <ChevronLeft />
          </button>

          <div className="small-card">

            <Quote className="quote"/>

            <p>{left.text}</p>

            <div className="small-stars">
              {"★★★★★"}
            </div>

            <div className="user">

              <div className="avatar">
                {left.name
                  .split(" ")
                  .map((n)=>n[0])
                  .join("")}
              </div>

              <div>

                <h4>{left.name}</h4>

                <span>{left.location}</span>

              </div>

            </div>

          </div>

          <div className="main-card" key={center.id}>

            <div className="quote-big">

              <Quote />

            </div>

            <p className="review-text">

              "{center.text}"

            </p>

            <div className="main-stars">

              {"★★★★★"}

            </div>

            <div className="user center-user">

              <div className="avatar big">

                {center.name
                  .split(" ")
                  .map((n)=>n[0])
                  .join("")}

              </div>

              <div>

                <h3>{center.name}</h3>

                <span>{center.location}</span>

              </div>

            </div>

          </div>

          <div className="small-card">

            <Quote className="quote"/>

            <p>{right.text}</p>

            <div className="small-stars">

              {"★★★★★"}

            </div>

            <div className="user">

              <div className="avatar">

                {right.name
                  .split(" ")
                  .map((n)=>n[0])
                  .join("")}

              </div>

              <div>

                <h4>{right.name}</h4>

                <span>{right.location}</span>

              </div>

            </div>

          </div>

          <button className="arrow" onClick={next}>
            <ChevronRight />
          </button>

        </div>

        <div className="dots">

          {reviews.map((_,i)=>(

            <span

              key={i}

              onClick={()=>setCurrent(i)}

              className={
                current===i
                ? "dot active"
                : "dot"
              }

            />

          ))}

        </div>

        <a
          href="https://www.google.com/search?q=modi+chai+jaipur"
          target="_blank"
          rel="noreferrer"
          className="google-btn"
        >
          View All Google Reviews →
        </a>

      </div>

    </section>
  );
}