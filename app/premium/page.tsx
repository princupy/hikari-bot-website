'use client';
import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  BoltIcon,
  MusicalNoteIcon,
  QueueListIcon,
  AdjustmentsHorizontalIcon,
  ShieldCheckIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import AkariSparkles from '@/components/AkariSparkles';
import Link from 'next/link';

// Animated Counter Component
function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Scroll Progress Component
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
    />
  );
}

// Toast Notification Component
function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 50 }}
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold shadow-2xl max-w-xs"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <span className="text-sm sm:text-base">{message}</span>
      </div>
    </motion.div>
  );
}

const akariFeatures = [
  {
    icon: BoltIcon,
    title: 'Lightning Fast Performance',
    description: 'Instant response time with dedicated servers and optimized code',
  },
  {
    icon: MusicalNoteIcon,
    title: 'Ultra HD Audio Quality',
    description: 'Stream music in pristine 320kbps quality with zero compression',
  },
  {
    icon: QueueListIcon,
    title: 'Unlimited Queue & Playlists',
    description: 'No restrictions on queue size, playlist count, or song duration',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Advanced Audio Filters',
    description: '20+ professional filters: Bass boost, 8D, Nightcore, Vaporwave & more',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Priority Support & Stability',
    description: '24/7 dedicated support with 99.99% uptime guarantee',
  },
  {
    icon: StarIcon,
    title: 'Exclusive Features',
    description: 'Early access to new features, custom bot status, and premium perks',
  },
];

const comparison = [
  { feature: 'Audio Quality', hikari: 'Standard (128kbps)', akari: 'Ultra HD (320kbps)' },
  { feature: 'Queue Size', hikari: 'Up to 50 songs', akari: 'Unlimited' },
  { feature: 'Playlists', hikari: 'Limited (5 playlists)', akari: 'Unlimited' },
  { feature: 'Audio Filters', hikari: '5 basic filters', akari: '20+ advanced filters' },
  { feature: 'Commands', hikari: '40+ commands', akari: '75+ commands' },
  { feature: 'Response Time', hikari: 'Standard', akari: 'Instant (Priority)' },
  { feature: 'Support', hikari: 'Community', akari: '24/7 Dedicated' },
  { feature: 'Uptime', hikari: '99.5%', akari: '99.99%' },
  { feature: 'Lyrics Display', hikari: '✗', akari: '✓' },
  { feature: 'Recommendations', hikari: '✗', akari: '✓' },
  { feature: 'Custom Status', hikari: '✗', akari: '✓' },
  { feature: 'Spotify Integration', hikari: '✗', akari: '✓' },
];

const akariStats = [
  { label: 'Premium Users', value: '50K+' },
  { label: 'Premium Servers', value: '5K+' },
  { label: 'Songs Played', value: '100M+' },
  { label: 'Uptime', value: '99.99%' },
];

