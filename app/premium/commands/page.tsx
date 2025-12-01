'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CommandLineIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AkariSparkles from '@/components/AkariSparkles';
import Link from 'next/link';

const akariCommands = [
  {
    category: 'Spotify Integration',
    icon: '🎵',
    description: 'Connect and play directly from your Spotify account',
    commands: [
      { name: '/spotify connect', description: 'Link your Spotify account to Akari' },
      { name: '/spotify play', description: 'Play songs directly from your Spotify playlists' },
      { name: '/spotify queue', description: 'Add Spotify tracks to the current queue' },
    ],
  },
  {
    category: 'Advanced Audio Filters',
    icon: '🎚️',
    description: '23+ professional audio effects and filters',
    subcategories: [
      {
        name: 'Bass & Treble Enhancement',
        commands: [
          { name: '/bassboost', description: 'Enhance low-frequency bass sounds' },
          { name: '/trebleboost', description: 'Enhance high-frequency treble sounds' },
          { name: '/equalizer', description: 'Customize audio with 10-band equalizer' },
          { name: '/subboost', description: 'Boost sub-bass frequencies' },
        ],
      },
      {
        name: 'Time & Pitch Effects',
        commands: [
          { name: '/nightcore', description: 'Speed up track with pitch shift (chipmunk effect)' },
          { name: '/vaporwave', description: 'Slow down with pitch drop (aesthetic effect)' },
          { name: '/speed', description: 'Adjust playback speed without pitch change' },
          { name: '/pitch', description: 'Change pitch without affecting speed' },
        ],
      },
      {
        name: 'Spatial & 3D Audio',
        commands: [
          { name: '/8d', description: 'Create immersive 8D surround sound effect' },
          { name: '/3d', description: 'Add three-dimensional audio positioning' },
          { name: '/rotation', description: 'Rotate audio around listener' },
        ],
      },
      {
        name: 'Modulation Effects',
        commands: [
          { name: '/tremolo', description: 'Add volume oscillation effect' },
          { name: '/vibrato', description: 'Add pitch oscillation effect' },
          { name: '/flanger', description: 'Create sweeping comb filter effect' },
          { name: '/phaser', description: 'Add phase shifting effect' },
          { name: '/chorus', description: 'Thicken sound with multiple voices' },
        ],
      },
      {
        name: 'Distortion & Dynamics',
        commands: [
          { name: '/distortion', description: 'Add harmonic distortion for grit' },
          { name: '/compressor', description: 'Reduce dynamic range for consistency' },
          { name: '/limiter', description: 'Prevent audio clipping and peaks' },
          { name: '/gate', description: 'Remove quiet parts below threshold' },
        ],
      },
      {
        name: 'Special Effects',
        commands: [
          { name: '/karaoke', description: 'Remove or reduce vocal frequencies' },
          { name: '/reverse', description: 'Play audio backwards' },
          { name: '/echo', description: 'Add echo/delay effect' },
          { name: '/reverb', description: 'Add room/hall reverberation' },
        ],
      },
    ],
  },
  {
    category: 'Premium Music Controls',
    icon: '🎶',
    description: '25+ advanced music playback commands',
    subcategories: [
      {
        name: 'Enhanced Playback',
        commands: [
          { name: '/play', description: 'Play songs from YouTube, Spotify, SoundCloud, and more' },
          { name: '/playnext', description: 'Add song to play immediately after current track' },
          { name: '/playtop', description: 'Add song to the top of queue' },
          { name: '/playskip', description: 'Skip current song and play specified track' },
          { name: '/seek', description: 'Jump to any timestamp in the current track' },
          { name: '/fastforward', description: 'Skip forward by specified seconds' },
          { name: '/rewind', description: 'Go backwards by specified seconds' },
          { name: '/replay', description: 'Restart the current song from beginning' },
        ],
      },
      {
        name: 'Advanced Queue Management',
        commands: [
          { name: '/queue move', description: 'Move a song to different position in queue' },
          { name: '/queue swap', description: 'Swap positions of two songs in queue' },
          { name: '/queue shuffle', description: 'Randomize entire queue order' },
          { name: '/queue save', description: 'Save current queue as a playlist' },
          { name: '/queue export', description: 'Export queue to shareable file' },
          { name: '/queue import', description: 'Import queue from file' },
          { name: '/queue clear', description: 'Remove all songs from queue' },
        ],
      },
      {
        name: 'Automation Features',
        commands: [
          { name: '/autoplay', description: 'Auto-add similar songs when queue ends' },
          { name: '/crossfade', description: 'Smooth fade transitions between tracks' },
          { name: '/gapless', description: 'Remove silence gaps between songs' },
          { name: '/autoskip', description: 'Auto-skip songs shorter than specified duration' },
        ],
      },
    ],
  },
  {
    category: 'Advanced Playlists',
    icon: '📋',
    description: 'Unlimited playlist creation and management',
    commands: [
      { name: '/playlist create', description: 'Create unlimited custom playlists' },
      { name: '/playlist add', description: 'Add current or specified song to playlist' },
      { name: '/playlist addqueue', description: 'Add entire queue to playlist' },
      { name: '/playlist remove', description: 'Remove songs from playlist' },
      { name: '/playlist play', description: 'Play entire playlist in order' },
      { name: '/playlist shuffle', description: 'Play playlist in random order' },
      { name: '/playlist share', description: 'Generate shareable playlist link' },
      { name: '/playlist collaborate', description: 'Allow others to edit your playlist' },
      { name: '/playlist merge', description: 'Combine multiple playlists into one' },
      { name: '/playlist export', description: 'Export playlist to various formats' },
      { name: '/playlist import', description: 'Import playlists from Spotify/YouTube' },
    ],
  },
  {
    category: 'Exclusive Premium Features',
    icon: '⭐',
    description: 'Features available only in Akari Premium',
    commands: [
      { name: '/lyrics', description: 'Display real-time synchronized lyrics' },
      { name: '/lyrics search', description: 'Search for song lyrics by name' },
      { name: '/recommend', description: 'Get AI-powered song recommendations' },
      { name: '/history', description: 'View your complete listening history' },
      { name: '/history export', description: 'Export listening history to file' },
      { name: '/favorites', description: 'Manage your favorite tracks library' },
      { name: '/stats personal', description: 'View detailed personal listening statistics' },
      { name: '/search advanced', description: 'Advanced multi-platform search with filters' },
      { name: '/download', description: 'Download songs for offline playback (where legal)' },
      { name: '/no-prefix', description: 'You can use commands without any prefix' },
      { name: '/prefix', description: 'Multiple prefix support available with premium' },
      { name: '/userprefix', description: 'Manage your personal command prefixes (Premium Only)' },
    ],
  },
  {
    category: 'Bot Information & Utility',
    icon: 'ℹ️',
    description: 'Essential bot commands and information',
    commands: [
      { name: '/help', description: 'Display all available commands with categories' },
      { name: '/help command', description: 'Get detailed help for specific command' },
      { name: '/stats', description: 'View comprehensive bot statistics' },
      { name: '/stats server', description: 'View server-specific usage stats' },
      { name: '/ping', description: 'Check bot latency and response time' },
      { name: '/uptime', description: 'Check how long bot has been running' },
      { name: '/invite', description: 'Get bot invite link with permissions' },
      { name: '/support', description: 'Get link to official support server' },
      { name: '/premium', description: 'View premium features and benefits' },
      { name: '/status', description: 'Check current bot status and health' },
      { name: '/changelog', description: 'View recent updates and new features' },
    ],
  },
  {
    category: 'Advanced Settings & Configuration',
    icon: '⚙️',
    description: 'Customize bot behavior for your server',
    commands: [
      { name: '/settings prefix', description: 'Set custom command prefix for server' },
      { name: '/settings djrole', description: 'Set DJ role for music control permissions' },
      { name: '/settings announce', description: 'Toggle now playing announcements' },
      { name: '/settings announcechannel', description: 'Set channel for announcements' },
      { name: '/settings volume', description: 'Set default starting volume' },
      { name: '/settings language', description: 'Change bot response language' },
      { name: '/settings 247', description: 'Enable bot to stay in voice 24/7' },
      { name: '/settings duplicates', description: 'Allow/prevent duplicate songs in queue' },
      { name: '/settings voteskip', description: 'Configure vote skip requirements' },
      { name: '/settings maxqueue', description: 'Set maximum queue size limit' },
    ],
  },
];

