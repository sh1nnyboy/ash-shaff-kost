import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-light bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-accent">Ash-Shaff</span>
              <span className="ml-2 text-white">Kost</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-accent transition-colors font-medium">
              Beranda
            </a>
            <a href="#facilities" className="text-white hover:text-accent transition-colors font-medium">
              Fasilitas
            </a>
            <a href="#rooms" className="text-white hover:text-accent transition-colors font-medium">
              Kamar
            </a>
            <a href="#location" className="text-white hover:text-accent transition-colors font-medium">
              Lokasi
            </a>
            <a href="#contact" className="text-white hover:text-accent transition-colors font-medium">
              Kontak
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3">
            <a
              href="#home"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#facilities"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fasilitas
            </a>
            <a
              href="#rooms"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kamar
            </a>
            <a
              href="#location"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lokasi
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </a>
          </nav>
        )}
      </div>
    </header>
  );
} 