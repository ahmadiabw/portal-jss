
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Map, ShieldCheck, Menu, X, Calendar, ChevronLeft, ChevronRight, Briefcase, Info, Award, Palette, Music, Target, Compass } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ArtistCard from './components/ArtistCard';
import AIChat from './components/AIChat';
import { StaffMember } from './types';

/**
 * Maklumat dikemaskini berdasarkan Portal Rasmi JSS IPGKT:
 * https://sites.google.com/ipgm.edu.my/ipgkt-jss/profil-jabatan
 */

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
    description: 'Pensyarah Kanan yang memiliki kelayakan Ijazah Sarjana (Pengurusan Disiplin), Ijazah Sarjana Muda serta Diploma Pendidikan dalam bidang Sejarah dan Pengajian Melayu. Kepakaran beliau merangkumi pengurusan disiplin dan pendidikan sejarah kebangsaan.'
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
    description: 'Ketua Unit Pendidikan Muzik dan Seni Visual yang berkelulusan PhD dan Sarjana dalam Pengurusan Pendidikan, Ijazah Sarjana Muda Pendidikan (Sejarah & Geografi), serta Diploma Perguruan Malaysia (Pendidikan Muzik & Pendidikan Seni). Kepakaran beliau memacu integrasi seni dalam pengurusan pendidikan.'
  },
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-[#EE2A24] selection:text-white cursor-auto md:cursor-none overflow-x-hidden bg-[#001a33]">
      <CustomCursor />
      <FluidBackground />
      <AIChat />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference">
        <div className="font-heading text-xl md:text-2xl font-bold tracking-tighter text-white z-50 uppercase">JSS IPGKT</div>
        
        <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
          {['Profil', 'Kakitangan', 'Program'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-[#EE2A24] transition-colors text-white cursor-pointer bg-transparent border-none"
              data-hover="true"
            >
              {item}
            </button>
          ))}
        </div>
        <button 
          onClick={() => scrollToSection('program')}
          className="hidden md:inline-block border border-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#EE2A24] hover:border-[#EE2A24] transition-all duration-300 text-white cursor-pointer bg-transparent"
          data-hover="true"
        >
          Hubungi Kami
        </button>

        <button 
          className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#001a33]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Profil', 'Kakitangan', 'Program'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-heading font-bold text-white hover:text-[#EE2A24] transition-colors uppercase bg-transparent border-none"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('program')}
              className="mt-8 border border-[#EE2A24] px-10 py-4 text-sm font-bold tracking-widest uppercase bg-[#EE2A24] text-white"
            >
              Hubungi JSS
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div 
          style={{ y, opacity }}
          className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 md:gap-6 text-xs md:text-base font-mono text-[#EE2A24] font-bold tracking-[0.3em] uppercase mb-4 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm"
          >
            <span>PORTAL RASMI</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"/>
            <span>Jabatan Sains Sosial</span>
          </motion.div>

          <div className="relative w-full flex justify-center items-center">
            <GradientText 
              text="JABATAN SAINS SOSIAL" 
              as="h1" 
              className="text-[10vw] md:text-[8vw] leading-[0.9] font-black tracking-tighter text-center" 
            />
          </div>
          
          <motion.div
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mt-8 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-2xl font-light max-w-2xl mx-auto text-white/90 leading-relaxed drop-shadow-lg px-4"
          >
            Peneraju Kecemerlangan Pendidikan Guru dalam Bidang Sains Sosial di Pantai Timur Sabah
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full py-4 bg-white text-[#003366] z-20 overflow-hidden border-y-2 border-red-600 shadow-[0_-10px_40px_rgba(238,42,36,0.3)]">
          <motion.div 
            className="flex w-fit will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((key) => (
              <div key={key} className="flex whitespace-nowrap shrink-0">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-xl md:text-4xl font-heading font-black px-8 flex items-center gap-4">
                    SEJARAH <span className="text-red-600">●</span> 
                    PENDIDIKAN MUZIK <span className="text-red-600">●</span> 
                    PENDIDIKAN SENI VISUAL <span className="text-red-600">●</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* STAFF SECTION */}
      <section id="kakitangan" className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase leading-[0.9]">
              Kakitangan <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Akademik</span>
            </h2>
          </div>

          {/* ID 1 (Ketua Jabatan) at the top, centered */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-sm md:max-w-md border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(238,42,36,0.2)] rounded-2xl overflow-hidden">
              {JSS_STAFF.filter(s => s.id === '1').map(staff => (
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
                  onClick={() => setSelectedStaff(staff)} 
                />
              ))}
            </div>
          </div>

          {/* Remaining staff in a grid below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 bg-white/5 backdrop-blur-sm">
            {JSS_STAFF.filter(s => s.id !== '1').map((staff) => (
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
                onClick={() => setSelectedStaff(staff)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROFIL SECTION */}
      <section id="profil" className="relative z-10 py-24 md:py-32 bg-[#001f3f]/50 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-7xl font-heading font-bold mb-12 leading-tight">
                Hala <br/> <GradientText text="TUJU" className="text-5xl md:text-8xl" />
              </h2>
              
              <div className="space-y-12">
                {/* VISI */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-3xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-red-600/20 text-red-500">
                      <Target className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold font-heading uppercase tracking-widest text-red-500">VISI</h4>
                  </div>
                  <p className="text-lg text-gray-200 font-light leading-relaxed italic">
                    "Melahirkan guru yang kompeten dan berjiwa pendidik melalui program pendidikan guru yang dinamik ke arah pendidikan holistik dan bertaraf dunia."
                  </p>
                </motion.div>

                {/* MISI */}
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="relative p-6 rounded-3xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold font-heading uppercase tracking-widest text-blue-400">MISI</h4>
                  </div>
                  <p className="text-lg text-gray-200 font-light leading-relaxed">
                    "Jabatan Sains Sosial bertanggungjawab memupuk dan meningkatkan komitmen guru pelatih dalam penyediaan guru yang berketrampilan dan mahir dalam pelaksanaan kurikulum dan kokurikulum."
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[600px] w-full">
              <div className="absolute inset-0 bg-red-600 rounded-3xl rotate-3 opacity-20 blur-xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" 
                  alt="IPG Kampus Tawau" 
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a33] via-transparent to-transparent opacity-60" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                   {[
                     { label: 'Kualiti', val: 'UNESCO' },
                     { label: 'Pencapaian', val: 'Gold' },
                     { label: 'Standard', val: 'MS ISO' },
                   ].map((st, i) => (
                     <div key={i} className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                        <span className="block text-[10px] text-gray-400 uppercase font-mono tracking-tighter">{st.label}</span>
                        <span className="block text-lg font-bold text-white">{st.val}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section id="program" className="relative z-10 py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-5xl md:text-9xl font-heading font-bold opacity-10 text-white">
               2026 INTAKE
             </h2>
             <p className="text-red-500 font-mono uppercase tracking-widest -mt-8 relative z-10 text-base font-bold">
               Satu-satunya Program Akademik Ditawarkan Tahun 2026
             </p>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-16 border border-white/20 backdrop-blur-md flex flex-col items-center text-center max-w-2xl bg-gradient-to-br from-white/10 to-transparent rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(238,42,36,0.1)]"
            >
              <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 font-bold font-mono text-sm tracking-tighter uppercase rounded-bl-2xl">
                Exclusive Intake 2026
              </div>

              <div className="mb-10 bg-white/10 p-6 rounded-full border border-white/20">
                <Map className="w-16 h-16 text-blue-400" />
              </div>
              
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">PISMP Sejarah</h3>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Program Ijazah Sarjana Muda Perguruan (PISMP) dengan pengkhususan Sejarah merupakan tawaran tunggal bagi sesi pengambilan tahun 2026 di Jabatan Sains Sosial IPGKT.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10 w-full">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="block text-xs font-mono text-red-500 uppercase mb-1">Tempoh Pengajian</span>
                  <span className="text-2xl font-bold">4 Tahun</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="block text-xs font-mono text-red-500 uppercase mb-1">Status</span>
                  <span className="text-2xl font-bold">Tawaran 2026</span>
                </div>
              </div>

              <button className="w-full py-5 text-sm font-bold uppercase tracking-widest border border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-500 transition-all duration-300 rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(238,42,36,0.3)]">
                <Award className="w-5 h-5" />
                Daftar Sekarang
              </button>
              
              <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest font-mono">
                *Tertakluk kepada syarat kemasukan KPM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-16 bg-[#000d1a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
             <div className="font-heading text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white uppercase">PORTAL RASMI</div>
             <p className="text-gray-400 max-w-sm text-sm">
               KM 36, Jalan Balung, 91000 Tawau, Sabah. <br/>
               Jabatan Sains Sosial, IPG Kampus Tawau.
             </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-red-500 font-bold uppercase text-xs tracking-widest transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-red-500 font-bold uppercase text-xs tracking-widest transition-colors">Portal IPGKT</a>
          </div>
        </div>
      </footer>

      {/* Staff Modal */}
      <AnimatePresence>
        {selectedStaff && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStaff(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-gradient-to-br from-[#001a33] to-[#000d1a] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-3xl"
            >
              <button
                onClick={() => setSelectedStaff(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors backdrop-blur-md border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-80 md:h-auto relative bg-[#000d1a]">
                <img 
                  src={selectedStaff.image} 
                  alt={selectedStaff.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#001a33] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a33] to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <div className="flex items-center gap-3 text-red-500 mb-6">
                     <div className="w-8 h-px bg-red-500" />
                     <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold">{selectedStaff.field}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-2 leading-tight">
                  {selectedStaff.name}
                </h3>
                
                <p className="text-lg text-blue-400 font-medium tracking-widest uppercase mb-8">
                  {selectedStaff.position}
                </p>
                
                <div className="h-1 w-20 bg-red-600 mb-8 rounded-full" />
                
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  {selectedStaff.description}
                </p>
                
                <div className="mt-12 flex gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white/50" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
