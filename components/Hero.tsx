'use client';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-6"
            >
              <SparklesIcon className="w-5 h-5 text-pink-400" />
              <span className="text-pink-300 text-sm font-medium">Now Playing High-Quality Music</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Hikari</span>
              <br />
              <span className="text-white">Music Bot</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
              Experience crystal-clear music streaming with advanced features, 
              playlist management, and seamless Discord integration. 
              Available 24/7 with zero lag.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.com/oauth2/authorize?client_id=1388435176610336868&permissions=321751086336768&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-lg glow-pink hover:shadow-2xl transition-all duration-300"
              >
                Add to Discord
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/commands"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Commands
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold gradient-text">10K+</h3>
                <p className="text-gray-400 text-sm">Servers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold gradient-text">1M+</h3>
                <p className="text-gray-400 text-sm">Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold gradient-text">99.9%</h3>
                <p className="text-gray-400 text-sm">Uptime</p>
              </div>
            </div>

            {/* Upgrade to Premium CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                    <svg className="w-6 h-6 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Want More Power?
                  </h3>
                  <p className="text-gray-400">
                    Upgrade to <span className="gradient-text-akari font-bold">Akari Premium</span> for 75+ commands, advanced filters & exclusive features
                  </p>
                </div>
                <a
                  href="/premium"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold whitespace-nowrap glow-purple hover:shadow-2xl transition-all duration-300 flex items-center"
                >
                  View Akari Premium
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Bot Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-pink-500/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-2 border-pink-400/20 border-dashed"
              />
              
              {/* Bot Avatar/Logo */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 glow-pink flex items-center justify-center">
                <MusicalNoteIcon className="w-32 h-32 text-white" />
              </div>

              {/* Floating Music Notes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [-20, 20, -20] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  <MusicalNoteIcon className="w-6 h-6 text-pink-400 opacity-50" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
