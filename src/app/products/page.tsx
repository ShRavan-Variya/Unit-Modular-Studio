"use client";
import TopNav from "@/components/TopNav";
import {projects} from "@/constants/Theme";
import ProjectItem from "@/components/ProjectItem";

export default function Products() {
  return (
    <div className="bg-white p-18 min-h-screen">
      <TopNav current={"products"} />
      <div className="w-full mx-auto overflow-y-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((item: any, index: number) => (
            <ProjectItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              mainImage={item.mainImage}
              icon={item.icon}
              previewImage={item.previewImage}
              description={item.description}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
