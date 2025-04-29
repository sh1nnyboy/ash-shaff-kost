import { useState, useEffect } from 'react';

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Tempat tdk ramai, tidak di pinggir jalan utama dan dekat banget dengan kampus merupakan 3 hal yang membuat nyaman penghuni kost apalagi mahasiswa. Orang tua yang jauh juga tidak perlu kawatir karena lokasi berbaur di masyarakat dan dekat masjid serta fasilitas umum yang dibutuhkan. Rekomended deh utk yang butuh kost.",
      name: "Sulis Mukaryanah Widarti",
      role: "Orang Tua Mahasiswa",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    },
    {
      text: "Hunian nyaman di hati nyaman di jiwa, sangat betah disini sudah 4 tahun lebih sampai tidak lulus lulus. kaulah jiwaku takkan pernah tergantikan selamanya, terimakasih ash shaff.",
      name: "Fiqri Elpa Ramadhany",
      role: "Mahasiswa UMY",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      text: "Tempatnya bagus, enak, nyaman, kadang dingin kadang panas pokoknya mantap jiwaa",
      name: "Bramara A. Sambada",
      role: "Mahasiswa UMY",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5
    },
    {
      text: "Kost Putra Ash-Shaff adalah hunian nyaman seperti rumah dikampung halaman. tidak terlalu ramai, penghuni ramah, ibu kost baik hati. udah 3 tahun disini ga pernah ngerasa bosen",
      name: "Rifki Asrofi",
      role: "Mahasiswa UMY",
      avatar: "https://randomuser.me/api/portraits/men/81.jpg",
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
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/5">
      <div className="container-custom px-4 md:px-6">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image section with stacked photos */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden">
            {/* Main image */}
            <div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-cover bg-center rounded-xl md:rounded-2xl transform transition-all duration-500 hover:scale-105" 
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
                   aria-label="Kost Ash-Shaff Exterior View"
                   role="img">
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -right-4 md:-right-6 -bottom-4 md:-bottom-6 w-40 md:w-64 h-40 md:h-64 bg-primary/10 rounded-full backdrop-blur-sm z-0"></div>
            
            {/* Overlapping image */}
            <div className="absolute top-8 md:top-12 -right-8 md:-right-12 w-48 md:w-72 h-32 md:h-48 rounded-lg md:rounded-xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <div className="w-full h-full bg-cover bg-center transform transition-all duration-500 hover:scale-105" 
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612965607446-15293313c0ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
                   aria-label="Kost Ash-Shaff Room Interior"
                   role="img">
              </div>
            </div>
            
            {/* Testimonial carousel */}
            <div className="absolute left-4 md:left-8 bottom-8 md:bottom-16 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-xl z-10 max-w-[260px] md:max-w-xs">
              {/* Navigation buttons - moved outside the text content */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                <button 
                  onClick={prevTestimonial}
                  className="w-6 md:w-7 h-6 md:h-7 flex items-center justify-center bg-white shadow-md hover:bg-gray-100 rounded-full text-gray-500"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                <button 
                  onClick={nextTestimonial}
                  className="w-6 md:w-7 h-6 md:h-7 flex items-center justify-center bg-white shadow-md hover:bg-gray-100 rounded-full text-gray-500"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-4 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            
              <div className="flex items-center mb-3 md:mb-4">
                <div className="flex" aria-label={`Rating: ${testimonials[currentTestimonial].rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className={`w-4 md:w-5 h-4 md:h-5 ${star <= testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 ml-2 text-xs md:text-sm">4.8 (50+ ulasan)</span>
              </div>
              
              {/* Better testimonial text handling */}
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <blockquote 
                    key={index}
                    className={`transition-opacity duration-300 min-h-[80px] md:min-h-[100px] ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-gray-700 italic text-xs md:text-sm">{testimonial.text}</p>
                  </blockquote>
                ))}
              </div>
              
              <div className="mt-3 md:mt-4 flex items-center">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={`Foto ${testimonials[currentTestimonial].name}, ${testimonials[currentTestimonial].role}`} 
                  className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover" 
                  loading="lazy"
                  width="40" 
                  height="40"
                />
                <div className="ml-2 md:ml-3">
                  <cite className="text-xs md:text-sm font-medium not-italic">{testimonials[currentTestimonial].name}</cite>
                  <p className="text-[10px] md:text-xs text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              {/* Carousel indicators */}
              <div className="flex justify-center gap-1 md:gap-2 mt-3 md:mt-4" role="tablist">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-primary w-3 md:w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-selected={index === currentTestimonial}
                    role="tab"
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Content section */}
          <div>
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full mb-4 md:mb-6">
              Tentang Kami
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
              Lebih dari sekadar tempat tinggal, <span className="text-primary">ini adalah rumah</span>
            </h2>
            
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              <strong>Ash-Shaff Kost Bantul</strong> hadir sebagai solusi hunian nyaman bagi mahasiswa UMY, ISI, dan profesional muda yang menginginkan kenyamanan rumah dengan fasilitas lengkap di kawasan Kasihan, Bantul, Yogyakarta.
            </p>
            
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Didirikan pada tahun 2018, kami terus berkomitmen menyediakan <strong>kost putra dan putri</strong> dengan lingkungan yang mendukung produktivitas, kreativitas, dan kehidupan sosial yang seimbang bagi penghuni kami dengan harga terjangkau.
            </p>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                { icon: "🏠", title: "Lokasi Strategis", desc: "5 menit jalan kaki ke kampus UMY" },
                { icon: "🔒", title: "Keamanan 24/7", desc: "CCTV & Security" },
                { icon: "🌐", title: "Internet Cepat", desc: "WiFi 150 Mbps" },
                { icon: "🧹", title: "Kebersihan", desc: "Dibersihkan setiap minggunya" },
              ].map((feature, index) => (
                <div key={index} className="flex bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mr-3 md:mr-4 h-10 md:h-12 w-10 md:w-12 flex items-center justify-center bg-primary/10 rounded-full text-lg md:text-xl" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-0.5 md:mb-1 text-sm md:text-base">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a
              href="#rooms"
              className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition shadow-lg shadow-primary/20 text-sm md:text-base"
              aria-label="Lihat semua kamar tersedia di Kost Ash-Shaff Bantul"
            >
              Jelajahi Kamar
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
} 