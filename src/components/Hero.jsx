import { useEffect, useState } from "react";
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(80,113,109,0.1),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(168,83,25,0.08),transparent_30%)]"></div>
      
      <div className="container-custom h-full w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-16 lg:py-16 px-6 md:px-8 lg:px-10 relative z-10">
        {/* Left content column */}
        <div className="w-full lg:w-1/2 lg:max-w-lg mb-12 lg:mb-0 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0 transition-all duration-1000 ease-out transform translate-y-0 opacity-100">
          <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="inline-block px-3 py-1 mb-6 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Kost Putra di Bantul, Yogyakarta
            </p>
          </div>
          
          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-gray-800">
              Kost <span className="text-primary font-extrabold">Ash-Shaff</span> Hunian Nyaman di Bantul
            </h1>
          </div>
          <div className={`transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-gray-600 mb-8 text-base md:text-lg max-w-md mx-auto lg:mx-0">
              Hunian nyaman, aman dan strategis untuk mahasiswa UMY Yogyakarta dengan fasilitas lengkap dan harga terjangkau.
            </p>
          </div>
          
          <div className={`space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center lg:justify-start transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <a 
              href="#rooms" 
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-xl shadow-primary/20 transition-all duration-300 inline-flex items-center justify-center"
              aria-label="Lihat kamar tersedia di Kost Ash-Shaff"
            >
              Lihat Kamar
              <ChevronRight className="w-5 h-5 ml-1" aria-hidden="true" />
            </a>
            
            <a 
              href="https://wa.me/6285868015805" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-primary border border-gray-200 font-medium rounded-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              aria-label="Hubungi pengelola Kost Ash-Shaff melalui WhatsApp"
            >
              Hubungi Kami
            </a>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0 transition-all duration-700 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {[
              { value: "20+", label: "Kamar" },
              { value: "4.8", label: "Rating" },
              { value: "8+", label: "Tahun" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur p-3 md:p-4 rounded-lg shadow-sm text-center">
                <p className="text-primary text-xl md:text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right image column */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 z-10">
          <div className={`relative mx-auto max-w-md lg:max-w-none transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Kost Ash-Shaff - Bangunan kost nyaman dan strategis di Bantul Yogyakarta dekat kampus UMY" 
                className="w-full h-full object-cover"
                width="600"
                height="800"
                loading="eager"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 -z-10"></div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
            <div className="absolute top-10 -left-6 w-16 h-16 bg-secondary/20 rounded-full z-0"></div>
            
            {/* Feature card */}
            <div className="absolute -bottom-5 -left-5 md:-left-10 bg-white p-3 md:p-4 rounded-lg shadow-xl max-w-[180px] md:max-w-[240px] z-20">
              <div className="flex items-center mb-1 md:mb-2">
                <div className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="ml-2 md:ml-3 font-medium text-gray-900 text-sm md:text-base">Lokasi Strategis</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">5 menit jalan kaki ke Kampus UMY Yogyakarta</p>
            </div>
            
            {/* Price tag */}
            <div className="absolute -top-3 -right-3 md:-right-6 bg-white py-2 px-4 rounded-lg shadow-xl z-20">
              <p className="text-xs md:text-sm text-gray-500">Mulai dari</p>
              <p className="text-primary font-bold text-sm md:text-base">
                Rp 8,8 jt<span className="text-xs md:text-sm font-normal">/tahun</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,48L60,53.3C120,59,240,69,360,64C480,59,600,37,720,32C840,27,960,37,1080,42.7C1200,48,1320,48,1440,42.7C1560,37,1680,27,1800,21.3C1920,16,2040,16,2160,21.3C2280,27,2400,37,2520,42.7C2640,48,2760,48,2880,48C3000,48,3120,48,3240,48C3360,48,3480,48,3600,53.3C3720,59,3840,69,3960,64C4080,59,4200,37,4320,32C4440,27,4560,37,4680,42.7C4800,48,4920,48,5040,42.7C5160,37,5280,27,5400,21.3C5520,16,5640,16,5760,21.3C5880,27,6000,37,6120,42.7C6240,48,6360,48,6480,48C6600,48,6720,48,6840,48C6960,48,7080,48,7200,53.3C7320,59,7440,69,7560,64C7680,59,7800,37,7920,32C8040,27,8160,37,8280,42.7C8400,48,8520,48,8580,48L8640,48L8640,80L8580,80C8520,80,8400,80,8280,80C8160,80,8040,80,7920,80C7800,80,7680,80,7560,80C7440,80,7320,80,7200,80C7080,80,6960,80,6840,80C6720,80,6600,80,6480,80C6360,80,6240,80,6120,80C6000,80,5880,80,5760,80C5640,80,5520,80,5400,80C5280,80,5160,80,5040,80C4920,80,4800,80,4680,80C4560,80,4440,80,4320,80C4200,80,4080,80,3960,80C3840,80,3720,80,3600,80C3480,80,3360,80,3240,80C3120,80,3000,80,2880,80C2760,80,2640,80,2520,80C2400,80,2280,80,2160,80C2040,80,1920,80,1800,80C1680,80,1560,80,1440,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 