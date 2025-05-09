"use client";
import TopNav from "@/components/TopNav";
import {projects} from "@/constants/Theme";
import ProjectItem from "@/components/ProjectItem";

export default function Architecture() {
  const filteredProjects = projects.filter((item) => {
    if (item.category !== "Architecture") {
      return false;
    }
    return true;
  });
  
  return (
    <div className="bg-white p-18 min-h-screen">
      <TopNav current={"architecture"} />
      <div className="w-full mx-auto overflow-y-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
    </div>
  );
}
