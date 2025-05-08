"use client";
import {useState} from "react";
import ProjectList from "@/components/ProjectList";
import TopNav from "@/components/TopNav";

export default function Home() {
  const [filter, setFilter] = useState<string>("All");

  return (
    <div className="bg-white p-18 min-h-screen">
      <TopNav setFilter={setFilter} />
      <ProjectList filter={filter} />
    </div>
  );
}
