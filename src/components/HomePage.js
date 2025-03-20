import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, Droplets, Home, Phone, Mail, MapPin } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sample data
  const services = [
    {
      title: "Residential Pressure Washing",
      description: "Restore your home's appearance with our gentle yet effective cleaning solutions.",
      icon: <Home className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Commercial Cleaning",
      description: "Maintain your business property's professional appearance with scheduled cleaning services.",
      icon: <MapPin className="h-8 w-8 text-blue-500" />
    },
    {
      title: "AquaSonic Technology",
      description: "Our proprietary aquasonic technology removes stubborn dirt without damaging surfaces.",
      icon: <Droplets className="h-8 w-8 text-blue-500" />
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
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8" />
              <span className="font-bold text-2xl">AquaSonic</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-200 transition">Home</a>
              <a href="#services" className="hover:text-blue-200 transition">Services</a>
              <a href="#about" className="hover:text-blue-200 transition">About</a>
              <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <a href="#" className="block py-2 hover:text-blue-200 transition">Home</a>
              <a href="#services" className="block py-2 hover:text-blue-200 transition">Services</a>
              <a href="#about" className="block py-2 hover:text-blue-200 transition">About</a>
              <a href="#testimonials" className="block py-2 hover:text-blue-200 transition">Testimonials</a>
              <a href="#contact" className="block py-2 hover:text-blue-200 transition">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Pressure Washing Solutions</h1>
              <p className="text-xl mb-6">Transform your property with our advanced aquasonic cleaning technology.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-100 transition px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 transition px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-1 rounded-lg shadow-lg">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Pressure washing in action" 
                  className="rounded w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <a href="#services" className="bg-white bg-opacity-20 p-2 rounded-full">
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a full range of pressure washing services using our advanced aquasonic technology that's tough on dirt but gentle on surfaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition p-6 border-t-4 border-blue-500">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-blue-500 p-1 rounded-lg shadow-lg">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="AquaSonic team" 
                  className="rounded w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About AquaSonic Cleaning</h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 2018, AquaSonic Cleaning has quickly become the leading pressure washing service in the region. Our commitment to quality, attention to detail, and customer satisfaction sets us apart.
              </p>
              <p className="text-gray-600 mb-6">
                We use environmentally-friendly cleaning solutions combined with our proprietary aquasonic technology to deliver outstanding results without harming your property or the environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-500">500+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-500">5★</p>
                  <p className="text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
          </div>
          
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 right-0 transition-opacity duration-1000 bg-white p-6 rounded-lg shadow-lg ${
                  index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="italic text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-gray-800">{testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Ready to transform your property? Contact us today for a free quote or to learn more about our services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@aquasonicleaning.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">123 Cleaning Ave, Sparkle City, SC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Get a Free Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Pressure Washing</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-8 w-8" />
                <span className="font-bold text-2xl">AquaSonic</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Professional pressure washing services using advanced aquasonic technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Residential</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Commercial</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Industrial</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-4567
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    info@aquasonicleaning.com
                  </li>
                  <li className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    123 Cleaning Ave, Sparkle City
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AquaSonic Cleaning. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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