"use client";
import TopNav from "@/components/TopNav";
import {projects} from "@/constants/Theme";
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";

export default function Products() {
  return (
    <div className="bg-white p-18 min-h-screen">
      <TopNav current={"products"} />
      {/* Breadcrumb */}
      <div className="w-full px-30 py-4 text-sm text-gray-500">
        <nav className="flex space-x-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <span className="text-red-500 font-medium">Products</span>
        </nav>
      </div>
      <div className="w-full mx-auto overflow-y-auto px-8">
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
