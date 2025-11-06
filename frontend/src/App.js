import { useEffect, useState } from 'react';
import './App.css';
import { MapPin, Mail, Phone, Instagram, Linkedin, ArrowRight, Home, Paintbrush, HardHat, Menu, X } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const portfolioItems = [
    { 
      title: 'Residence', 
      subtitle: 'Light & Line',
      image: 'https://images.unsplash.com/photo-1549791084-5f78368b208b?w=800&q=80'
    },
    { 
      title: 'Studio', 
      subtitle: 'Material Rhythm',
      image: 'https://images.unsplash.com/photo-1520529890308-f503006340b4?w=800&q=80'
    },
    { 
      title: 'Atrium', 
      subtitle: 'Vertical Balance',
      image: 'https://images.unsplash.com/photo-1592274951725-1688461e2019?w=800&q=80'
    },
    { 
      title: 'Lounge', 
      subtitle: 'Warm Minimal Edges',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
    },
    { 
      title: 'Workspace', 
      subtitle: 'Graphic Silence',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80'
    },
    { 
      title: 'Villa', 
      subtitle: 'Geometric Harmony',
      image: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?w=800&q=80'
    }
  ];

  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-brand">
              <div className="navbar-logo">
                <img 
                  src="https://customer-assets.emergentagent.com/job_geomarch/artifacts/xzsppnzt_brisk_art_creation.jpg" 
                  alt="Brisk Art and Creation" 
                />
              </div>
              <div className="navbar-brand-text">
                <span className="navbar-brand-name">BRISK</span>
                <span className="navbar-brand-tagline">Art and Creation</span>
              </div>
            </div>
            
            {/* Hamburger Menu Button */}
            <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Links */}
            <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
              <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
              <li><a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero-content">
          <h1 className="brand-name fade-in">BRISK</h1>
          <p className="brand-tagline fade-in-delay-1">Art and Creation</p>
          <p className="brand-subtitle fade-in-delay-2">Architecture | Interior | Construction</p>
          <p className="hero-subtext fade-in-delay-3">
            Where geometry meets emotion — and every space becomes a crafted experience.
          </p>
        </div>
        <div className="scroll-indicator fade-in-delay-4">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Us</h2>
              <div className="about-description">
                <p>
                  At Brisk Art and Creation, we believe space is not just built — it is <em>composed</em>.
                </p>
                <p>
                  Every surface, line, and light plane is guided by intention.
                  We shape environments where proportion becomes beauty,
                  and where purpose is engineered into the smallest detail.
                </p>
              </div>
            </div>
            <div className="geometric-accent"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title centered">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Home strokeWidth={1.5} size={48} />
              </div>
              <h3>Architecture</h3>
              <p>Form, function, and flow unified through geometry.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Paintbrush strokeWidth={1.5} size={48} />
              </div>
              <h3>Interior Design</h3>
              <p>Material balance and light harmony.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <HardHat strokeWidth={1.5} size={48} />
              </div>
              <h3>Construction</h3>
              <p>Structural precision and detail craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 className="section-title centered">Portfolio</h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-brand">BRISK</h3>
              <p className="footer-tagline">Art and Creation</p>
              <p className="footer-subtitle">Architecture | Interior | Construction</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="contact-info">
                <a href="https://maps.app.goo.gl/5rZBsjyGbAdubXJc6?g_st=aw" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <MapPin strokeWidth={1.5} size={20} />
                  <span>4/149, Mangayarkarasi street, Balaji Nagar, Fairlands<br />Salem – 636016, Tamil Nadu</span>
                </a>
                <a href="tel:+918667442624" className="contact-item">
                  <Phone strokeWidth={1.5} size={20} />
                  <span>+91 9655724488</span>
                </a>
                <a href="mailto:briskartandcreation@gmail.com" className="contact-item">
                  <Mail strokeWidth={1.5} size={20} />
                  <span>briskartcreation@gmail.com</span>
                </a>
                <a href="https://instagram.com/briskartandcreation" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <Instagram strokeWidth={1.5} size={20} />
                  <span>@briskartandcreation</span>
                </a>
                <a href="https://www.linkedin.com/in/brisk-art-creation-555aa91aa" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <Linkedin strokeWidth={1.5} size={20} />
                  <span>Brisk Art Creation</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Brisk Art and Creation. Geometry. Precision. Meaning.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
