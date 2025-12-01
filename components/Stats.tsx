'use client';
import { motion } from 'framer-motion';
import {
  ServerIcon,
  UserGroupIcon,
  MusicalNoteIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function Stats() {
  // Hardcoded stats - no API calls
  const statsData = [
    {
      icon: ServerIcon,
      label: 'Active Servers',
      value: '10K+',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: UserGroupIcon,
      label: 'Happy Users',
      value: '1M+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MusicalNoteIcon,
      label: 'Songs Played',
      value: '50M+',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: ClockIcon,
      label: 'Uptime',
      value: '99.9%',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Trusted by Thousands</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join the growing community of music lovers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 glow-pink`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                
                <div className="text-gray-400 font-medium">{stat.label}</div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
