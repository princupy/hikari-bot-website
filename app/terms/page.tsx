'use client';
import { motion } from 'framer-motion';
import { DocumentTextIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
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
              <DocumentTextIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            <span className="gradient-text">Terms of Service</span>
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
            Welcome to Hikari! These Terms of Service ("Terms") govern your use of our Discord music bot 
            and related services. By using Hikari, you agree to comply with these Terms. Please read them 
            carefully before using our services. If you do not agree with any part of these Terms, you may 
            not use our service.
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
                aria-controls={`term-${index}`}
              >
                <div className="flex justify-between items-center gap-3">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-white pr-2">
                    {index + 1}. {section.title}
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
                  id={`term-${index}`}
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

        {/* Important Legal Notices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12 space-y-4"
        >
          {/* Agreement Notice */}
          <div className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-pink-500/10 border border-pink-500/30">
            <div className="flex items-start gap-3 sm:gap-4">
              <DocumentTextIcon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Legally Binding Agreement
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  By using Hikari, you acknowledge that you have read and understood these Terms of Service 
                  and agree to be bound by them. If you are using the service on behalf of an organization, 
                  you represent that you have the authority to bind that organization to these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Discord TOS Notice */}
          <div className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-500/30">
            <div className="flex items-start gap-3 sm:gap-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Discord Terms Apply
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  In addition to these Terms, you must also comply with{' '}
                  <a 
                    href="https://discord.com/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Discord's Terms of Service
                  </a>{' '}
                  and{' '}
                  <a 
                    href="https://discord.com/guidelines" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Community Guidelines
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center mb-4">
            Related Legal Documents
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="/privacy"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 text-sm sm:text-base hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300 text-center"
            >
              Privacy Policy
            </a>
            <a
              href="/cookies"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-pink-500/20 rounded-full text-gray-300 text-sm sm:text-base hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300 text-center"
            >
              Cookie Policy
            </a>
            <a
              href="/support"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-sm sm:text-base glow-pink hover:shadow-2xl transition-all duration-300 text-center"
            >
              Contact Support
            </a>
          </div>
        </motion.div>

        {/* Print Version Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <button
            onClick={() => window.print()}
            className="text-gray-500 text-xs sm:text-sm hover:text-pink-400 transition-colors underline"
          >
            Print or Save PDF Version
          </button>
        </motion.div>
      </div>
    </div>
  );
}
