'use client';
import { motion } from 'framer-motion';
import {
  MusicalNoteIcon,
  QueueListIcon,
  AdjustmentsHorizontalIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

const mainFeatures = [
  {
    icon: MusicalNoteIcon,
    title: 'High-Quality Streaming',
    description: 'Experience music in stunning 320kbps quality with Lavalink integration for crystal-clear audio.',
    features: [
      'Up to 320kbps audio quality',
      'Zero latency playback',
      'Automatic quality adjustment',
      'Advanced audio processing',
    ],
  },
  {
    icon: QueueListIcon,
    title: 'Smart Queue Management',
    description: 'Powerful queue system with unlimited capacity, shuffle, loop, and skip features.',
    features: [
      'Unlimited queue size',
      'Shuffle & repeat modes',
      'Skip, remove, and reorder',
      'Save queues as playlists',
    ],
  },
  {
    icon: CloudIcon,
    title: 'Multi-Platform Support',
    description: 'Play music from your favorite platforms seamlessly integrated into one bot.',
    features: [
      'YouTube & YouTube Music',
      'Spotify integration',
      'SoundCloud support',
      'Direct MP3 links',
    ],
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Audio Filters & Effects',
    description: 'Customize your listening experience with professional audio filters and effects.',
    features: [
      'Bass boost & equalizer',
      'Nightcore & vaporwave',
      '8D audio effect',
      'Speed & pitch control',
    ],
  },
  {
    icon: PlayCircleIcon,
    title: 'Advanced Playback',
    description: 'Full control over your music with seek, volume, and playback options.',
    features: [
      'Seek to any position',
      'Volume control (0-200%)',
      'Auto-pause on empty',
      'Resume from last position',
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Moderation & Security',
    description: 'Keep your server safe with role-based permissions and DJ mode.',
    features: [
      'DJ role restrictions',
      'Vote skip system',
      'Blacklist tracks/users',
      'Per-server settings',
    ],
  },
  {
    icon: BoltIcon,
    title: 'Lightning Performance',
    description: '99.9% uptime with instant response and dedicated infrastructure.',
    features: [
      'Sub-second response time',
      '24/7 availability',
      'Auto-reconnect on disconnect',
      'Optimized resource usage',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'User Experience',
    description: 'Beautiful embeds, interactive buttons, and intuitive commands.',
    features: [
      'Rich embed messages',
      'Interactive button controls',
      'Real-time now playing',
      'Progress bar visualization',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Everything You Need</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Hikari comes packed with powerful features designed to deliver 
            the best music experience on Discord
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center glow-pink flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Ready to Upgrade Your Music Experience?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Add Hikari to your server now and start enjoying high-quality music with your community
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1388435176610336868&permissions=321751086336768&integration_type=0&scope=bot"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-lg glow-pink hover:shadow-2xl transition-all duration-300"
          >
            Add to Discord - It's Free!
          </a>
        </motion.div>
      </div>
    </div>
  );
}
