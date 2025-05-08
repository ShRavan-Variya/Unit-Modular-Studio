'use client';
import {useRef, useEffect} from 'react';
import sampleImage from '@/assets/image1.jpg';
import TopNav from '@/components/TopNav';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const images = Array.from({ length: 20 }); // 20 images

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
  
    let scrollTimeout: NodeJS.Timeout;
    container.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        const scrollAmount = e.deltaY * 2;
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
        container.style.transform = 'scale(0.96)';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          container.style.transform = 'scale(1)';
        }, 100);
      }
    };
  
    container.addEventListener('wheel', handleWheel, { passive: false });
  
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="relative h-screen bg-white overflow-hidden">
      <TopNav setFilter={() => {
        
      }} />

      <div ref={scrollContainerRef} className="flex overflow-x-auto overflow-y-hidden h-full pt-24 pb-6 space-x-6 px-10 scrollbar-hide">
        {images.map((_, index) => (
          <div key={index} className="flex-shrink-0 h-full">
            <Image
              src={sampleImage}
              alt={`Sample ${index}`}
              className="h-full w-auto object-cover rounded-md"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
