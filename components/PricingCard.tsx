'use client';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  popular,
  buttonText,
  buttonLink,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
        popular
          ? 'bg-gradient-to-br from-pink-500/20 to-purple-600/20 border-2 border-pink-500 shadow-2xl shadow-pink-500/30'
          : 'bg-white/5 border border-pink-500/20'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-bold glow-pink">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold gradient-text">{price}</span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="w-6 h-6 text-pink-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white glow-pink hover:shadow-2xl'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        {buttonText}
      </a>
    </motion.div>
  );
}
