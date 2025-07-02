"use client";
import {Suspense} from "react";
import TopNav from "@/components/TopNav";
import {partners, projects} from "@/constants/Theme";
import {useSearchParams} from 'next/navigation';
import ProjectItem from "@/components/ProjectItem";
import Image from "next/image";
import Link from "next/link";

function IndustrialContent() {
  const searchParams = useSearchParams();
  const subCategory = searchParams.get("category");
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const mainCategory = "Industrial Design";

  const filteredProjects = projects.filter((item) => {
    if (item.category !== mainCategory) {
      return false;
    }
    if (subCategory) {
      return item.subCategory?.toLowerCase() === subCategory.toLowerCase();
    }
    return true;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area */}
      <div className="flex-grow p-8 pt-20">
        {/* Breadcrumb */}
        <div className="w-full px-10 py-4 text-sm text-gray-500">
          <nav className="flex space-x-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            {subCategory ? (
              <Link href="/industrial" className="hover:underline">{mainCategory}</Link>
            ): (
              <span className="text-red-500 font-medium">{mainCategory}</span>
            )}
            {subCategory && (
              <>
                <span>&gt;</span>
                <span className="text-red-500 font-medium">{subCategory}</span>
              </>
            )}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
          {filteredProjects.length > 0 && filteredProjects.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                mainImage={item.mainImage}
                icon={item.icon}
                previewImage={item.previewImage}
                description={item.description}
              />
            )
          )}
        </div>
        {filteredProjects.length === 0 && (
          <p className="w-full text-center text-gray-500">{`No projects found in ${subCategory ? subCategory : 'Architecture'}.`}</p>
        )}
      </div>
      
      <div className="relative overflow-hidden mx-10 md:mx-15 lg:mx-25 xl:mx-35 mt-15 pb-10">
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

export default function Industrial() {
  return (
    <div className="bg-white min-h-screen">
      <TopNav current={"industrial"} />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <IndustrialContent />
      </Suspense>
    </div>
  );
}
