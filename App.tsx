
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, GraduationCap, Users, Map, ShieldCheck, Menu, X, 
  Calendar, ChevronLeft, ChevronRight, Briefcase, Info, Award, 
  Palette, Music, Target, Compass, Terminal, GitBranch, Globe, 
  Edit3, FolderPlus, CheckCircle2, Copy, ExternalLink, Newspaper, ArrowRight,
  Sun, Moon
} from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ArtistCard from './components/ArtistCard';
import AIChat from './components/AIChat';
import Carousel from './components/Carousel';
import { StaffMember } from './types';

// ==========================================
// KONFIGURASI TEMA
// ==========================================
const THEMES = {
  light: {
    bgPrimary: '#F8FAFC',    
    bgSecondary: '#FFFFFF',  
    textPrimary: '#0F172A',  
    textSecondary: '#475569',
    accentRed: '#EE2A24',    
    accentBlue: '#2563EB',   
    border: 'rgba(15, 23, 42, 0.08)',
    navBg: '#FFFFFF'
  },
  dark: {
    bgPrimary: '#001a33',    
    bgSecondary: '#000d1a',  
    textPrimary: '#FFFFFF',  
    textSecondary: '#94A3B8',
    accentRed: '#EE2A24',    
    accentBlue: '#3B82F6',   
    border: 'rgba(255, 255, 255, 0.08)',
    navBg: '#000d1a'
  }
};

// Menggunakan pautan yang lebih stabil daripada domain rasmi
const LOGO_URL = "https://ipgkt.edu.my/wp-content/uploads/2021/08/logo-ipgkt-1.png";
const FALLBACK_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Logo_IPGM.png/200px-Logo_IPGM.png";

