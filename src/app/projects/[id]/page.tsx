'use client';

import {useRef, useEffect, useState} from 'react';
import {MdArrowForward} from '@react-icons/all-files/md/MdArrowForward';
import {projects} from '@/constants/Theme';
import {useParams} from 'next/navigation';
import {notFound} from 'next/navigation';
import TopNav from '@/components/TopNav';
import Image from 'next/image';
import Link from 'next/link';

// export async function generateStaticParams() {
//   return [
//     { id: 'ankur todi' },
//     { id: 'dilip pimple bungalow project' },
//     { id: 'manjushree project' },
//     { id: 'rh-14' },
//     { id: 'tvm' },
//     { id: 'e-46' },
//     { id: 'vecap' },
//   ];
// }

export default function ProjectDetailPage() {
  const params = useParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const project = projects.find((item) => item.title.replace(/\s+/g, '-').toLowerCase() === id);

  if (!project) {
    notFound();
  }

  const updateArrowVisibility = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowRightArrow(scrollLeft + 10 < maxScrollLeft);
  };

  const scrollToNext = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    const scrollLeft = container.scrollLeft;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (child.offsetLeft > scrollLeft + 10) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        break;
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    container.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        const scrollAmount = e.deltaY * 3;
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
        container.style.transform = 'scale(0.96)';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          container.style.transform = 'scale(1)';
        }, 100);

        updateArrowVisibility();
      }
    };

    const handleScroll = () => {
      updateArrowVisibility();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll);

    updateArrowVisibility();

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
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
              className="h-full w-auto object-cover rounded-md pointer-events-none"
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

      <div className={`absolute top-1/2 right-0 h-50 w-50 z-20 transition-all duration-700 ease-in-out transform -translate-y-1/2 ${showRightArrow ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {/* <div className="absolute inset-0 mix-blend-lighten bg-[radial-gradient(circle,#D1D5DB_0%,transparent_35%)]"></div> */}
        <div className='flex justify-center items-center h-full relative'>
          <button
            onClick={scrollToNext}
            className="bg-white rounded-full p-3 shadow-md z-10">
            <MdArrowForward size={26} className="text-black" />
          </button>
        </div>
      </div>

      {/* <div className={`absolute top-1/2 right-0 h-45 w-45 z-20 pointer-events-none transition-all duration-700 ease-in-out transform -translate-y-1/2 ${showRightArrow ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(156,163,175,0.4)_0%,transparent_80%)]"></div>
        <div className="absolute top-0 right-0 h-full w-full rounded-full overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-white/80 via-white/30 to-transparent backdrop-blur-xl rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
          <MdArrowForward size={26} className="text-black" />
        </div>
      </div> */}
    </div>
  );
}
