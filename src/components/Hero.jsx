import { useEffect, useState } from "react";

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 500, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"
        style={{ opacity: 0.85 }}
      ></div>
      
      {/* Hero background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: `scale(${1 + opacity * 0.05})`,
          opacity: Math.max(0.8, opacity),
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center">
        <div 
          className="container-custom px-4 md:px-6 text-center mx-auto max-w-3xl"
          style={{
            transform: `translateY(${20 - opacity * 20}px)`,
          }}
        >
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary/80 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full mb-4 md:mb-6 animate-fadeIn mx-auto">
            Hunian Nyaman untuk Mahasiswa
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight animate-slideUp">
            Kenyamanan Rumah, <span className="text-accent">Fasilitas Lengkap</span>
          </h1>
          <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mb-6 md:mb-8 animate-slideUp animation-delay-100 mx-auto">
            Kost ekonomis dengan lokasi strategis, fasilitas lengkap, dan suasana yang nyaman untuk mendukung produktivitas Anda
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4 animate-slideUp animation-delay-200 justify-center">
            <a
              href="#rooms"
              className="px-5 md:px-8 py-2.5 md:py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition shadow-lg shadow-primary/30 focus:ring-4 focus:ring-primary/50 text-sm md:text-base"
            >
              Lihat Kamar
            </a>
            <a
              href="#contact"
              className="px-5 md:px-8 py-2.5 md:py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition backdrop-blur-sm border border-white/20 text-sm md:text-base"
            >
              Hubungi Kami
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16 p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 animate-fadeIn animation-delay-300 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-white/70 text-xs md:text-sm">Kamar Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">3 Mnt</div>
              <div className="text-white/70 text-xs md:text-sm">Ke Kampus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/70 text-xs md:text-sm">Kenyamanan</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="h-12 md:h-14 w-6 md:w-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="h-1.5 md:h-2 w-1.5 md:w-2 bg-white rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
} 