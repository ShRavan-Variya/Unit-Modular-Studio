"use client";
import {Suspense} from "react";
import TopNav from "@/components/TopNav";
import {projects} from "@/constants/Theme";
import {useSearchParams} from 'next/navigation';
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";

function ArchitectureContent() {
  const searchParams = useSearchParams();
  const subCategory = searchParams.get("category");

  const mainCategory = "Architecture";

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
    <div className="w-full mx-auto overflow-y-auto p-8 pt-20">
      {/* Breadcrumb */}
      <div className="w-full px-10 py-4 text-sm text-gray-500">
        <nav className="flex space-x-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          {subCategory ? (
            <Link href="/architecture" className="hover:underline">{mainCategory}</Link>
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
  );
}


export default function Architecture() {
  return (
    <div className="bg-white min-h-screen">
      <TopNav current={"architecture"} />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <ArchitectureContent />
      </Suspense>
    </div>
  );
}