export default function PremiumPage() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.body.classList.add('akari-page');
    return () => {
      document.body.classList.remove('akari-page');
    };
  }, []);

  const handleAddBot = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    window.open('https://discord.com/oauth2/authorize?client_id=1426105190196707399&permissions=321751086336768&integration_type=0&scope=bot', '_blank');
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 relative overflow-hidden akari-theme">
      <ScrollProgress />
      <AkariSparkles />
      <Toast message="Opening Discord..." show={showToast} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-600/30 rounded-full blur-3xl"
        />
      </div>

      {/* Parallax Background Elements - Hidden on Mobile */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" style={{ perspective: '1000px' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl" />
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-2 border-purple-500/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
            <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-bold text-sm sm:text-base md:text-lg">Premium Bot</span>
          </div>
        </motion.div>

        {/* Hero Section with Animated Showcase */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-14 md:mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text-akari">Akari</span>
              <br />
              <span className="text-white">Premium Music Bot</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 px-4 md:px-0">
              The ultimate music experience for Discord. Advanced features, 
              ultra HD audio, and exclusive perks for serious music lovers.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center md:justify-start px-4 md:px-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddBot}
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-base sm:text-lg md:text-xl glow-purple hover:shadow-2xl transition-all duration-300"
              >
                Add Akari to Discord
              </motion.button>
              
              <Link
                href="/premium/commands"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/5 backdrop-blur-sm border-2 border-purple-500/30 rounded-full text-white font-bold text-base sm:text-lg md:text-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                View Commands
              </Link>
            </div>

            {/* Stats with Animated Counter */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-4 md:px-0">
              {akariStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer group relative"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-akari mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-purple-600/10 opacity-0 group-hover:opacity-100 pointer-events-none"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Animated Bot Showcase - Hidden on Small Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 md:order-2 hidden sm:block"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-dashed"
              >
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(${window.innerWidth < 640 ? '120px' : '200px'}) translateY(-50%)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 sm:inset-12 rounded-full border-2 border-blue-500/30 border-dashed"
              >
                {[45, 135, 225, 315].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(${window.innerWidth < 640 ? '80px' : '140px'}) translateY(-50%)`,
                    }}
                  >
                    <SparklesIcon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-16 sm:inset-20 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 glow-purple flex items-center justify-center overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/50 via-blue-600/50 to-purple-600/50"
                />
                
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <svg className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h2v2H7v-2zm8 0h2v2h-2v-2zm-4 4h2v2h-2v-2z"/>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Music Notes - Reduced on Mobile */}
              {[...Array(window.innerWidth < 640 ? 4 : 8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: [-30, -80, -30],
                    opacity: [0, 1, 0],
                    x: [0, Math.random() * 40 - 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute"
                  style={{
                    top: `${50 + Math.random() * 20}%`,
                    left: `${30 + Math.random() * 40}%`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              ))}

              {/* Audio Bars */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: ['15px', `${30 + Math.random() * 30}px`, '15px'],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                    className="w-1.5 sm:w-2 bg-gradient-to-t from-purple-600 to-blue-400 rounded-full"
                  />
                ))}
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-12 sm:inset-16 rounded-full bg-purple-600/20 blur-3xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid with 3D Hover */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold gradient-text-akari text-center mb-8 sm:mb-10 md:mb-12 px-4"
          >
            Premium Features
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {akariFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className="p-6 sm:p-7 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 50%)',
                    }}
                  />

                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 glow-purple relative z-10"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base relative z-10">{feature.description}</p>

                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commands Preview */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold gradient-text-akari text-center mb-6 sm:mb-8 px-4"
          >
            75+ Premium Commands
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 sm:p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20"
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl bg-purple-600/10 border border-purple-500/30"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-akari mb-1 sm:mb-2">7</div>
                <div className="text-gray-400 text-xs sm:text-sm">Categories</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl bg-purple-600/10 border border-purple-500/30"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-akari mb-1 sm:mb-2">75+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Commands</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl bg-purple-600/10 border border-purple-500/30"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-akari mb-1 sm:mb-2">20+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Audio Filters</div>
              </motion.div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-4">
              Access advanced commands including Spotify integration, 
              23+ audio filters, advanced playlist management, and exclusive premium features.
            </p>
            <Link
              href="/premium/commands"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-sm sm:text-base glow-purple hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View All Commands →
            </Link>
          </motion.div>
        </div>

        {/* Interactive Comparison Table */}
        <div id="comparison" className="mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold gradient-text-akari text-center mb-8 sm:mb-10 md:mb-12 px-4"
          >
            Hikari vs Akari
          </motion.h2>

          {/* Mobile: Card View */}
          <div className="block md:hidden space-y-4 px-2">
            {comparison.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20"
              >
                <h4 className="text-white font-bold mb-3 text-sm">{row.feature}</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30">
                    <div className="text-pink-400 text-xs font-semibold mb-1">Hikari</div>
                    <div className="text-gray-400 text-xs">{row.hikari}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                    <div className="text-purple-400 text-xs font-semibold mb-1">Akari</div>
                    <div className="text-purple-300 font-semibold text-xs">{row.akari}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Table View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:block overflow-x-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/20">
                  <th className="px-4 lg:px-6 py-4 lg:py-5 text-left text-white font-bold text-base lg:text-lg">Feature</th>
                  <th className="px-4 lg:px-6 py-4 lg:py-5 text-center text-pink-400 font-bold text-base lg:text-lg">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
                      <span className="hidden lg:inline">Hikari (Free)</span>
                      <span className="lg:hidden">Hikari</span>
                    </div>
                  </th>
                  <th className="px-4 lg:px-6 py-4 lg:py-5 text-center text-purple-400 font-bold text-base lg:text-lg">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                      <span className="hidden lg:inline">Akari (Premium)</span>
                      <span className="lg:hidden">Akari</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-white font-medium group-hover:text-purple-300 transition-colors text-sm lg:text-base">
                      {row.feature}
                    </td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                      <motion.span 
                        className="text-gray-400 text-sm lg:text-base"
                        whileHover={{ scale: 1.1 }}
                      >
                        {row.hikari}
                      </motion.span>
                    </td>
                    <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                      <motion.span 
                        className="text-purple-300 font-semibold text-sm lg:text-base"
                        whileHover={{ 
                          scale: 1.2,
                          color: '#A855F7',
                        }}
                      >
                        {row.akari}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Quick Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 px-2 sm:px-0">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-pink-600/10 to-pink-600/5 border border-pink-500/30 text-center"
            >
              <div className="text-2xl sm:text-3xl mb-2">🎵</div>
              <h4 className="text-pink-400 font-bold mb-2 text-sm sm:text-base">Hikari Free</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Perfect for casual music lovers</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/50 text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="text-2xl sm:text-3xl mb-2 relative z-10">⭐</div>
              <h4 className="gradient-text-akari font-bold mb-2 relative z-10 text-sm sm:text-base">Akari Premium</h4>
              <p className="text-gray-300 text-xs sm:text-sm relative z-10">Ultimate experience for power users</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-500/30 text-center"
            >
              <div className="text-2xl sm:text-3xl mb-2">🚀</div>
              <h4 className="text-green-400 font-bold mb-2 text-sm sm:text-base">3x More Features</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Get premium for maximum power</p>
            </motion.div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/30 backdrop-blur-sm"
        >
          <SparklesIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-400 mx-auto mb-4 sm:mb-6 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text-akari mb-3 sm:mb-4 px-4">
            Ready for the Ultimate Experience?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Join thousands of premium users enjoying the best music bot on Discord
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddBot}
              className="w-full sm:w-auto inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-base sm:text-lg md:text-xl glow-purple hover:shadow-2xl transition-all duration-300"
            >
              Add Akari Now
            </motion.button>
            <Link
              href="/support"
              className="w-full sm:w-auto inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/5 border-2 border-purple-500/30 rounded-full text-white font-bold text-base sm:text-lg md:text-xl hover:bg-white/10 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-40"
      >
        <motion.button
          onClick={handleAddBot}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold shadow-2xl glow-purple relative text-sm sm:text-base"
        >
          <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">Add Akari Now</span>
          <span className="sm:hidden">Add Now</span>
          
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
