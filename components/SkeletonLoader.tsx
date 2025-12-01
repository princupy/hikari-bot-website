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
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-pink-500/20 animate-pulse">
            <div className="w-14 h-14 bg-white/10 rounded-xl mb-4" />
            <div className="h-6 bg-white/10 rounded w-3/4 mb-3" />
            <div className="h-4 bg-white/10 rounded w-full mb-2" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
          </div>
        );

      case 'text':
        return (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
            <div className="h-4 bg-white/10 rounded w-4/6" />
          </div>
        );

      case 'avatar':
        return (
          <div className="flex items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-white/10 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded w-3/4" />
              <div className="h-3 bg-white/10 rounded w-1/2" />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className="h-12 bg-white/10 rounded-full w-32 animate-pulse" />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {renderSkeleton()}
        </motion.div>
      ))}
    </>
  );
}
