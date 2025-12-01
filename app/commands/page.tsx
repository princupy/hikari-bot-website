'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CommandLineIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const hikariCommands = [
  {
    category: 'Music Playback',
    icon: '🎵',
    commands: [
      { name: '/play', description: 'Play a song from YouTube, Spotify, or direct URL' },
      { name: '/pause', description: 'Pause the current track' },
      { name: '/resume', description: 'Resume playback' },
      { name: '/skip', description: 'Skip to the next song in queue' },
      { name: '/stop', description: 'Stop playback and disconnect from voice' },
      { name: '/nowplaying', description: 'Display currently playing song info' },
      { name: '/volume', description: 'Adjust playback volume (0-100)' },
    ],
  },
  {
    category: 'Queue Management',
    icon: '📋',
    commands: [
      { name: '/queue', description: 'View the current song queue' },
      { name: '/shuffle', description: 'Shuffle the queue order' },
      { name: '/loop', description: 'Toggle loop mode (off/track/queue)' },
      { name: '/clear', description: 'Clear the entire queue' },
      { name: '/remove', description: 'Remove a specific song from queue' },
      { name: '/jump', description: 'Jump to a specific song in queue' },
      { name: '/move', description: 'Move a song to different position' },
    ],
  },
  {
    category: 'Favourites',
    icon: '❤️',
    commands: [
      { name: '/favorite add', description: 'Add current song to your favorites' },
      { name: '/favorite list', description: 'View all your favorite songs' },
      { name: '/favorite play', description: 'Play a song from favorites' },
      { name: '/favorite remove', description: 'Remove a song from favorites' },
      { name: '/favorite clear', description: 'Clear all favorites' },
    ],
  },
  {
    category: 'Playlists',
    icon: '📂',
    commands: [
      { name: '/playlist create', description: 'Create a new playlist' },
      { name: '/playlist add', description: 'Add current song to playlist' },
      { name: '/playlist remove', description: 'Remove song from playlist' },
      { name: '/playlist play', description: 'Play an entire playlist' },
      { name: '/playlist list', description: 'View all your playlists' },
      { name: '/playlist delete', description: 'Delete a playlist' },
      { name: '/playlist info', description: 'View playlist details' },
    ],
  },
  {
    category: 'Settings & Filters',
    icon: '⚙️',
    commands: [
      { name: '/bassboost', description: 'Toggle bass boost audio effect' },
      { name: '/nightcore', description: 'Toggle nightcore effect (faster, higher pitch)' },
      { name: '/vaporwave', description: 'Toggle vaporwave effect (slower, lower pitch)' },
      { name: '/8d', description: 'Toggle 8D surround sound effect' },
      { name: '/speed', description: 'Change playback speed' },
    ],
  },
  {
    category: 'Information',
    icon: 'ℹ️',
    commands: [
      { name: '/help', description: 'View all available commands and help' },
      { name: '/stats', description: 'View bot statistics and server count' },
      { name: '/ping', description: 'Check bot response time and latency' },
      { name: '/invite', description: 'Get bot invite link' },
      { name: '/support', description: 'Join official support server' },
      { name: '/about', description: 'Information about Hikari bot' },
    ],
  },
];

export default function CommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...hikariCommands.map(cat => cat.category)];

  const filteredCommands = hikariCommands.filter(category => {
    if (selectedCategory !== 'All' && category.category !== selectedCategory) {
      return false;
    }

    if (searchQuery) {
      const matchesSearch = category.commands.some(cmd =>
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return matchesSearch;
    }

    return true;
  }).map(category => ({
    ...category,
    commands: category.commands.filter(cmd =>
      !searchQuery ||
      cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Hikari Commands</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete list of all available commands for Hikari Music Bot
          </p>
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
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-pink-500/30 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-colors"
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
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white glow-pink'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-pink-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Commands Grid */}
        <div className="space-y-12">
          {filteredCommands.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="mb-6 flex items-center">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h2 className="text-3xl font-bold gradient-text">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.commands.map((command, cmdIndex) => (
                  <motion.div
                    key={command.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cmdIndex * 0.05 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start">
                      <CommandLineIcon className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <code className="text-pink-400 font-bold text-lg block mb-2">
                          {command.name}
                        </code>
                        <p className="text-gray-400">{command.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
          </motion.div>
        )}

        {/* Upgrade CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Want More Features?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Upgrade to Akari Premium for 75+ advanced commands and exclusive features
          </p>
          <a
            href="/premium"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold glow-purple hover:shadow-2xl transition-all duration-300"
          >
            View Akari Premium →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
