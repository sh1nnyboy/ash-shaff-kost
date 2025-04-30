import { Cctv } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Rooms() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // HD room images from Unsplash
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Rp8.800.000/tahun",
      details: ["Ukuran 4x3 meter", "Kamar Mandi Dalam", "Kulkas Bersama", "Dapur Bersama", "WiFi 150 Mbps", "Sudah Termasuk Listrik & WiFi", "CCTV"]
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Rp8.800.000/tahun",
      details: ["Ukuran 4x3 meter", "Kamar Mandi Dalam", "Kulkas Bersama", "Dapur Bersama", "WiFi 150 Mbps", "Sudah Termasuk Listrik & WiFi", "CCTV"]
    },
    {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Rp8.800.000/tahun",
      details: ["Ukuran 4x3 meter", "Kamar Mandi Dalam", "Kulkas Bersama", "Dapur Bersama", "WiFi 150 Mbps", "Sudah Termasuk Listrik & WiFi", "CCTV"]
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Rp8.800.000/tahun",
      details: ["Ukuran 4x3 meter", "Kamar Mandi Dalam", "Kulkas Bersama", "Dapur Bersama", "WiFi 150 Mbps", "Sudah Termasuk Listrik & WiFi", "CCTV"]
    },
    {
      src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Rp8.800.000/tahun",
      details: ["Ukuran 4x3 meter", "Kamar Mandi Dalam", "Kulkas Bersama", "Dapur Bersama", "WiFi 150 Mbps", "Sudah Termasuk Listrik & WiFi", "CCTV"]
    },
    {
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Rp8.800.000/tahun",
      details: ["Ukuran 4x3 meter", "Kamar Mandi Dalam", "Kulkas Bersama", "Dapur Bersama", "WiFi 150 Mbps", "Sudah Termasuk Listrik & WiFi", "CCTV"]
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="rooms" className="py-12 md:py-20 bg-accent-light/30">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent rounded-full opacity-70"></div>
          <span className="inline-block px-3 py-1 text-primary font-medium tracking-wide uppercase text-xs md:text-sm mb-2">Fasilitas</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-3 md:mb-4 mt-2">Kamar Kost</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Tersedia kamar kost nyaman dengan fasilitas lengkap
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
            {/* Price badge */}
            <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-accent/90 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold z-10">
              {images[currentImageIndex].price}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Carousel image */}
            <img 
              src={images[currentImageIndex].src} 
              alt="Kamar Kost Ash-Shaff" 
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>
          
          {/* Details section */}
          <div className="p-4 md:p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-3">Kamar Kost Ash-Shaff</h3>
            
            {/* Price display */}
            <div className="bg-primary/10 px-3 md:px-5 py-2 md:py-3 rounded-lg inline-block mb-4 md:mb-6">
              <span className="text-primary-dark font-bold text-base md:text-lg">
                {images[currentImageIndex].price}
              </span>
              <span className="text-xs md:text-sm text-gray-600 ml-2">Pembayaran Tahunan</span>
            </div>
            
            <div className="bg-accent-light/10 p-4 md:p-6 rounded-lg md:rounded-xl mb-5 md:mb-6">
              <h4 className="text-base md:text-lg font-semibold text-primary-dark mb-3 md:mb-4">Fasilitas Kamar</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-4 gap-y-2">
                {images[currentImageIndex].details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2 flex-shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="break-words">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Payment terms */}
            <div className="bg-yellow-50 p-4 md:p-6 rounded-lg md:rounded-xl mb-5 md:mb-6 border border-yellow-200">
              <h4 className="text-base md:text-lg font-semibold text-primary-dark mb-3 md:mb-4">Ketentuan Pembayaran</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600 text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2 flex-shrink-0 text-yellow-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span>DP minimal Rp1.000.000 untuk booking kamar</span>
                </li>
                <li className="flex items-start text-gray-600 text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2 flex-shrink-0 text-yellow-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span>Pelunasan dilakukan saat penyerahan kunci</span>
                </li>
              </ul>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center gap-1 md:gap-2 mt-3 mb-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-primary w-4 md:w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="mt-4 md:mt-6 text-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg transition-colors duration-200 text-sm md:text-base"
              >
                Pesan Kamar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 