const JSS_STAFF: StaffMember[] = [
  { 
    id: '1', 
    name: 'Dr. Ahmadi bin Abd Wahab', 
    position: 'Ketua Jabatan', 
    field: 'Geografi & Sejarah', 
    image: 'https://lh3.googleusercontent.com/pw/AP1GczP8_57pZa4Aw3DUQLEi-J8LVHxInZQMZ0RlmhgCEK0ookYOwHpAh62qgsgZmpOfUVaIl-Lgt7L6MC1XWPjgYdjAA_mP3AeMcMskaFULhiBChcDVCIzfuZ2DLCEgwdVCxq5v6d2dCItsmLGQGJaN9w_0=w800-h800-s-no-gm?authuser=0',
    description: 'Beliau merupakan Ketua Jabatan yang memiliki kelayakan Ijazah Doktor Falsafah (PhD) dalam Sains Bumi, Sarjana Sains Sosial, dan Ijazah Sarjana Muda Sastera dengan Pendidikan. Kepakaran beliau menjadi teras dalam memacu kualiti akademik di Jabatan Sains Sosial.'
  },
  { 
    id: '2', 
    name: 'En. Mhd Yusof bin Zakaria', 
    position: 'Pensyarah Kanan', 
    field: 'Unit Sejarah', 
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMsNRQfR-qOWvxmAMFaoErY0s_qgX1cpxTDum1jLt2ijAG9oPJieoE7_w8kWoGMQNyeP2E9g3pf-LzwxPQ9W20a73CLuE8RzbJIw9X1NjEZ08mU1Z07Bjcmq5IrdTfqURGA92F6OwPieNUfdvDAPibD=w800-h800-s-no-gm?authuser=0',
    description: 'Pensyarah Kanan yang memiliki kelayakan Ijazah Sarjana (Pengurusan Disiplin), Ijazah Sarjana Muda serta Diploma Pendidikan dalam bidang Sejarah and Pengajian Melayu. Kepakaran beliau merangkumi pengurusan disiplin dan pendidikan sejarah kebangsaan.'
  },
  { 
    id: '3', 
    name: 'Dr. Jusman bin Aman Setia', 
    position: 'Ketua Unit Sejarah', 
    field: 'Unit Sejarah', 
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN-BCh1CRAv_Sw2JuAuWtGzDXoa8pCMW_0iwOei-aSr-AQ5zKmMmsjaKhsCFoZCkNMFhpAys0AnYI_W1WuaJ71jnuj35jO3f1uiG3dqlLPb0j7zWER8keE32Pzj3bjbrtUpnLu3tMQYtnGVcRJeB24G=w800-h800-s-no-gm?authuser=0',
    description: 'Beliau memegang jawatan Ketua Unit Sejarah dengan kelayakan PhD dan Sarjana dalam bidang Sejarah, Ijazah Sarjana Muda Sastera dengan Kepujian (Sejarah & Linguistik), serta Diploma Pendidikan (Pemulihan Khas). Kepimpinan beliau memperkukuh integriti kurikulum sejarah di JSS.'
  },
  { 
    id: '4', 
    name: 'Pn. Aggenes Tona Antonius', 
    position: 'Pensyarah', 
    field: 'Unit Sejarah', 
    image: 'https://lh3.googleusercontent.com/pw/AP1GczP1wcAHouAjo0gADvUazhLCk1y_BWKXQhPRBa2RGjrKJ8dNQ1SDcomrI9Ka2_xx_3Fc0-xM4zmKH_OfNd6lELpLVvGJmuiLFUHuvhBltVEp6lGgyhmoDix9OEowkGks-TsAWNcY0pwj8WAIvtT31KkX=w800-h800-s-no-gm?authuser=0',
    description: 'Beliau memiliki kelayakan Ijazah Sarjana Psikologi Pendidikan, Ijazah Sarjana Muda Sastera (Sejarah), dan Sijil Perguruan Asas. Kepakaran beliau dalam psikologi pendidikan diaplikasikan dalam Unit Sejarah bagi menyokong keberkesanan pengajaran dan pembelajaran sejarah di IPGKT.'
  },
  { 
    id: '5', 
    name: 'Dr. Muliyati binti Timbang', 
    position: 'Ketua Unit Muzik & Seni', 
    field: 'Unit Muzik & PSV', 
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNR2Hs5o19E2CBwWUMZUk0cXvaTTE98bjNoIDot_6TsCTlEx1mcaCgpEE-mkHK1lZU_mVmT42f95FvUw6zdUdQMmHWaqM5L9GO94fYqVsTNJn52d8iYGEQoyQcS0d3-dvsaCkA9XQmqmWZX1hG0rLDs=w800-h800-s-no-gm?authuser=0',
    description: 'Ketua Unit Pendidikan Muzik dan Seni Visual yang berkelulusan PhD dan Sarjana dalam Pengurusan Pendidikan, Ijazah Sarjana Muda Pendidikan (Sejarah & Geografi), serta Diploma Perguruan Malaysia (Pendidikan Muzik & Pendidikan Seni. Kepakaran beliau memacu integrasi seni dalam pengurusan pendidikan.'
  },
];

