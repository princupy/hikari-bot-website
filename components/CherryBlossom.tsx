'use client';
import { useEffect } from 'react';

export default function CherryBlossom() {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'cherry-petal';
      
      // Random positioning
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = Math.random() * 3 + 5 + 's';
      petal.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      petal.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      
      document.getElementById('cherry-container')?.appendChild(petal);
      
      setTimeout(() => petal.remove(), 8000);
    };

    const interval = setInterval(createPetal, 300);
    
    return () => clearInterval(interval);
  }, []);

  return <div id="cherry-container" className="fixed inset-0 pointer-events-none z-50" />;
}
