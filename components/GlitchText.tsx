
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, as: Component = 'span', className = '' }) => {
  return (
    <Component className={`relative inline-block font-black tracking-tighter isolate ${className}`}>
      <motion.span
        className="absolute inset-0 z-10 block bg-gradient-to-r from-white via-red-500 via-blue-500 via-white to-white bg-[length:200%_auto] bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ['0% center', '200% center'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {text}
      </motion.span>
      
      <span 
        className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 opacity-20"
        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        {text}
      </span>
      
      <span
        className="absolute inset-0 -z-10 block bg-red-500/20 blur-2xl opacity-40"
        style={{ transform: 'translateZ(0)' }}
      >
        {text}
      </span>
    </Component>
  );
};

export default GradientText;
