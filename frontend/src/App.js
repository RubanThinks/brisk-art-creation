import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{
          transform:
            window.innerWidth > 768 ? `translateY(${scrollY * 0.3}px)` : "none",
        }}
      >
        <div className="hero-content">
          <h1 className="brand-name fade-in">BRISK</h1>
          <p className="brand-tagline fade-in-delay-1">Art and Creation</p>
          <p className="brand-subtitle fade-in-delay-2">
            Architecture | Interior | Construction
          </p>
          <p className="hero-subtext fade-in-delay-3">
            Where geometry meets emotion — and every space becomes a crafted
            experience.
          </p>
        </div>
        <div className="scroll-indicator fade-in-delay-4">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We at Brisk believe in blending art with architecture. Each
              creation is a journey of geometry, space, and light — crafted with
              precision and emotion to reflect who you are.
            </p>
            <p>
              From interiors to exteriors, our work bridges design and
              engineering to deliver spaces that inspire and endure.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="/about-image.png"
              alt="About Brisk"
              className="about-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
