'use client';
import { useEffect, useState } from 'react';

const HorizontalScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = window.scrollX;
      const scrollWidth = document.body.scrollWidth - window.innerWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 left-8 right-8 h-1 bg-gray-200 z-50 rounded-full">
      <div
        className="h-full bg-red-500 transition-all duration-150 ease-in-out rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default HorizontalScrollIndicator;
