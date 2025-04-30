import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      className="sticky top-0 z-50 bg-[#8a9e91] shadow-md"
      style={{ marginTop: 0 }}
    >
      {/* Futuristic decorative element */}
      <div className="absolute top-0 right-0 h-full overflow-hidden">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-teal-400 via-emerald-500 to-green-400 rounded-full opacity-30 blur-sm absolute -right-8 -top-8 animate-pulse"></div>
        <div className="w-16 h-16 border border-white/20 rounded-full absolute top-6 right-6 md:top-4 md:right-12 backdrop-blur-sm">
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/30"></div>
          <div className="absolute inset-[5px] rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-full bg-white/10 backdrop-blur-md animate-ping opacity-75 absolute"></div>
            <div className="w-1/3 h-1/3 rounded-full bg-white/30 absolute"></div>
          </div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle className="text-white/10 stroke-2 fill-none" cx="50" cy="50" r="45" stroke="currentColor" />
            <path className="text-emerald-400/70 stroke-2 fill-none animate-[spin_10s_linear_infinite]" d="M50 5 A 45 45 0 0 1 95 50" stroke="currentColor" />
            <path className="text-teal-400/70 stroke-2 fill-none animate-[spin_15s_linear_infinite]" d="M50 5 A 45 45 0 1 0 95 50" stroke="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
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
              className="relative py-1 px-1 text-sm font-medium text-white hover:text-white transition-colors duration-300 group"
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
          className="hidden md:flex items-center gap-1 text-sm font-medium px-4 py-1.5 text-white border border-white/20 rounded-full hover:bg-green-700/30 transition-all duration-300 backdrop-blur-sm"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Hubungi
          <ChevronDown size={14} className="opacity-80" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-white rounded-full bg-green-700/20 relative overflow-hidden border border-white/10 backdrop-blur-sm hover:bg-green-700/30 transition-all duration-300 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {mobileMenuOpen ? (
            <X size={18} strokeWidth={1.5} className="relative z-10" />
          ) : (
            <div className="relative z-10 w-5 h-5 flex flex-col justify-center items-center gap-[3px]">
              <span className="block h-[2px] w-4 bg-white rounded-full transform transition-all duration-300 group-hover:w-5"></span>
              <span className="block h-[2px] w-3 bg-white rounded-full transform transition-all duration-300 group-hover:w-4 group-hover:translate-x-[2px]"></span>
              <span className="block h-[2px] w-5 bg-white rounded-full transform transition-all duration-300 group-hover:w-3 group-hover:translate-x-[-2px]"></span>
            </div>
          )}
          <div className="absolute top-0 right-0 w-3 h-3">
            <div className="absolute top-0 right-0 w-3 h-[1px] bg-emerald-400/70"></div>
            <div className="absolute top-0 right-0 h-3 w-[1px] bg-emerald-400/70"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-3 h-3">
            <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-emerald-400/70"></div>
            <div className="absolute bottom-0 left-0 h-3 w-[1px] bg-emerald-400/70"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu - Bottom Bar Style */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-[#6b7968] md:hidden border-t border-white/10 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="py-2 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-medium text-lg">Menu</h2>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-colors ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-emerald-600/30 text-white' 
                    : 'text-white/80 hover:bg-white/10'
                }`}
                onClick={() => handleNavClick(item.href.substring(1))}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {activeSection === item.href.substring(1) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1"></span>
                )}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center pb-6 pt-2">
            <a 
              href="https://wa.me/6285868015805" 
              className="flex items-center justify-center gap-2 py-2.5 px-5 w-full max-w-xs text-white font-medium bg-gradient-to-r from-emerald-500/80 to-green-600/80 rounded-full shadow-lg shadow-green-900/20"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Bottom Navigation Bar (Always visible) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#6b7968]/95 backdrop-blur-md border-t border-white/10 md:hidden z-20">
        <div className="flex justify-around items-center py-2 px-1">
          {navItems.slice(0, 4).map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex flex-col items-center py-1.5 px-2 ${
                activeSection === item.href.substring(1) ? 'text-white' : 'text-white/70'
              }`}
              onClick={() => handleNavClick(item.href.substring(1))}
            >
              <span className="text-xs font-medium mt-1">{item.label}</span>
              {activeSection === item.href.substring(1) && (
                <span className="w-1 h-1 rounded-full bg-emerald-400 mt-0.5"></span>
              )}
            </a>
          ))}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center py-1.5 px-2 text-white/70"
          >
            <span className="w-7 h-7 flex flex-col justify-center items-center rounded-full bg-emerald-600/30">
              <Menu size={16} strokeWidth={2} className="text-white" />
            </span>
            <span className="text-xs font-medium mt-1">Menu</span>
          </button>
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