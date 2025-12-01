'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  EnvelopeIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Social Icon Components
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const socialSupport = [
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Get personalized help via email',
      detail: 'support@hikaribot.com',
      link: 'mailto:support@hikaribot.com',
      buttonText: 'Send Email',
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/60',
      textColor: 'text-blue-400',
    },
    {
      icon: DiscordIcon,
      title: 'Discord Server',
      description: 'Join our community for instant help',
      detail: 'discord.gg/thelastride',
      link: 'https://discord.gg/thelastride',
      buttonText: 'Join Discord',
      color: 'from-indigo-500 to-purple-500',
      bgGlow: 'bg-indigo-500/20',
      borderColor: 'border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-500/60',
      textColor: 'text-indigo-400',
    },
    {
      icon: InstagramIcon,
      title: 'Instagram',
      description: 'Follow us for updates and support',
      detail: '@hikaribot',
      link: 'https://instagram.com/tanmoy_here8388',
      buttonText: 'Follow Us',
      color: 'from-pink-500 to-rose-500',
      bgGlow: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-500/60',
      textColor: 'text-pink-400',
    },
  ];

  const features = [
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'We are here to help you anytime',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Quick Response',
      description: 'Average response time under 2 hours',
    },
    {
      icon: UserGroupIcon,
      title: 'Active Community',
      description: '10K+ members ready to help',
    },
  ];

  const faqs = [
    {
      q: 'How do I add Hikari to my server?',
      a: 'Click the "Add to Discord" button on the homepage and select your server from the list. Make sure you have "Manage Server" permission.',
    },
    {
      q: 'Is Hikari free to use?',
      a: 'Yes! All basic music features are completely free. Akari Premium offers advanced features like 75+ commands, audio filters, and priority support.',
    },
    {
      q: 'What platforms does Hikari support?',
      a: 'Hikari supports YouTube, Spotify, SoundCloud, and direct audio links. Akari Premium adds enhanced Spotify integration.',
    },
    {
      q: 'Can I use Hikari in multiple servers?',
      a: 'Absolutely! You can add Hikari to as many Discord servers as you want at no additional cost.',
    },
    {
      q: 'What is the difference between Hikari and Akari?',
      a: 'Hikari is our free music bot with essential features. Akari Premium offers 75+ advanced commands, 20+ audio filters, unlimited playlists, and priority support.',
    },
    {
      q: 'How do I report a bug?',
      a: 'Join our Discord server and use the #bug-reports channel, or send us an email with detailed information about the issue.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
          >
            <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
            <span className="text-pink-300 text-xs sm:text-sm font-medium">We're Here to Help</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
            <span className="gradient-text">Get Support</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Choose your preferred way to reach us. Our team is ready to assist you!
          </p>
        </motion.div>

        {/* Social Support Options - Large Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {socialSupport.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div className={`p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border ${option.borderColor} ${option.hoverBorder} transition-all duration-300 h-full relative overflow-hidden`}>
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute inset-0 ${option.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 relative z-10 mx-auto`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <option.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{option.description}</p>
                  
                  {/* Detail with Copy */}
                  <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/5 border ${option.borderColor} mb-4 sm:mb-6`}>
                    <code className={`${option.textColor} font-mono text-xs sm:text-sm truncate max-w-[200px]`}>{option.detail}</code>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r ${option.color} rounded-full text-white font-bold text-sm sm:text-base hover:shadow-2xl transition-all duration-300`}
                  >
                    {option.buttonText}
                  </a>
                </div>

                {/* Shine Effect */}
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

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-3 sm:mb-4"
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-pink-500/20 relative overflow-hidden">
            <motion.div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2 text-center relative z-10">
              Send us a Message
            </h2>
            <p className="text-gray-400 text-sm sm:text-base text-center mb-6 sm:mb-8 relative z-10 px-4">
              Fill out the form below and we'll get back to you soon
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-pink-500/20 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-pink-500/20 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-pink-500/20 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-pink-500/20 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us more about your issue..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted || isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white font-bold text-sm sm:text-base glow-pink hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    Message Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-pink-400 text-xs sm:text-sm"
                >
                  ✓ Thank you! We'll get back to you soon via email.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2 text-center px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base text-center mb-8 sm:mb-10 md:mb-12 px-4">
            Quick answers to common questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <QuestionMarkCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">{faq.q}</h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm pl-7 sm:pl-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"
          />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4 px-4">
              Still have questions?
            </h2>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-4">
              Join our Discord community for instant support from 10K+ members
            </p>
            <motion.a
              href="https://discord.gg/thelastride"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-bold text-sm sm:text-base shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <DiscordIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              Join Discord Server
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
