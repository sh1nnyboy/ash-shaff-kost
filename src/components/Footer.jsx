import { MapPin, Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#324f45] to-[#1f2f29] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/40 via-emerald-500/70 to-emerald-400/40"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl"></div>
      
      {/* Wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-6 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center">
              <div className="text-3xl font-extralight tracking-tight">
                <span className="font-medium">Ash</span>Shaff
                <span className="ml-1 text-sm bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">KOST</span>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md leading-relaxed text-left">
              Hunian nyaman, aman dan strategis untuk mahasiswa dan pekerja di kawasan Bantul Yogyakarta.
            </p>
            
            {/* Contact icons with hover effects */}
            <div className="flex space-x-3 pt-3">
              <a href="mailto:fusiodabanna@gmail.com" className="bg-white/5 hover:bg-emerald-500/80 p-2.5 rounded-full transition-all duration-300 border border-white/10 hover:border-emerald-500/30">
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a href="https://wa.me/6285868015805" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-emerald-500/80 p-2.5 rounded-full transition-all duration-300 border border-white/10 hover:border-emerald-500/30">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Navigasi
              <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-emerald-400"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Beranda' },
                { id: 'facilities', label: 'Fasilitas' },
                { id: 'rooms', label: 'Kamar' },
                { id: 'location', label: 'Lokasi' },
                { id: 'contact', label: 'Kontak' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.id}`} 
                    className="text-gray-300 hover:text-white flex items-center transition-all duration-300 hover:translate-x-1 group"
                  >
                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="md:col-span-4 text-left">
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Kontak
              <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-emerald-400"></div>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-3 mt-1 transition-all duration-300 group-hover:text-emerald-400">
                  <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <MapPin className="h-4 w-4 text-emerald-300 group-hover:text-emerald-300" />
                  </div>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed text-left group-hover:text-white transition-colors duration-300">
                  Ngebel RT.01, Geblagan, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55184
                </span>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Phone className="h-4 w-4 text-emerald-300" />
                  </div>
                </div>
                <a href="tel:+6285868015805" className="text-gray-300 group-hover:text-white transition-colors text-left">
                  +62 858-6801-5805
                </a>
              </div>
              <div className="flex items-center group">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Mail className="h-4 w-4 text-emerald-300" />
                  </div>
                </div>
                <a href="mailto:fusiodabanna@gmail.com" className="text-gray-300 group-hover:text-white transition-colors text-left">
                  fusiodabanna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section with subtle divider */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-left">&copy; {currentYear} Kost Ash-Shaff. All rights reserved.</p>
          
          <a 
            href="https://maps.app.goo.gl/CjWa7vE96hG2QG5EA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-gray-400 hover:text-white mt-4 md:mt-0 transition-colors text-sm group"
          >
            <span>Lihat di Google Maps</span>
            <ExternalLink className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}