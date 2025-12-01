'use client';
import { motion } from 'framer-motion';
import { DocumentTextIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using Hikari Discord Bot ("the Bot"), you accept and agree to be bound by the terms and provision of this agreement.
    
    • You must be at least 13 years old to use this service
    • You must comply with Discord's Terms of Service
    • Your use of the Bot constitutes acceptance of these terms
    • We reserve the right to modify these terms at any time`,
  },
  {
    title: 'Description of Service',
    content: `Hikari provides music streaming services for Discord:
    
    • Play music from various platforms (YouTube, Spotify, etc.)
    • Manage playlists and queues
    • Audio filters and effects
    • Server-specific settings and preferences
    • Premium features for subscribed users`,
  },
  {
    title: 'User Responsibilities',
    content: `As a user of Hikari, you agree to:
    
    • Use the Bot in compliance with all applicable laws
    • Not abuse, spam, or overload the Bot
    • Not attempt to hack, exploit, or reverse engineer
    • Respect copyright and intellectual property rights
    • Not use the Bot for illegal or harmful activities
    • Report bugs and vulnerabilities responsibly`,
  },
  {
    title: 'Prohibited Activities',
    content: `The following activities are strictly prohibited:
    
    • Using the Bot to play copyrighted content illegally
    • Attempting to bypass premium restrictions
    • Sharing or selling bot access
    • Using automated scripts or bots to control Hikari
    • Harassing other users or staff
    • Distributing malware or harmful content`,
  },
  {
    title: 'Premium Services',
    content: `Premium subscription terms:
    
    • Subscriptions are non-transferable
    • Billed monthly or annually as selected
    • Automatic renewal unless canceled
    • Refunds subject to our Refund Policy
    • Features subject to change with notice
    • No guarantee of specific uptime percentage`,
  },
  {
    title: 'Intellectual Property',
    content: `All rights reserved:
    
    • The Bot and its original content are our property
    • Our trademarks and trade dress may not be used
    • You may not copy, modify, or distribute our code
    • Music content rights belong to respective owners
    • Fair use policies apply to all streamed content`,
  },
  {
    title: 'Disclaimer of Warranties',
    content: `The service is provided "as is":
    
    • No warranty of uninterrupted or error-free service
    • No guarantee of specific features or availability
    • We are not liable for third-party service disruptions
    • Music availability depends on external platforms
    • We reserve the right to modify or discontinue features`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law:
    
    • We are not liable for any indirect or consequential damages
    • Maximum liability limited to subscription fees paid
    • No liability for Discord platform issues
    • No responsibility for third-party content
    • Force majeure events exclude liability`,
  },
  {
    title: 'Termination',
    content: `We may terminate or suspend access:
    
    • For violation of these terms
    • For abusive or harmful behavior
    • Without notice or liability
    • While preserving your data rights
    • Refunds handled per Refund Policy`,
  },
  {
    title: 'Governing Law',
    content: `These terms are governed by:
    
    • Laws of [Your Jurisdiction]
    • Disputes resolved through arbitration
    • Class action waiver applies
    • English language version prevails
    • Severability of invalid provisions`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to modify these terms:
    
    • Changes effective upon posting
    • Significant changes notified via Discord
    • Continued use implies acceptance
    • Review terms regularly for updates`,
  },
  {
    title: 'Contact Information',
    content: `For questions about these terms:
    
    • Email: legal@hikaribot.com
    • Discord: Join our support server
    • Website: Contact form available
    • Response time: Within 48-72 hours`,
  },
];

export default function TermsPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center glow-pink">
              <DocumentTextIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-gray-400 text-lg">
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
          className="mb-12 p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20"
        >
          <p className="text-gray-300 leading-relaxed">
            Welcome to Hikari! These Terms of Service ("Terms") govern your use of our Discord music bot 
            and related services. By using Hikari, you agree to comply with these Terms. Please read them 
            carefully before using our services. If you do not agree with any part of these Terms, you may 
            not use our service.
          </p>
        </motion.div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <button
                onClick={() => setOpenSection(openSection === index ? null : index)}
                className="w-full text-left p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white">
                    {index + 1}. {section.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6 text-pink-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openSection === index ? 'auto' : 0,
                    opacity: openSection === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-pink-500/20">
                    <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Agreement Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 rounded-xl bg-pink-500/10 border border-pink-500/30"
        >
          <p className="text-gray-300 text-center">
            By using Hikari, you acknowledge that you have read and understood these Terms of Service 
            and agree to be bound by them.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/privacy"
            className="px-6 py-3 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300 text-center"
          >
            Privacy Policy
          </a>
          <a
            href="/support"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold glow-pink hover:shadow-2xl transition-all duration-300 text-center"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
