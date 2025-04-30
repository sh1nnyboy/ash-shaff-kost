import { useState, useEffect } from 'react';

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Tempat tdk ramai, tidak di pinggir jalan utama dan dekat banget dengan kampus merupakan 3 hal yang membuat nyaman penghuni kost apalagi mahasiswa. Orang tua yang jauh juga tidak perlu kawatir karena lokasi berbaur di masyarakat dan dekat masjid serta fasilitas umum yang dibutuhkan. Rekomended deh utk yang butuh kost.",
      name: "Sulis Mukaryanah Widarti",
      role: "Orang Tua Mahasiswa",
      avatar: "/images/testimonials/sulis-widarti.png",
      rating: 5
    },
    {
      text: "Hunian nyaman di hati nyaman di jiwa, sangat betah disini sudah 4 tahun lebih sampai tidak lulus lulus. kaulah jiwaku takkan pernah tergantikan selamanya, terimakasih ash shaff.",
      name: "Fiqri Elpa Ramadhany",
      role: "Mahasiswa UMY",
      avatar: "/images/testimonials/fiqrielpa.jpg",
      rating: 5
    },
    {
      text: "Tempatnya bagus, enak, nyaman, kadang dingin kadang panas pokoknya mantap jiwaa",
      name: "Bramara A. Sambada",
      role: "Mahasiswa UMY",
      avatar: "/images/testimonials/bramara.jpg",
      rating: 5
    },
    {
      text: "Kost Putra Ash-Shaff adalah hunian nyaman seperti rumah dikampung halaman. tidak terlalu ramai, penghuni ramah, ibu kost baik hati. udah 3 tahun disini ga pernah ngerasa bosen",
      name: "Rifki Asrofi",
      role: "Mahasiswa UMY",
      avatar: "/images/testimonials/rifqi.jpg",
      rating: 5
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="about" className="py-12 md:py-16 bg-[#E4EEE2]">
      <div className="container-custom px-4 md:px-6">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image section with stacked photos and testimonial */}
          <div className="relative h-[450px] md:h-[450px] lg:h-[550px]">
            {/* Main image */}
            <div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-cover bg-center rounded-xl md:rounded-2xl transform transition-all duration-500 hover:scale-105" 
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
                   aria-label="Kost Ash-Shaff Exterior View"
                   role="img">
              </div>
            </div>
            
            {/* Testimonial card - repositioned to bottom left */}
            <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8 bg-white p-5 rounded-xl shadow-lg z-20 max-w-[320px]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'hidden'}`}
                >
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 mx-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">4.8 (50+ ulasan)</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 text-center mb-4">"{testimonial.text}"</p>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={`Foto ${testimonial.name}`} 
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-primary w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Content section with animations */}
          <div className="animate-fadeIn">
            <span className="inline-block px-3 py-1 bg-white text-primary text-sm font-medium rounded-full mb-4 animate-slideInRight" style={{ animationDelay: "0.2s" }}>
              Tentang Kami
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 animate-slideInRight" style={{ animationDelay: "0.4s" }}>
              Lebih dari sekadar tempat tinggal, <span className="text-primary">ini adalah rumah</span>
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed text-base animate-slideInRight" style={{ animationDelay: "0.6s" }}>
              <strong>Ash-Shaff Kost Bantul</strong> hadir sebagai solusi hunian nyaman bagi mahasiswa UMY, ISI, dan profesional muda yang menginginkan kenyamanan rumah dengan fasilitas lengkap di kawasan Kasihan, Bantul, Yogyakarta.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-base animate-slideInRight" style={{ animationDelay: "0.8s" }}>
              Didirikan pada tahun 2018, kami terus berkomitmen menyediakan <strong>kost putra muslim</strong> dengan lingkungan yang mendukung produktivitas, kreativitas, dan kehidupan sosial yang seimbang bagi penghuni kami dengan harga terjangkau.
            </p>
            
            {/* Features grid - with animation */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex bg-white p-4 rounded-lg shadow-sm animate-fadeIn text-left" style={{ animationDelay: "1s" }}>
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">Lokasi Strategis</h3>
                  <p className="text-xs text-gray-600">5 menit jalan kaki ke kampus UMY</p>
                </div>
              </div>
              
              <div className="flex bg-white p-4 rounded-lg shadow-sm animate-fadeIn text-left" style={{ animationDelay: "1.2s" }}>
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">Keamanan 24/7</h3>
                  <p className="text-xs text-gray-600">CCTV & Security</p>
                </div>
              </div>
              
              <div className="flex bg-white p-4 rounded-lg shadow-sm animate-fadeIn text-left" style={{ animationDelay: "1.4s" }}>
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">Internet Cepat</h3>
                  <p className="text-xs text-gray-600">WiFi 150 Mbps</p>
                </div>
              </div>
              
              <div className="flex bg-white p-4 rounded-lg shadow-sm animate-fadeIn text-left" style={{ animationDelay: "1.6s" }}>
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800">Kebersihan</h3>
                  <p className="text-xs text-gray-600">Dibersihkan setiap minggunya</p>
                </div>
              </div>
            </div>
            
            <a
              href="#rooms"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-md text-sm transition-colors animate-bounceIn"
              style={{ animationDelay: "1.8s" }}
            >
              Jelajahi Kamar
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
} 