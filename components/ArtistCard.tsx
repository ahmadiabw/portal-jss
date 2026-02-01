
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { Artist } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <motion.div
      className="group relative h-[450px] md:h-[550px] w-full overflow-hidden border-b md:border-r border-white/10 bg-[#000d1a] cursor-pointer"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      data-hover="true"
      onClick={onClick}
    >
      {/* Image Background - Now Static and in Full Color */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={artist.image} 
          alt={artist.name} 
          className="h-full w-full object-cover will-change-transform"
          variants={{
            rest: { scale: 1, opacity: 0.7, filter: 'grayscale(0%)' },
            hover: { scale: 1, opacity: 0.85, filter: 'grayscale(0%)' }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop';
          }}
        />
        {/* Themed Overlay Tint - Static */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a33] via-[#001a33]/10 to-transparent group-hover:via-red-900/5 transition-colors duration-700" />
      </div>

      {/* Overlay Info */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
           <motion.span 
             variants={{
               rest: { opacity: 0.7, scale: 1 },
               hover: { opacity: 1, scale: 1.05, borderColor: '#EE2A24' }
             }}
             className="text-[10px] md:text-xs font-mono font-bold border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-xl bg-black/20 tracking-[0.2em] uppercase"
           >
             {artist.day}
           </motion.span>
           <motion.div
             variants={{
               rest: { opacity: 0, scale: 0.8, rotate: -45 },
               hover: { opacity: 1, scale: 1, rotate: 0 }
             }}
             className="bg-red-600 text-white rounded-full p-3 shadow-[0_0_20px_rgba(238,42,36,0.5)] will-change-transform"
           >
             <ArrowUpRight className="w-6 h-6" />
           </motion.div>
        </div>

        <div>
          <div className="overflow-hidden mb-2">
            <motion.h3 
              className="font-heading text-3xl md:text-4xl font-black uppercase text-white leading-tight will-change-transform"
              variants={{
                rest: { y: 10, opacity: 0.8 },
                hover: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {artist.name}
            </motion.h3>
          </div>
          <motion.div 
            className="flex items-center gap-3 mt-1 will-change-transform"
            variants={{
              rest: { opacity: 0.6, x: -5 },
              hover: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-10 h-px bg-red-600" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              {artist.genre}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-red-600"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ArtistCard;
