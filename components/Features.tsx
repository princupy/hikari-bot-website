'use client';
import { motion } from 'framer-motion';
import {
  MusicalNoteIcon,
  QueueListIcon,
  SignalIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: MusicalNoteIcon,
    title: 'High-Quality Audio',
    description: 'Crystal-clear music streaming up to 320kbps with Lavalink integration',
  },
  {
    icon: QueueListIcon,
    title: 'Smart Playlists',
    description: 'Create, save, and manage unlimited playlists with shuffle & loop',
  },
  {
    icon: SignalIcon,
    title: '24/7 Uptime',
    description: 'Always online with 99.9% uptime guarantee and instant response',
  },
  {
    icon: CpuChipIcon,
    title: 'Multi-Platform',
    description: 'Play from YouTube, Spotify, SoundCloud, and more platforms',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Advanced Controls',
    description: 'Volume control, bass boost, nightcore, and custom filters',
  },
  {
    icon: BoltIcon,
    title: 'Lightning Fast',
    description: 'Instant command response with optimized performance',
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Everything you need for the ultimate music experience in your Discord server
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="p-6 sm:p-7 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 glow-pink group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />
                
                {/* Mobile Tap Indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
                  <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Count Badge (Mobile Only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 text-center sm:hidden"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-full">
            <BoltIcon className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 text-sm font-semibold">
              {features.length} Premium Features
            </span>
          </div>
        </motion.div>

        {/* Bottom CTA (Mobile Optimized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Want even more features? Check out Akari Premium!
          </p>
          <a
            href="/premium"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-sm sm:text-base glow-purple hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Explore Premium Features →
          </a>
        </motion.div>
      </div>

      {/* Decorative Gradient Orbs (Hidden on Mobile) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none hidden md:block" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none hidden md:block" />
    </section>
  );
}
