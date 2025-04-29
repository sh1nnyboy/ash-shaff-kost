import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle clicks on navigation links to update active section
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Change header appearance on scroll
      setScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = ['home', 'facilities', 'rooms', 'location', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      let foundActiveSection = false;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          foundActiveSection = true;
          break;
        }
      }
      
      // If no section is found active (might be outside any section), don't change
      if (!foundActiveSection && window.location.hash) {
        // Extract section ID from the URL hash
        const hashSection = window.location.hash.substring(1);
        if (sections.includes(hashSection)) {
          setActiveSection(hashSection);
        }
      }
    };

    // Initial call to set the active section based on URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      setActiveSection(initialHash);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#facilities', label: 'Fasilitas' },
    { href: '#rooms', label: 'Kamar' },
    { href: '#location', label: 'Lokasi' },
    { href: '#contact', label: 'Kontak' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-[#8a9e91]/80 shadow-md' 
          : 'bg-gradient-to-b from-[#8a9e91]/90 to-[#8a9e91]/70'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center relative group">
          <span className="font-extralight text-xl tracking-tight text-white group-hover:opacity-90 transition-opacity">
            <span className="font-medium">Ash</span>Shaff
            <span className="ml-1 text-xs bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent opacity-90">KOST</span>
          </span>
          <div className="absolute -bottom-1 left-0 h-px w-0 bg-green-400 group-hover:w-full transition-all duration-300"></div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative py-1 px-1 text-sm font-light text-white hover:text-white transition-colors duration-300 group"
              onClick={() => handleNavClick(item.href.substring(1))}
            >
              {item.label}
              <span 
                className={`absolute -bottom-px left-0 h-px bg-green-400 transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Contact button (Desktop) */}
        <a 
          href="https://wa.me/6285868015805" 
          className="hidden md:flex items-center gap-1 text-sm font-light px-4 py-1.5 text-white border border-white/20 rounded-full hover:bg-green-700/30 transition-all duration-300 backdrop-blur-sm"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Hubungi
          <ChevronDown size={14} className="opacity-80" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-white rounded-full bg-green-700/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 backdrop-blur-lg bg-[#6b7968]/95 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-24 justify-center">
          <nav className="flex flex-col space-y-8 items-center text-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-white text-xl font-extralight relative group"
                onClick={() => handleNavClick(item.href.substring(1))}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: mobileMenuOpen ? 'fadeInUp 0.4s ease forwards' : 'none'
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-green-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          <div 
            className="mt-16 flex justify-center space-x-5"
            style={{
              animation: mobileMenuOpen ? 'fadeIn 0.6s ease forwards 0.3s' : 'none',
              opacity: 0
            }}
          >
            <a 
              href="https://wa.me/6285868015805" 
              className="flex items-center justify-center border border-white/20 backdrop-blur-sm bg-green-700/20 hover:bg-green-700/30 transition-all duration-300 px-6 py-2 rounded-full"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="text-white text-sm font-light">Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
} 