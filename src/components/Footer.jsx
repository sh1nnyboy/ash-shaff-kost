import { MapPin, Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(80,113,109,0.1),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,83,25,0.08),transparent_20%)]"></div>
      
      <div className="container-custom relative z-10 py-16 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">Ash-Shaff</span>
              <span className="ml-2 text-xl text-gray-300">Kost</span>
            </div>
            
            <p className="text-gray-400 max-w-md leading-relaxed text-left">
              Hunian nyaman, aman dan strategis untuk mahasiswa dan pekerja di kawasan Bantul Yogyakarta.
            </p>
            
            {/* Contact icons with hover effects */}
            <div className="flex space-x-4">
              <a href="mailto:fusiodabanna@gmail.com" className="bg-gray-800/70 p-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://wa.me/6285868015805" target="_blank" rel="noopener noreferrer" className="bg-gray-800/70 p-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Navigasi
              <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-primary"></div>
            </h3>
            <ul className="space-y-3">
              {['Beranda', 'Fasilitas', 'Kamar', 'Lokasi', 'Kontak'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white flex items-center transition-all duration-300 hover:translate-x-1 group"
                  >
                    <span className="h-1.5 w-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="md:col-span-4 text-left">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Kontak
              <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-primary"></div>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <div className="p-2 bg-gray-800/70 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span className="text-gray-400 text-sm text-left">
                  Ngebel RT.01, Geblagan, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55184
                </span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-gray-800/70 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <a href="tel:+6285868015805" className="text-gray-400 hover:text-white transition-colors text-left">
                  +62 858-6801-5805
                </a>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-gray-800/70 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <a href="mailto:fusiodabanna@gmail.com" className="text-gray-400 hover:text-white transition-colors text-left">
                  fusiodabanna@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section with subtle divider */}
        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-left">&copy; {currentYear} Kost Ash-Shaff. All rights reserved.</p>
          
          <a 
            href="https://maps.app.goo.gl/CjWa7vE96hG2QG5EA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-gray-400 hover:text-white mt-4 md:mt-0 transition-colors text-sm text-left"
          >
            <span>Lihat di Google Maps</span>
            <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}