"use client";
import {useEffect, useRef} from "react";
import ProjectList from "@/components/ProjectList";
import {partners} from "@/constants/Theme";
import TopNav from "@/components/TopNav";
import Image from "next/image";

export default function Home() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-white py-18 min-h-screen">
      <TopNav />
      <ProjectList />
      {/* <div className=""> */}
      {/* Scrolling Partners Section */}
      <div className="relative overflow-hidden mx-10 md:mx-15 lg:mx-25 xl:mx-35 mt-15">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-30 md:w-80 lg:w-100 xl:w-180 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-30 md:w-80 lg:w-100 xl:w-180 z-10 bg-gradient-to-l from-white to-transparent" />
        <div className="scroll-partners hide-scrollbar flex gap-4">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="min-w-[150px] h-[80px] relative flex-shrink-0"
            >
              <Image
                src={partner.image}
                alt={`Partner ${partner.id}`}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
