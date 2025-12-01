'use client';
import { motion } from 'framer-motion';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center glow-pink"
        >
          <MusicalNoteIcon className="w-12 h-12 text-white" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">
            Loading...
          </h2>
          <p className="text-gray-400">Please wait while we prepare everything</p>
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
            />
          </div>
        </div>

        {/* Floating Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-pink-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
