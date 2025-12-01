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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate music experience in your Discord server
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6 glow-pink">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
