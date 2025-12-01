'use client';
import { useEffect } from 'react';

export default function AkariSparkles() {
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'akari-sparkle';
      
      // Random positioning
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.animationDuration = Math.random() * 2 + 3 + 's';
      sparkle.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      
      document.getElementById('akari-sparkles-container')?.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 5000);
    };

    const interval = setInterval(createSparkle, 200);
    
    return () => clearInterval(interval);
  }, []);

  return <div id="akari-sparkles-container" className="fixed inset-0 pointer-events-none z-50" />;
}
