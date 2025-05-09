"use client";
import {Suspense} from "react";
import TopNav from "@/components/TopNav";
import {projects} from "@/constants/Theme";
import {useSearchParams} from 'next/navigation';
import ProjectItem from "@/components/ProjectItem";

function IndustrialContent() {
  const searchParams = useSearchParams();
  const subCategory = searchParams.get("category");

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
    <div className="w-full mx-auto overflow-y-auto p-8 pt-25">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-500">
        {subCategory ? `Industrial - ${subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}` : "Industrial Design Projects"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              mainImage={item.mainImage}
              icon={item.icon}
              previewImage={item.previewImage}
              description={item.description}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No projects found in this category.</p>
        )}
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