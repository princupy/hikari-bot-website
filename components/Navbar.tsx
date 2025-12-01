'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Commands', href: '/commands' },
    { name: 'Premium', href: '/premium' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 glow-pink flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">H</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">Hikari</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Add Bot Button */}
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1388435176610336868&permissions=321751086336768&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 lg:px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 glow-pink whitespace-nowrap"
          >
            Add to Discord
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                style={{ top: '56px' }}
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-14 sm:top-16 bottom-0 w-64 sm:w-80 bg-gradient-to-b from-gray-900 to-black border-l border-pink-500/30 md:hidden overflow-y-auto shadow-2xl"
              >
                <div className="p-6 space-y-4">
                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block py-3 px-4 text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-200 text-base font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-700 my-4" />

                  {/* Add Bot Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="https://discord.com/oauth2/authorize?client_id=1388435176610336868&permissions=321751086336768&integration_type=0&scope=bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white text-center font-bold glow-pink hover:shadow-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Add to Discord
                    </Link>
                  </motion.div>

                  {/* Premium Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="/premium"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-center font-bold glow-purple hover:shadow-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      View Akari Premium ⭐
                    </Link>
                  </motion.div>

                  {/* Footer Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 text-center text-gray-500 text-xs"
                  >
                    <p>Made with ❤️ for Discord</p>
                    <p className="mt-1">10K+ Servers • 1M+ Users</p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
