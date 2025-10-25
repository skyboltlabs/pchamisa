import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        bg-white/10 backdrop-blur-md border border-white/20 
        rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;