"use client";
import TopNav from "@/components/TopNav";
import {projects} from "@/constants/Theme";
import {useSearchParams} from 'next/navigation';
import ProjectItem from "@/components/ProjectItem";

export default function Industrial() {
  const searchParams = useSearchParams();
  const subCategory = searchParams.get('category'); // Get ?category=steel etc.

  // Filter projects based on category and subCategory
  const filteredProjects = projects.filter((item) => {
    if (item.category !== "Industrial Design") {
      return false;
    }
    if (subCategory) {
      return item.subCategory?.toLowerCase() === subCategory.toLowerCase();
    }
    return true;
  });

  return (
    <div className="bg-white p-18 min-h-screen">
      <TopNav current={'menu'}/>
      <div className="w-full mx-auto overflow-y-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-500">
          {subCategory ? `Industrial - ${subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}` : "Industrial Design Projects"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                mainImage={item.mainImage}
                previewImage={item.previewImage}
                description={item.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No projects found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
