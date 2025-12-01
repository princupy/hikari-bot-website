'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, ArrowLeftIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex justify-center items-center space-x-2 sm:space-x-4">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold gradient-text"
            >
              4
            </motion.span>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center glow-pink"
            >
              <MusicalNoteIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
            </motion.div>
            
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold gradient-text"
            >
              4
            </motion.span>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            The page you're looking for seems to have hit the wrong note. 
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto group flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-base sm:text-lg glow-pink hover:shadow-2xl transition-all duration-300"
          >
            <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto group flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-full text-white font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 sm:mt-16"
        >
          <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">Or explore these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
            {[
              { name: 'Features', href: '/features' },
              { name: 'Commands', href: '/commands' },
              { name: 'Premium', href: '/premium' },
              { name: 'Support', href: '/support' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 sm:px-6 py-2 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 text-sm sm:text-base hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Floating Music Notes - Reduced on Mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            className="absolute hidden sm:block"
            style={{
              left: `${10 + i * 15}%`,
              bottom: '10%',
            }}
          >
            <MusicalNoteIcon className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