export default function AkariCommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommands, setFilteredCommands] = useState(akariCommands);

  useEffect(() => {
    document.body.classList.add('akari-page');
    return () => {
      document.body.classList.remove('akari-page');
    };
  }, []);

  useEffect(() => {
    let filtered = akariCommands;

    if (selectedCategory !== 'All') {
      filtered = akariCommands.filter(cat => cat.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.map(category => {
        if (category.commands) {
          const filteredCommands = category.commands.filter(cmd =>
            cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (filteredCommands.length === 0) return null;
          return {
            ...category,
            commands: filteredCommands,
          };
        } else if (category.subcategories) {
          const filteredSubcategories = category.subcategories.map(sub => ({
            ...sub,
            commands: sub.commands.filter(cmd =>
              cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
            ),
          })).filter(sub => sub.commands.length > 0);
          if (filteredSubcategories.length === 0) return null;
          return {
            ...category,
            subcategories: filteredSubcategories,
          };
        }
        return null;
      }).filter((cat): cat is typeof akariCommands[0] => cat !== null);
    }

    setFilteredCommands(filtered);
  }, [selectedCategory, searchQuery]);

  const categories = ['All', ...akariCommands.map(cat => cat.category)];

  // Count total commands
  const totalCommands = akariCommands.reduce((total, category) => {
    const directCommands = category.commands?.length || 0;
    const subCommands = category.subcategories?.reduce((subTotal, sub) => 
      subTotal + sub.commands.length, 0) || 0;
    return total + directCommands + subCommands;
  }, 0);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden akari-theme">
      <AkariSparkles />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/premium"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Akari Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text-akari">Akari Commands</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Complete list of {totalCommands}+ premium commands across 7 categories
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
              🎵 Spotify Integration
            </span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
              🎚️ 23+ Audio Filters
            </span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
              ⭐ Exclusive Features
            </span>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/30 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white glow-purple'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-purple-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Commands Display */}
        <div className="space-y-12">
          {filteredCommands.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <span className="text-4xl mr-3">{category.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold gradient-text-akari">{category.category}</h2>
                    <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Direct Commands */}
              {category.commands && category.commands.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {category.commands.map((command, cmdIndex) => (
                    <motion.div
                      key={command.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: cmdIndex * 0.05 }}
                      className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start">
                        <CommandLineIcon className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <code className="text-purple-300 font-bold text-lg block mb-2">
                            {command.name}
                          </code>
                          <p className="text-gray-400">{command.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Subcategories */}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="space-y-8">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subcategory.name} className="ml-4">
                      <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                        <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 mr-3 rounded" />
                        {subcategory.name}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {subcategory.commands.map((command, cmdIndex) => (
                          <motion.div
                            key={command.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (subIndex * 0.1) + (cmdIndex * 0.05) }}
                            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                          >
                            <div className="flex items-start">
                              <CommandLineIcon className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <code className="text-purple-300 font-bold block mb-2">
                                  {command.name}
                                </code>
                                <p className="text-gray-400 text-sm">{command.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCommands.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No commands found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-3 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-600/30 transition-colors"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/30 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold gradient-text-akari mb-4">
            Ready to use these commands?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Add Akari to your Discord server and unlock all premium features
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1426105190196707399&permissions=321751086336768&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-xl glow-purple hover:shadow-2xl transition-all duration-300"
          >
            Add Akari to Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
}
