'use client';

import {useRef, useEffect} from 'react';
import {projects} from '@/constants/Theme';
import {useParams} from 'next/navigation';
import {notFound} from 'next/navigation';
import TopNav from '@/components/TopNav';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const params = useParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const project = projects.find((item) => item.title.replace(/\s+/g, '-').toLowerCase() === id);

  if (!project) {
    notFound();
  }

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
  
    let scrollTimeout: NodeJS.Timeout;
    container.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        const scrollAmount = e.deltaY * 10;
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
      <TopNav />
      <div ref={scrollContainerRef} className="flex overflow-x-auto overflow-y-hidden h-full pt-24 pb-6 gap-2 px-10 scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {project.images.map((imgSrc: any, index: number) => (
          <div key={index} className="flex-shrink-0 h-full relative">
            <Image
              src={imgSrc}
              alt={`Project Image ${index + 1}`}
              className="h-full w-auto object-cover rounded-md"
              // fill
              quality={100}
              // sizes="100vw"
              priority={index < 3}
              // sizes="(max-width: 768px) 80vw, 30vw"
              // sizes="(max-width: 768px) 80vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
