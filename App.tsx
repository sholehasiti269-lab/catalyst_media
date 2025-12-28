
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  Layout,
  Code,
  Smartphone,
  CheckCircle2,
  Settings,
  Search,
  MessageSquare
} from 'lucide-react';

// --- Custom Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* BRAND AREA */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <Zap className="text-[#c5a059] w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
              CATALYST<span className="text-[#c5a059]">MEDIA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#c5a059] ${isScrolled ? 'text-navy' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-[#c5a059] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#b38f4a] transition-all transform hover:scale-105">
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-navy' : 'text-white'}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-navy hover:text-[#c5a059]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-navy text-center text-white w-full py-3 rounded-lg font-bold">
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#002B49]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy/50 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 bg-[#c5a059] rounded-full animate-pulse"></span>
            <span>Digital Agency Khusus Organisasi</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            Menjadi <span className="text-[#c5a059]">Katalis</span> Pertumbuhan Digital Organisasi Anda.
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            Kami membantu organisasi membangun identitas digital yang kuat melalui website profesional yang responsif, modern, dan berdampak tinggi.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href="#contact" className="bg-[#c5a059] hover:bg-[#b38f4a] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all group">
              <span>Mulai Proyek</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all text-center">
              Eksplor Layanan
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Digital Workspace" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-full h-full bg-[#c5a059]/20 rounded-2xl -z-10"></div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-[220px] animate-bounce">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 className="text-green-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Status Layanan</p>
              <p className="text-sm font-bold text-navy leading-none">Siap Menerima Proyek</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                <img src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" alt="Team Work" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" alt="Design Thinking" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy p-6 rounded-2xl shadow-2xl text-white text-center min-w-[150px]">
              <p className="text-4xl font-bold text-[#c5a059]">A+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Kualitas Desain</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-navy font-bold text-sm uppercase tracking-[0.2em] mb-4">Tentang Catalyst Media</h2>
              <h3 className="text-4xl font-serif text-navy mb-6 leading-tight">Mendorong Revolusi Digital Melalui Inovasi</h3>
              <p className="text-slate-600 leading-relaxed">
                Diambil dari makna kata 'Katalis', kami hadir untuk mempercepat proses transformasi organisasi Anda ke arah yang lebih modern dan efisien. Kami percaya bahwa setiap organisasi, sekecil apapun, layak mendapatkan representasi digital kelas dunia yang mencerminkan nilai-nilai luhurnya.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Visi Kami", desc: "Menjadi mitra digital utama bagi organisasi sosial & bisnis." },
                { title: "Misi Kami", desc: "Membangun teknologi yang inklusif, cepat, dan berdampak." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border-l-4 border-[#c5a059]">
                  <p className="font-bold text-navy mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-4 border-t border-slate-100">
              {[
                "Desain yang berfokus pada pengalaman pengguna (UX).",
                "Integrasi teknologi terbaru untuk kecepatan maksimal.",
                "Dukungan penuh dari perencanaan hingga peluncuran."
              ].map((point, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1 bg-[#c5a059]/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  </div>
                  <p className="text-navy font-medium text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-[#c5a059]" />,
      title: "Custom Web Design",
      desc: "Desain eksklusif yang mencerminkan visi dan misi unik organisasi Anda tanpa menggunakan template pasaran."
    },
    {
      icon: <Code className="w-8 h-8 text-[#c5a059]" />,
      title: "Web Development",
      desc: "Pengembangan website dengan performa tinggi menggunakan teknologi modern seperti React, Next.js, dan lainnya."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#c5a059]" />,
      title: "Mobile Optimization",
      desc: "Memastikan website tampil sempurna di semua perangkat, dari smartphone hingga tablet dan desktop."
    },
    {
      icon: <Search className="w-8 h-8 text-[#c5a059]" />,
      title: "SEO Strategy",
      desc: "Optimalisasi mesin pencari agar organisasi Anda lebih mudah ditemukan oleh calon donor atau anggota baru."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#c5a059]" />,
      title: "Maintenance",
      desc: "Layanan pemeliharaan sistem secara berkala untuk memastikan keamanan dan stabilitas website setiap saat."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#c5a059]" />,
      title: "Digital Branding",
      desc: "Membantu merumuskan identitas visual digital yang konsisten agar mudah diingat oleh audiens target Anda."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-navy font-bold text-sm uppercase tracking-[0.2em] mb-4">Layanan Unggulan</h2>
          <h3 className="text-4xl font-serif text-navy mb-6">Solusi Digital Menyeluruh Untuk Organisasi</h3>
          <p className="text-slate-600">Kami tidak hanya membangun website, kami membangun rumah digital yang membantu organisasi Anda berinteraksi dengan audiens secara lebih efektif.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-[#c5a059]/50 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 p-4 bg-slate-50 rounded-xl inline-block group-hover:bg-[#c5a059]/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Work Process Mini Section */}
        <div className="mt-20 pt-16 border-t border-slate-200">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", label: "Analisis & Riset" },
                { step: "02", label: "Perencanaan Desain" },
                { step: "03", label: "Pengembangan Code" },
                { step: "04", label: "Peluncuran & Support" }
              ].map((p, i) => (
                <div key={i} className="text-center">
                  <span className="text-4xl font-bold text-slate-200 block mb-2">{p.step}</span>
                  <p className="font-bold text-navy uppercase tracking-widest text-xs">{p.label}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy rounded-[3rem] p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 shadow-2xl">
          <div>
            <h2 className="text-[#c5a059] font-bold text-sm uppercase tracking-[0.2em] mb-4">Kontak Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Siap Mempercepat Transformasi Digital Anda?</h3>
            <p className="text-slate-300 text-lg mb-10">
              Isi formulir di samping dan tim ahli kami akan menghubungi Anda dalam waktu kurang dari 24 jam untuk diskusi mendalam.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#c5a059]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Telepon / WhatsApp</p>
                  <p className="text-lg font-semibold">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#c5a059]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Email Resmi</p>
                  <p className="text-lg font-semibold">hello@catalystmedia.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-navy shadow-inner">
            <h4 className="font-bold mb-6 text-xl">Kirim Pesan</h4>
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama Anda" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c5a059]" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Nama Organisasi</label>
                <input type="text" placeholder="Nama organisasi/yayasan" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c5a059]" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</label>
                <input type="email" placeholder="Alamat email aktif" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c5a059]" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Detail Kebutuhan</label>
                <textarea rows={3} placeholder="Apa yang bisa kami bantu?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c5a059] resize-none"></textarea>
              </div>
              <button className="w-full bg-[#c5a059] text-white font-bold py-4 rounded-xl hover:bg-[#b38f4a] transition-all shadow-lg shadow-[#c5a059]/20 transform active:scale-95">
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <Zap className="text-[#c5a059] w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-navy">
                CATALYST<span className="text-[#c5a059]">MEDIA</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Membangun fondasi digital yang kuat untuk organisasi masa depan. Berinovasi melalui desain dan teknologi yang berpusat pada manusia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-50 rounded-full border border-slate-200 text-navy hover:bg-[#c5a059] hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-full border border-slate-200 text-navy hover:bg-[#c5a059] hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-full border border-slate-200 text-navy hover:bg-[#c5a059] hover:text-white transition-all"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Navigasi Cepat</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-[#c5a059]">Beranda</a></li>
              <li><a href="#about" className="hover:text-[#c5a059]">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-[#c5a059]">Layanan Digital</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Layanan Kami</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#c5a059]">Website Development</a></li>
              <li><a href="#" className="hover:text-[#c5a059]">UI/UX Experience Design</a></li>
              <li><a href="#" className="hover:text-[#c5a059]">SEO & Content Strategy</a></li>
              <li><a href="#" className="hover:text-[#c5a059]">Sistem Informasi Organisasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Kontak & Lokasi</h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              SCBD District 8, Senopati<br />
              Jakarta Selatan, DKI Jakarta<br />
              Indonesia
            </p>
            <div className="bg-navy/5 p-4 rounded-xl border border-navy/10 inline-block">
              <p className="text-xs font-bold text-navy">Butuh Bantuan Mendesak?</p>
              <p className="text-xs text-[#c5a059] mt-1 font-semibold underline cursor-pointer">Chat WhatsApp Admin</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0 uppercase tracking-[0.1em]">
          <p>&copy; 2024 Catalyst Media Digital Agency. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-navy">Privacy Policy</a>
            <a href="#" className="hover:text-navy">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
