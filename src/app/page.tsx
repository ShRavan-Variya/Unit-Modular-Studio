"use client";
import {useState} from "react";
import ProjectList from "@/components/ProjectList";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <div className="bg-white p-18 min-h-screen">
      <TopNav />
      <ProjectList />
    </div>
  );
}
