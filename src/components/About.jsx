import { useState, useEffect } from 'react';

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Tempat tdk ramai, tidak di pinggir jalan utama dan dekat banget dengan kampus merupakan 3 hal yang membuat nyaman penghuni kost apalagi mahasiswa. Orang tua yang jauh juga tidak perlu kawatir karena lokasi berbaur di masyarakat dan dekat masjid serta fasilitas umum yang dibutuhkan.",
      name: "Sulis Mukaryanah Widarti",
      role: "Orang Tua Mahasiswa",
      avatar: "/images/testimonials/sulis-widarti.jpg",
      rating: 5
    },
    {
      text: "Hunian nyaman di hati nyaman di jiwa, sangat betah disini sudah 4 tahun lebih sampai tidak lulus lulus. kaulah jiwaku takkan pernah tergantikan selamanya, terimakasih ash shaff.",
      name: "Fiqri Elpa Ramadhany",
      role: "Mahasiswa UMY",
      avatar: "/images/testimonials/fiqri.jpg",
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
      avatar: "/images/testimonials/rifki.jpg",
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
    <section id="about" className="py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container-custom px-4 md:px-6">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image section with stacked photos */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden">
            {/* Main image */}
            <div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-cover bg-center rounded-xl md:rounded-2xl transform transition-all duration-500 hover:scale-105" 
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
                   aria-label="Kost Ash-Shaff Exterior View"
                   role="img">
              </div>
            </div>
            
            {/* Overlapping image */}
            <div className="absolute top-8 md:top-12 -right-8 md:-right-12 w-48 md:w-64 h-32 md:h-40 rounded-lg md:rounded-xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <div className="w-full h-full bg-cover bg-center transform transition-all duration-500 hover:scale-105" 
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612965607446-15293313c0ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
                   aria-label="Kost Ash-Shaff Room Interior"
                   role="img">
              </div>
            </div>
            
            {/* Testimonial card - updated to include text */}
            <div className="absolute left-4 md:left-8 bottom-8 md:bottom-12 bg-white p-4 rounded-lg shadow-lg z-10 max-w-[280px] md:max-w-[300px]">
              <div className="flex items-start space-x-3 mb-2">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={`Foto ${testimonials[currentTestimonial].name}`} 
                  className="w-12 h-12 rounded-full object-cover shrink-0" 
                  loading="lazy"
                />
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium">{testimonials[currentTestimonial].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 italic line-clamp-3 mb-2">"{testimonials[currentTestimonial].text}"</p>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-1 mt-2">
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

          {/* Content section */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Tentang Kami
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Lebih dari sekadar tempat tinggal, <span className="text-primary">ini adalah rumah</span>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              <strong>Ash-Shaff Kost Bantul</strong> hadir sebagai solusi hunian nyaman bagi mahasiswa UMY, ISI, dan profesional muda yang menginginkan kenyamanan rumah dengan fasilitas lengkap di kawasan Kasihan, Bantul, Yogyakarta.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Didirikan pada tahun 2018, kami terus berkomitmen menyediakan <strong>kost putra muslim</strong> dengan lingkungan yang mendukung produktivitas, kreativitas, dan kehidupan sosial yang seimbang bagi penghuni kami dengan harga terjangkau.
            </p>
            
            {/* Features grid - simplified */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: "🏠", title: "Lokasi Strategis", desc: "5 menit ke UMY" },
                { icon: "🔒", title: "Keamanan 24/7", desc: "CCTV & Security" },
                { icon: "🌐", title: "WiFi Cepat", desc: "150 Mbps" },
                { icon: "🧹", title: "Bersih", desc: "Dibersihkan rutin" },
              ].map((feature, index) => (
                <div key={index} className="flex bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 mr-3 h-10 w-10 flex items-center justify-center bg-primary/10 rounded-full text-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">{feature.title}</h3>
                    <p className="text-gray-600 text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a
              href="#rooms"
              className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow text-sm"
            >
              Jelajahi Kamar
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
} 