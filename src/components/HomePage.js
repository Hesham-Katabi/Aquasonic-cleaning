import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, Droplets, Home, Phone, Mail, MapPin } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sample data
  const services = [
    {
      title: "Residential Pressure Washing",
      description: "Restore your home's appearance with our gentle yet effective cleaning solutions.",
      icon: <Home className="service-icon" />
    },
    {
      title: "Commercial Cleaning",
      description: "Maintain your business property's professional appearance with scheduled cleaning services.",
      icon: <MapPin className="service-icon" />
    },
    {
      title: "AquaSonic Technology",
      description: "Our proprietary aquasonic technology removes stubborn dirt without damaging surfaces.",
      icon: <Droplets className="service-icon" />
    }
  ];
  
  const testimonials = [
    {
      text: "AquaSonic transformed our dirty driveway into something that looks brand new. Highly recommend!",
      author: "Michael J., Homeowner",
      rating: 5
    },
    {
      text: "As a restaurant owner, cleanliness is crucial. Their commercial services keep our outdoor areas spotless.",
      author: "Sarah T., Business Owner",
      rating: 5
    },
    {
      text: "Fast, professional, and thorough. The team at AquaSonic exceeded my expectations.",
      author: "David L., Property Manager",
      rating: 4
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Droplets className="logo-icon" />
            <span>AquaSonic</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
            {isMenuOpen ? (
              <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#" className="mobile-menu-link">Home</a>
            <a href="#services" className="mobile-menu-link">Services</a>
            <a href="#about" className="mobile-menu-link">About</a>
            <a href="#testimonials" className="mobile-menu-link">Testimonials</a>
            <a href="#contact" className="mobile-menu-link">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Professional Pressure Washing Solutions</h1>
            <p>Transform your property with our advanced aquasonic cleaning technology.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Get a Free Quote <ArrowRight className="btn-icon" />
              </a>
              <a href="#services" className="btn-secondary">
                Our Services
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/api/placeholder/600/400" 
              alt="Pressure washing in action" 
            />
          </div>
        </div>
        <div className="scroll-down">
          <a href="#services" className="scroll-button">
            <ChevronDown className="scroll-icon" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Services</h2>
            <div className="section-divider"></div>
            <p>
              We offer a full range of pressure washing services using our advanced aquasonic technology that's tough on dirt but gentle on surfaces.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">
                  Learn more <ArrowRight className="link-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/api/placeholder/600/400" 
                alt="AquaSonic team" 
              />
            </div>
            <div className="about-content">
              <h2>About AquaSonic Cleaning</h2>
              <div className="section-divider"></div>
              <p>
                Founded in 2018, AquaSonic Cleaning has quickly become the leading pressure washing service in the region. Our commitment to quality, attention to detail, and customer satisfaction sets us apart.
              </p>
              <p>
                We use environmentally-friendly cleaning solutions combined with our proprietary aquasonic technology to deliver outstanding results without harming your property or the environment.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-number">500+</p>
                  <p className="stat-label">Happy Customers</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">5★</p>
                  <p className="stat-label">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${
                  index === activeTestimonial ? 'active' : ''
                }`}
              >
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`star-icon ${i < testimonial.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <div className="section-divider"></div>
              <p>
                Ready to transform your property? Contact us today for a free quote or to learn more about our services.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">info@aquasonicleaning.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <p className="contact-label">Address</p>
                    <p className="contact-value">123 Cleaning Ave, Sparkle City, SC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <div className="contact-form">
                <h3>Get a Free Quote</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service">
                      <option value="">Select a service</option>
                      <option value="residential">Residential Pressure Washing</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Droplets className="logo-icon" />
                <span>AquaSonic</span>
              </div>
              <p>
                Professional pressure washing services using advanced aquasonic technology.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Residential</a></li>
                  <li><a href="#">Commercial</a></li>
                  <li><a href="#">Industrial</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <Phone className="footer-icon" />
                    (555) 123-4567
                  </li>
                  <li>
                    <Mail className="footer-icon" />
                    info@aquasonicleaning.com
                  </li>
                  <li>
                    <MapPin className="footer-icon" />
                    123 Cleaning Ave, Sparkle City
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} AquaSonic Cleaning. All rights reserved.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;