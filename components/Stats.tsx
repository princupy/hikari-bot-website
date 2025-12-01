'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ServerIcon,
  UserGroupIcon,
  MusicalNoteIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  // Hardcoded stats - no API calls
  const statsData = [
    {
      icon: ServerIcon,
      label: 'Active Servers',
      value: '10K+',
      color: 'from-pink-500 to-rose-500',
      count: 10000,
    },
    {
      icon: UserGroupIcon,
      label: 'Happy Users',
      value: '1M+',
      color: 'from-purple-500 to-pink-500',
      count: 1000000,
    },
    {
      icon: MusicalNoteIcon,
      label: 'Songs Played',
      value: '50M+',
      color: 'from-blue-500 to-purple-500',
      count: 50000000,
    },
    {
      icon: ClockIcon,
      label: 'Uptime',
      value: '99.9%',
      color: 'from-green-500 to-emerald-500',
      count: 99.9,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="gradient-text">Trusted by Thousands</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Join the growing community of music lovers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4 glow-pink group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                
                {/* Mobile Pulse Indicator */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${stat.color} animate-pulse`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges (Mobile Optimized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 px-4"
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs sm:text-sm font-semibold">Online Now</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-blue-500/30 rounded-full">
            <ClockIcon className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs sm:text-sm font-semibold">24/7 Active</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-pink-500/30 rounded-full">
            <MusicalNoteIcon className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-xs sm:text-sm font-semibold">Premium Quality</span>
          </div>
        </motion.div>

        {/* Community CTA (Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 text-center lg:hidden"
        >
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base px-4">
            Join our amazing community today!
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1388435176610336868&permissions=321751086336768&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-sm sm:text-base glow-pink hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Add to Discord
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements (Hidden on Mobile) */}
      <div className="absolute top-10 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none hidden md:block" />
    </section>
  );
}
