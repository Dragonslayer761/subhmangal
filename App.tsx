import React, { useState } from 'react';
import { PackageCard } from './components/PackageCard';
import { PortfolioGallery } from './components/PortfolioGallery';
import { PACKAGES, ADD_ONS, CONTACT_INFO } from './constants';
import { Camera, Heart, Mail, Phone, MapPin, Instagram, Menu, X, ArrowDown } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import img from './assets/images/MAN_3088.jpg';
import img2 from './assets/images/DSC_1128.jpg';
import img3 from './assets/images/SEN_1949.jpg';
import LOGO_URL from './assets/images/logo.png';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    message: '',
    selectedPackage: '',
    location: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, eventDate, message, selectedPackage, location } = formData;
    const whatsappMessage = `Hi, I'm ${name}. Interested in ${selectedPackage || 'your services'}. Event date: ${eventDate}. Location: ${location}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', eventDate: '', message: '', selectedPackage: '', location: '' });
  };

  const handleBookPackage = (packageTitle: string) => {
    setFormData(prev => ({ ...prev, selectedPackage: packageTitle }));
    // Scroll to contact section
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-darkBg text-stone-200 font-sans selection:bg-premiumGold selection:text-black overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-darkBg/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo Image */}
              <img src={LOGO_URL} alt="Subhmangal Photography" className="h-[12rem] w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" onClick={() => setActiveSection('home')} className={`${activeSection === 'home' ? 'text-premiumGold' : 'text-neutral-300'} hover:text-premiumGold transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide`}>Home</a>
                <a href="#portfolio" onClick={() => setActiveSection('portfolio')} className={`${activeSection === 'portfolio' ? 'text-premiumGold' : 'text-neutral-300'} hover:text-premiumGold transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide`}>Portfolio</a>
                <a href="#packages" onClick={() => setActiveSection('packages')} className={`${activeSection === 'packages' ? 'text-premiumGold' : 'text-neutral-300'} hover:text-premiumGold transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide`}>Packages</a>
                <a href="#addons" onClick={() => setActiveSection('addons')} className={`${activeSection === 'addons' ? 'text-premiumGold' : 'text-neutral-300'} hover:text-premiumGold transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide`}>Services</a>
                <a href="#contact" onClick={() => setActiveSection('contact')} className={`${activeSection === 'contact' ? 'bg-premiumGold text-black' : 'border border-premiumGold text-premiumGold'} hover:bg-premiumGold hover:text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-300`}>Contact Us</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className={`${activeSection === 'home' ? 'text-premiumGold' : 'text-gray-300'} hover:text-premiumGold block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }}>Home</a>
              <a href="#portfolio" className={`${activeSection === 'portfolio' ? 'text-premiumGold' : 'text-gray-300'} hover:text-premiumGold block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { setActiveSection('portfolio'); setIsMenuOpen(false); }}>Portfolio</a>
              <a href="#packages" className={`${activeSection === 'packages' ? 'text-premiumGold' : 'text-gray-300'} hover:text-premiumGold block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { setActiveSection('packages'); setIsMenuOpen(false); }}>Packages</a>
              <a href="#addons" className={`${activeSection === 'addons' ? 'text-premiumGold' : 'text-gray-300'} hover:text-premiumGold block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { setActiveSection('addons'); setIsMenuOpen(false); }}>Services</a>
              <a href="#contact" className="text-premiumGold font-bold block px-3 py-2 rounded-md text-base" onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }}>Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-darkBg z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/50 z-10"></div>
          {/* Subtle blurred background image */}
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center md:text-left mt-10 md:mt-0">
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="text-premiumGold tracking-[0.3em] uppercase text-xs sm:text-sm border-b border-premiumGold/30 pb-2">Traditional Wedding Photography</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Capturing the Soul of <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-premiumGold to-lightGold">Precious Memories</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto md:mx-0 mb-10 font-light leading-relaxed">
              We weave stories of love, rituals, and emotions into cinematic masterpieces.
              Experience your special moments forever with Subhmangal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#packages" className="inline-flex items-center justify-center gap-2 bg-premiumGold text-black px-8 py-3 rounded-full font-medium hover:bg-lightGold transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                View Packages
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-premiumGold hover:text-premiumGold text-white px-8 py-3 rounded-full transition-all duration-300">
                See Our Work
              </a>
            </div>
          </div>

          {/* Hero Image Collage */}
          <div className="hidden md:block relative h-[600px] w-full">
            {/* Back Image */}
            <div className="absolute top-0 right-0 w-64 h-80 rounded-sm overflow-hidden transform rotate-6 border border-neutral-800 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 z-10">
              <img src={img2} alt="Couple" className="w-full h-full object-cover" />
            </div>

            {/* Middle Image */}
            <div className="absolute top-20 right-20 w-72 h-96 rounded-sm overflow-hidden transform -rotate-3 border border-neutral-800 shadow-2xl z-20">
              <img src={img3} alt="Bride" className="w-full h-full object-cover" />
            </div>

            {/* Front Image */}
            <div className="absolute bottom-10 right-48 w-60 h-72 rounded-sm overflow-hidden transform rotate-2 border border-premiumGold/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-30">
              <img src={img} alt="Rituals" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile Image (Fallback) */}
          <div className="md:hidden w-full h-64 rounded-lg overflow-hidden relative border border-neutral-800">
            <img src={img2} alt="Wedding" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioGallery />

      {/* Packages Section */}
      <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-darkBg relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-premiumGold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-premiumGold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-premiumGold text-sm tracking-widest uppercase mb-3">Our Offerings</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Wedding Collections</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-premiumGold to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onBookPackage={handleBookPackage} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm">
              * Prices subject to change based on specific requirements and dates.
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hi , I am looking for customized package. Can we talk about that ?")}`}><span className="text-premiumGold ml-1 cursor-pointer hover:underline">Contact for customized quotes.</span></a>
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section id="addons" className="py-20 bg-neutral-900/20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-2">Enhance Your Memories</h2>
            <p className="text-neutral-400">Extra services curated by Subhajit to add that extra sparkle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADD_ONS.map((addon, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 border border-neutral-800/50 rounded-sm bg-black hover:border-premiumGold/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 group-hover:bg-neutral-800 transition-colors">
                  <Heart className="w-5 h-5 text-premiumGold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1 font-serif">{addon.title}</h4>
                  <p className="text-premiumGold font-mono text-sm mb-2">{addon.price}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-darkBg relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-neutral-900/30 backdrop-blur-md rounded-lg p-8 md:p-12 border border-white/5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">Let's Create Magic</h2>
              <p className="text-neutral-400 mb-8 font-light">
                Available for more wedding and pre-wedding packages. Contact us to avail more discounts and customize your perfect day.
              </p>

              <div className="space-y-6">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-neutral-300 group">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-premiumGold group-hover:bg-premiumGold group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 group">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-premiumGold group-hover:bg-premiumGold group-hover:text-black transition-colors">
                    <FaWhatsapp width={20} height={20} />
                  </div>
                  <span className="group-hover:text-white transition-colors">{CONTACT_INFO.whatsapp}</span>
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 group">
                  <div className="flex items-center gap-4 text-neutral-300 group">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-premiumGold group-hover:bg-premiumGold group-hover:text-black transition-colors">
                      <FaInstagram className={"w-5 h-5"} />
                    </div>
                    <span className="group-hover:text-white transition-colors">subhmangal.kolkata</span>
                  </div>
                </a>
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-neutral-300 group">
                  <div className="flex items-center gap-4 text-neutral-300 group">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-premiumGold group-hover:bg-premiumGold group-hover:text-black transition-colors">
                      <FaFacebook className={"w-5 h-5"} />
                    </div>
                    <span className="group-hover:text-white transition-colors">SubhMangal</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-neutral-300 group">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-premiumGold group-hover:bg-premiumGold group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{CONTACT_INFO.email}</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-300 group">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-premiumGold group-hover:bg-premiumGold group-hover:text-black transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{CONTACT_INFO.address}</span>
                </div>
              </div>

            </div>

            <div className="bg-black/50 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-premiumGold"></span>
                Send an Enquiry
              </h3>
              <form id="enquiry-form" className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-500">Name</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-3 py-3 text-white focus:outline-none focus:border-premiumGold transition-colors placeholder-neutral-700"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-500">Package</label>
                  <select
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-3 py-3 text-white focus:outline-none focus:border-premiumGold transition-colors"
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData(prev => ({ ...prev, selectedPackage: e.target.value }))}
                    required
                  >
                    <option value="">Select a package</option>
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.title}>{pkg.title} - {pkg.price}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-500">Event Date</label>
                  <input
                    type="date"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-3 py-3 text-white focus:outline-none focus:border-premiumGold transition-colors"
                    value={formData.eventDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-500">Location</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-3 py-3 text-white focus:outline-none focus:border-premiumGold transition-colors placeholder-neutral-700"
                    placeholder="Enter event location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-neutral-500">Message</label>
                  <textarea
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-sm px-3 py-3 text-white focus:outline-none focus:border-premiumGold transition-colors h-24 resize-none placeholder-neutral-700"
                    placeholder="Tell us about your wedding plans..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-premiumGold to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3 rounded-sm transition-all duration-300 shadow-lg shadow-amber-900/20 mt-2">
                  Request Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-8 text-center">
        <div className="flex items-center justify-center mb-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          <img src={LOGO_URL} alt="Subhmangal" className="h-8 w-auto" />
        </div>
        <p className="text-neutral-600 text-sm font-light">
          &copy; {new Date().getFullYear()} Subhmangal Photography. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;