
'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Animated glowing ring */}
        <motion.div
          className="w-32 h-32 border-t-4 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
          }}
        />

        {/* Smooth fading text */}
        <motion.p
          className="text-white text-xl font-semibold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          Styling your shopping experience...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
