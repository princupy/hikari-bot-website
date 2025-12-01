'use client';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const sections = [
  {
    title: 'Information We Collect',
    content: `When you use Hikari, we collect certain information to provide and improve our services:
    
• Discord User ID and Username
• Server (Guild) IDs where the bot is added
• Usage data (commands used, songs played)
• Server settings and preferences
• No personal messages or voice data is stored`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the collected information for:
    
• Providing music streaming services
• Improving bot performance and features
• Analytics and usage statistics
• Troubleshooting and support
• Preventing abuse and ensuring security`,
  },
  {
    title: 'Data Storage and Security',
    content: `Your data security is our priority:
    
• All data is encrypted in transit and at rest
• Stored securely on protected servers
• Regular security audits and updates
• Access limited to authorized personnel only
• Compliance with Discord's Terms of Service`,
  },
  {
    title: 'Third-Party Services',
    content: `Hikari integrates with the following services:
    
• Discord API for bot functionality
• YouTube/Spotify for music streaming
• Analytics services for usage tracking
• Payment processors for premium features
• All third parties comply with privacy standards`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to:
    
• Access your data at any time
• Request data deletion
• Opt-out of data collection (limited functionality)
• Export your server settings
• Contact us with privacy concerns`,
  },
  {
    title: 'Data Retention',
    content: `We retain your data as follows:
    
• Active server data: Stored while bot is in server
• Removed server data: Deleted within 30 days
• User preferences: Deleted on request
• Analytics data: Anonymized after 90 days
• Backup data: Retained for 30 days`,
  },
  {
    title: 'Cookies and Tracking',
    content: `Our website uses:
    
• Essential cookies for functionality
• Analytics cookies (with consent)
• No third-party advertising cookies
• Session storage for user preferences
• You can disable cookies in browser settings`,
  },
  {
    title: 'Children\'s Privacy',
    content: `Hikari complies with Discord's age requirements:
    
• Users must be 13+ years old (or local age requirement)
• We do not knowingly collect data from children
• Parents can request data deletion
• Compliance with COPPA regulations`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this policy:
    
• Users notified of significant changes
• Changes effective immediately upon posting
• Continued use implies acceptance
• Check this page regularly for updates`,
  },
  {
    title: 'Contact Us',
    content: `For privacy-related questions:
    
• Email: privacy@hikaribot.com
• Discord: Join our support server
• Response time: Within 48 hours
• Data requests processed within 30 days`,
  },
];

export default function PrivacyPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center glow-pink">
              <ShieldCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20"
        >
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            At Hikari, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our Discord music bot and website. 
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
            policy, please do not use our services.
          </p>
        </motion.div>

        {/* Accordion Sections */}
        <div className="space-y-3 sm:space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <button
                onClick={() => setOpenSection(openSection === index ? null : index)}
                className="w-full text-left p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 touch-manipulation"
                aria-expanded={openSection === index}
                aria-controls={`section-${index}`}
              >
                <div className="flex justify-between items-center gap-3">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-white pr-2">
                    {section.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  </motion.div>
                </div>

                <motion.div
                  id={`section-${index}`}
                  initial={false}
                  animate={{
                    height: openSection === index ? 'auto' : 0,
                    opacity: openSection === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-pink-500/20">
                    <p className="text-gray-400 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* GDPR Compliance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-500/30"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                GDPR & CCPA Compliant
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Hikari is fully compliant with GDPR (General Data Protection Regulation) and CCPA 
                (California Consumer Privacy Act) requirements. We respect your data rights and provide 
                full transparency in our data handling practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center p-6 sm:p-7 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-pink-500/20"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
            Have questions about our privacy practices?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/support"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-sm sm:text-base glow-pink hover:shadow-2xl transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="mailto:privacy@hikaribot.com"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-pink-500/30 rounded-full text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
            >
              Email Privacy Team
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Related Documents</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <a
              href="/terms"
              className="px-4 sm:px-5 py-2 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 text-xs sm:text-sm hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="px-4 sm:px-5 py-2 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 text-xs sm:text-sm hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
            >
              Cookie Policy
            </a>
            <a
              href="/data-request"
              className="px-4 sm:px-5 py-2 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 text-xs sm:text-sm hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
            >
              Data Request
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
