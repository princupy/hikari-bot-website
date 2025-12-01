'use client';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'avatar' | 'button';
  count?: number;
}

export default function SkeletonLoader({ type = 'card', count = 1 }: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-pink-500/20 animate-pulse">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-lg sm:rounded-xl mb-3 sm:mb-4" />
            <div className="h-5 sm:h-6 bg-white/10 rounded w-3/4 mb-2 sm:mb-3" />
            <div className="h-3 sm:h-4 bg-white/10 rounded w-full mb-1.5 sm:mb-2" />
            <div className="h-3 sm:h-4 bg-white/10 rounded w-5/6" />
          </div>
        );

      case 'text':
        return (
          <div className="space-y-2 sm:space-y-3 animate-pulse">
            <div className="h-3 sm:h-4 bg-white/10 rounded w-full" />
            <div className="h-3 sm:h-4 bg-white/10 rounded w-5/6" />
            <div className="h-3 sm:h-4 bg-white/10 rounded w-4/6" />
          </div>
        );

      case 'avatar':
        return (
          <div className="flex items-center space-x-3 sm:space-x-4 animate-pulse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
              <div className="h-3 sm:h-4 bg-white/10 rounded w-3/4" />
              <div className="h-2.5 sm:h-3 bg-white/10 rounded w-1/2" />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className="h-10 sm:h-12 bg-white/10 rounded-full w-24 sm:w-32 animate-pulse" />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.3,
            ease: "easeOut"
          }}
          className="w-full"
        >
          {renderSkeleton()}
        </motion.div>
      ))}
    </>
  );
}