const JSS_NEWS = [
  { 
    date: '15 Mac 2024', 
    title: 'Mesyuarat Penyelarasan Kurikulum Sejarah 2024', 
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    category: 'Akademik'
  },
  { 
    date: '10 Mac 2024', 
    title: 'Kolaborasi Seni Visual Bersama Komuniti Tawau', 
    img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000&auto=format&fit=crop',
    category: 'Seni Visual'
  },
  { 
    date: '05 Mac 2024', 
    title: 'Bengkel Teknikal Alat Muzik Tradisional', 
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop',
    category: 'Muzik'
  },
  { 
    date: '01 Mac 2024', 
    title: 'Anugerah Perkhidmatan Cemerlang JSS 2023', 
    img: 'https://images.unsplash.com/photo-1531482615713-22afd69097998?q=80&w=1000&auto=format&fit=crop',
    category: 'Anugerah'
  }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const theme = isDarkMode ? THEMES.dark : THEMES.light;

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.style.backgroundColor = theme.bgPrimary;
    document.body.style.color = theme.textPrimary;
  }, [isDarkMode, theme]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative min-h-screen transition-colors duration-500 selection:bg-[#EE2A24] selection:text-white cursor-auto md:cursor-none overflow-x-hidden"
      style={{ backgroundColor: theme.bgPrimary, color: theme.textPrimary }}
    >
      <CustomCursor />
      <FluidBackground theme={isDarkMode ? 'dark' : 'light'} />
      <AIChat theme={isDarkMode ? 'dark' : 'light'} />
      
      {/* Mini Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 bg-[#003366] w-full" />
        <header className="py-2 px-6 md:px-12 flex items-center transition-colors duration-500 backdrop-blur-md border-b" style={{ backgroundColor: theme.navBg + 'F2', borderColor: theme.border }}>
          <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-[10px] md:text-xs tracking-tighter" style={{ color: theme.textPrimary }}>JSS IPGKT</span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-6 text-[8px] font-bold tracking-[0.2em] uppercase">
                {['Profil', 'Kakitangan', 'Program', 'Berita'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="transition-colors cursor-pointer bg-transparent border-none opacity-70 hover:opacity-100"
                    style={{ color: theme.textPrimary }}
                    onMouseOver={(e) => (e.currentTarget.style.color = theme.accentRed)}
                    onMouseOut={(e) => (e.currentTarget.style.color = theme.textPrimary)}
                    data-hover="true"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button 
                onClick={toggleTheme}
                className="p-1 rounded-full border opacity-50 hover:opacity-100 transition-all"
                style={{ borderColor: theme.border, color: theme.textPrimary }}
                data-hover="true"
              >
                {isDarkMode ? <Sun size={12} /> : <Moon size={12} />}
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={toggleTheme}
                className="p-1 rounded-full border"
                style={{ borderColor: theme.border, color: theme.textPrimary }}
              >
                {isDarkMode ? <Sun size={12} /> : <Moon size={12} />}
              </button>
              <button 
                className="relative w-8 h-8 flex items-center justify-center"
                style={{ color: theme.textPrimary }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                 {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Branding Section - Masthead */}
      <motion.div 
        className="relative pt-16 pb-4 px-6 md:px-12 flex items-center justify-center overflow-hidden" 
        style={{ 
          opacity, 
          borderColor: theme.border, 
          backgroundColor: theme.bgSecondary 
        }}
      >
        <div className="max-w-[1600px] w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={LOGO_URL}
            alt="Logo IPGKT" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_LOGO;
            }}
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              <GradientText 
                text="PORTAL RASMI" 
                as="h1" 
                className="text-2xl md:text-4xl font-black leading-tight tracking-tighter" 
                theme={isDarkMode ? 'dark' : 'light'}
              />
            </motion.div>
            <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <h2 className="text-sm md:text-lg font-bold uppercase tracking-[0.15em] opacity-90 mt-1" style={{ color: theme.textPrimary }}>
                JABATAN SAINS SOSIAL
              </h2>
              <p className="text-[7px] md:text-[9px] font-mono font-bold tracking-[0.3em] uppercase opacity-40" style={{ color: theme.textPrimary }}>
                INSTITUT PENDIDIKAN GURU KAMPUS TAWAU
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Running Info Strip - LARGE FONT ABOVE CAROUSEL */}
      <div className="w-full py-4 overflow-hidden border-y shadow-md" style={{ backgroundColor: theme.bgSecondary, color: isDarkMode ? 'white' : '#003366', borderColor: theme.accentRed }}>
        <motion.div 
          className="flex w-fit will-change-transform"
          animate={{ x: "-50%" }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((key) => (
            <div key={key} className="flex whitespace-nowrap shrink-0">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-base md:text-2xl font-black px-12 flex items-center gap-6 uppercase tracking-widest font-heading">
                  Selamat Datang Ke Portal Rasmi Jabatan Sains Sosial <span className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: theme.accentRed }} /> 
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Carousel */}
      <Carousel theme={isDarkMode ? 'dark' : 'light'} />

      {/* Kakitangan Section */}
      <section id="kakitangan" className="relative z-10 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="mb-12">
             <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight">
              Kakitangan <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${theme.accentRed}, ${theme.accentBlue})` }}>Akademik</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-px border bg-slate-200/20 overflow-hidden rounded-2xl" style={{ borderColor: theme.border }}>
            {JSS_STAFF.map((staff) => (
              <ArtistCard 
                key={staff.id} 
                artist={{
                  id: staff.id,
                  name: staff.name,
                  genre: staff.position,
                  image: staff.image,
                  day: staff.field,
                  description: staff.description
                }} 
                theme={isDarkMode ? 'dark' : 'light'}
                onClick={() => setSelectedStaff(staff)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="relative z-10 py-24 border-t" style={{ borderColor: theme.border, backgroundColor: theme.bgSecondary }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 uppercase">HALA <GradientText text="TUJU" theme={isDarkMode ? 'dark' : 'light'} /></h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border bg-opacity-5" style={{ borderColor: theme.border, backgroundColor: theme.accentRed + '0D' }}>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2" style={{ color: theme.accentRed }}>VISI</h4>
                  <p className="text-base leading-relaxed italic opacity-80">"Melahirkan guru yang kompeten dan berjiwa pendidik melalui program pendidikan guru yang dinamik."</p>
                </div>
                <div className="p-6 rounded-2xl border bg-opacity-5" style={{ borderColor: theme.border, backgroundColor: theme.accentBlue + '0D' }}>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2" style={{ color: theme.accentBlue }}>MISI</h4>
                  <p className="text-base leading-relaxed opacity-80">"Memupuk komitmen guru pelatih dalam penyediaan guru yang berketrampilan dan mahir dalam kurikulum."</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 h-[300px] md:h-[450px] rounded-3xl overflow-hidden border" style={{ borderColor: theme.border }}>
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200" className="w-full h-full object-cover" alt="IPG Campus" />
            </div>
          </div>
        </div>
      </section>

      {/* Program & Berita Combined Section */}
      <section id="program" className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8 uppercase border-l-4 pl-4" style={{ borderColor: theme.accentRed }}>Program 2026</h2>
            <div className="p-8 rounded-2xl border shadow-sm" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.border }}>
              <div className="flex items-center gap-4 mb-6">
                <Map className="w-10 h-10" style={{ color: theme.accentBlue }} />
                <h3 className="text-2xl font-bold">PISMP Sejarah</h3>
              </div>
              <p className="opacity-70 mb-6">Tawaran tunggal bagi sesi pengambilan tahun 2026. Fokus pada penguasaan sejarah negara dan pedagogi moden.</p>
              <a href="https://pismp.moe.gov.my/" target="_blank" className="inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest text-white px-6 py-3 rounded-lg" style={{ backgroundColor: theme.accentRed }}>
                Mohon Sini <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <div id="berita">
            <h2 className="text-3xl font-heading font-bold mb-8 uppercase border-l-4 pl-4" style={{ borderColor: theme.accentBlue }}>Berita Utama</h2>
            <div className="space-y-4">
              {JSS_NEWS.slice(0, 3).map((news, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-100/10 transition-colors group cursor-pointer">
                  <img src={news.img} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <span className="text-[10px] font-mono opacity-50 uppercase">{news.date}</span>
                    <h4 className="text-sm font-bold group-hover:text-red-500 transition-colors">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6" style={{ backgroundColor: isDarkMode ? '#000d1a' : '#F1F5F9', borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="opacity-50 text-[10px] uppercase font-bold tracking-widest">
            &copy; 2026 JABATAN SAINS SOSIAL IPGKT. HAK CIPTA TERPELIHARA.
          </div>
          <div className="flex gap-6">
            <a href="#" className="opacity-50 hover:opacity-100 text-[10px] font-bold uppercase tracking-widest">Facebook</a>
            <a href="#" className="opacity-50 hover:opacity-100 text-[10px] font-bold uppercase tracking-widest">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Staff Modal */}
      <AnimatePresence>
        {selectedStaff && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedStaff(null)} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl border overflow-hidden rounded-2xl flex flex-col md:flex-row" style={{ backgroundColor: theme.bgPrimary, borderColor: theme.border }}>
              <button onClick={() => setSelectedStaff(null)} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 text-white">
                <X size={20} />
              </button>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={selectedStaff.image} className="w-full h-full object-cover" alt={selectedStaff.name} />
              </div>
              <div className="md:w-1/2 p-8 md:p-10">
                <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase">{selectedStaff.field}</span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mt-2">{selectedStaff.name}</h3>
                <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-wider">{selectedStaff.position}</p>
                <p className="text-base leading-relaxed opacity-80">{selectedStaff.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
