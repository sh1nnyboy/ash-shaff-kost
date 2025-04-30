import { MapPin, Navigation, Clock, Building, ShoppingCart, MapIcon } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom px-4 md:px-0">
        <div className="relative text-center mb-16">
          <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full opacity-70"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Lokasi Kost
            <div className="absolute -right-8 -top-8 w-16 h-16 bg-accent/5 rounded-full -z-10"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lokasi strategis dekat dengan berbagai fasilitas umum
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Map section - spans 7 columns on large screens */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden h-[400px] lg:h-full shadow-lg border border-gray-200 backdrop-blur-sm bg-white/50 p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.6240290815024!2d110.31914584021477!3d-7.809698263111741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af80fe16566ed%3A0x838e9cc921409c4!2sKost%20Putra%20ASH%20SHAFF!5e0!3m2!1sen!2sid!4v1745941066980!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kost Ash-Shaff Location"
                className="shadow-inner"
              ></iframe>
            </div>
          </div>

          {/* Info section - spans 5 columns on large screens */}
          <div className="lg:col-span-5">
            {/* Address Card */}
            <div className="bg-white backdrop-blur-sm shadow-lg rounded-2xl border border-gray-100 p-6 mb-6 transition-transform hover:translate-y-[-5px]">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Alamat Lengkap
                  </h3>
                  <p className="text-gray-600">
                    Ngebel RT.01, Geblagan, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55184
                  </p>
                </div>
              </div>
            </div>

            {/* Distances Card */}
            <div className="bg-white backdrop-blur-sm shadow-lg rounded-2xl border border-gray-100 p-6 mb-6 transition-transform hover:translate-y-[-5px]">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Navigation className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">Jarak ke Lokasi Penting</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50/80 rounded-xl p-3 flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-3">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium text-sm">UMY</span>
                    <p className="text-gray-600 text-xs">± 3 menit (510m)</p>
                  </div>
                </div>
                
                <div className="bg-gray-50/80 rounded-xl p-3 flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="font-medium text-sm">RS PKU</span>
                    <p className="text-gray-600 text-xs">± 4 menit (1.4km)</p>
                  </div>
                </div>
                
                <div className="bg-gray-50/80 rounded-xl p-3 flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-3">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium text-sm">Pasar Gamping</span>
                    <p className="text-gray-600 text-xs">± 5 menit (1.6km)</p>
                  </div>
                </div>
                
                <div className="bg-gray-50/80 rounded-xl p-3 flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium text-sm">Malioboro</span>
                    <p className="text-gray-600 text-xs">± 13 menit (6.2km)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Card */}
            <div className="bg-white backdrop-blur-sm shadow-lg rounded-2xl border border-gray-100 p-6 mb-6 transition-transform hover:translate-y-[-5px]">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Transportasi</h3>
                  <p className="text-gray-600">
                    Mudah diakses dengan transportasi umum. Tersedia angkutan umum dan ojek online yang beroperasi 24 jam. Bisa diakses kendaraan roda dua maupun roda empat.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/CjWa7vE96hG2QG5EA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              <MapIcon className="h-5 w-5 mr-2" />
              <span>Buka di Google Maps</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 