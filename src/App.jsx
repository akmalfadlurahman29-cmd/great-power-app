import React, { useState, useEffect } from 'react';
import { 
  Shield, Sun, Car, Sparkles, Eye, Truck, ChevronDown, ChevronUp, 
  Menu, X, Moon, MapPin, Mail, Phone, ArrowRight, MessageSquare, 
  Lock, User, CheckCircle, Info
} from 'lucide-react';
import WindowFilmCatalog from './WindowFilmCatalog';
const translations = {
  en: {
    nav_home: "Home", nav_about: "About Us", nav_services: "Services", 
    nav_gallery: "Gallery", nav_whyus: "Why Us", nav_contact: "Contact", nav_login: "Login",
    hero_title: "Premium Automotive Protection Solution",
    hero_sub: "Protect Your Investment with High Quality Paint Protection Film & Window Film.",
    btn_consult: "Get Consultation", btn_services: "Our Services",
    about_title: "Defining Excellence", about_desc: "Great Power is the premier destination for high-end vehicle protection.",
    srv_ppf: "Paint Protection Film", srv_window: "Window Film",
    contact_title: "Get in Touch"
  },
  id: {
    nav_home: "Beranda", nav_about: "Tentang Kami", nav_services: "Layanan", 
    nav_gallery: "Galeri", nav_whyus: "Mengapa Kami", nav_contact: "Kontak", nav_login: "Masuk",
    hero_title: "Solusi Perlindungan Otomotif Premium",
    hero_sub: "Lindungi Investasi Anda dengan Paint Protection Film & Kaca Film Kualitas Tinggi.",
    btn_consult: "Konsultasi", btn_services: "Layanan Kami",
    about_title: "Mendefinisikan Keunggulan", about_desc: "Great Power adalah tujuan utama untuk perlindungan kendaraan kelas atas.",
    srv_ppf: "Paint Protection Film", srv_window: "Kaca Film",
    contact_title: "Hubungi Kami"
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(true);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWaOpen, setIsWaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = isDark ? 'dark' : '';
  }, [isDark]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-orange-600 font-bold text-2xl">GREAT POWER</div>
          
          <div className="hidden md:flex space-x-6 items-center">
            {['home', 'about', 'services', 'gallery', 'contact'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-orange-500 transition-colors capitalize">{t[`nav_${item}`]}</a>
            ))}
            <button onClick={() => setLang(l => l === 'en' ? 'id' : 'en')} className="font-bold border border-white/20 px-2 rounded">{lang.toUpperCase()}</button>
            <button onClick={() => setIsDark(!isDark)}>{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
            <button onClick={() => setIsLoginOpen(true)} className="bg-orange-600 px-6 py-2 rounded-full hover:bg-orange-700 transition">{t.nav_login}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">{t.hero_title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.hero_sub}</p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-orange-600 px-8 py-4 rounded-full font-bold">{t.btn_consult}</a>
            <a href="#services" className="border border-white/20 px-8 py-4 rounded-full font-bold">{t.btn_services}</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: t.srv_ppf },
              { icon: Eye, title: t.srv_window },
              { icon: Sparkles, title: "Ceramic Protection" }
            ].map((s, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl bg-black/20 hover:border-orange-600 transition group cursor-pointer" onClick={() => document.getElementById('gallery').scrollIntoView({behavior: 'smooth'})}>
                <s.icon className="text-orange-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <span className="text-orange-500 flex items-center gap-2 group-hover:gap-4 transition-all">Read More <ArrowRight size={16} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Katalog Window Film */}
      <div className="py-10 bg-black px-4">
        <div className="max-w-4xl mx-auto">
          <WindowFilmCatalog />
        </div>
      </div>
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-8">{t.contact_title}</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-4 rounded bg-gray-800 border border-gray-700" />
              <input type="email" placeholder="Email" className="w-full p-4 rounded bg-gray-800 border border-gray-700" />
              <textarea placeholder="Message" className="w-full p-4 rounded bg-gray-800 border border-gray-700 h-32" />
              <button className="w-full bg-orange-600 p-4 rounded font-bold">Submit</button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-gray-400">
               <MapPin /> Bizpark PIK 2 A3 No 16
            </div>
          </div>
        </div>
      </section>

      {/* Floating WA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsWaOpen(!isWaOpen)} className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition">
          <MessageSquare size={30} />
        </button>
        {isWaOpen && (
          <div className="absolute bottom-16 right-0 bg-gray-800 p-4 rounded-xl w-64 shadow-2xl">
            <p className="mb-2 font-bold">Chat Admin</p>
            <a href="https://wa.me/6281381906733" className="block py-2 hover:text-orange-500">+62 813-8190-6733</a>
            <a href="https://wa.me/6287886876139" className="block py-2 hover:text-orange-500">+62 878-8687-6139</a>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
          <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-sm relative">
            <button onClick={() => setIsLoginOpen(false)} className="absolute right-4 top-4"><X /></button>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div className="space-y-4">
              <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
              <input type="password" placeholder="Password" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
              <button className="w-full bg-orange-600 p-3 rounded font-bold">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}