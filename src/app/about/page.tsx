// app/contact-us/page.tsx (assuming you're using App Router)
"use client";
import AboutDetails from "@/components/AboutDetails";
import TeamMember from "@/components/TeamMember";
import TopBrandSection from "@/components/TopBrandSection";
import DesignProcess from "@/components/DesignProcess";
import sudhanshu from '@/assets/sudhanshu.png';
import abhishek from '@/assets/abhishek.png';
import Gallery from "@/components/Gallery";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import img1 from '@/assets/logo.png';
import img2 from '@/assets/logo.png';
import img3 from '@/assets/logo.png';

export default function AboutUs() {

  const images = [
    { src: img1, alt: 'Workstation' },
    { src: img2, alt: 'Reception Area' },
    { src: img3, alt: 'Reception Area' },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col pt-20 pb-20">
      <TopNav current={'about'}/>
      {/* Breadcrumb */}
      <div className="w-full px-18 py-4 text-sm text-gray-500">
        <nav className="flex space-x-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <span className="text-red-500 font-medium">About Us</span>
        </nav>
      </div>
      <div className="py-10 px-4 max-w-4xl self-center">
        <TopBrandSection />
        <AboutDetails />
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <TeamMember
            imageSrc={sudhanshu}
            quote="A state of Human mind is but a reflection of Art of Architecture."
            name="Ar. Sudhanshu Yande"
            role="Co-Founder"
          />
          <TeamMember
            imageSrc={abhishek}
            quote="Small things make perfection but perfection is not a small thing."
            name="Ar. Abhishek Dukane"
            role="Co-Founder"
          />
        </div>


        {/* <DesignProcess />
        <Gallery images={images} /> */}
      </div>
    </div>
  );
}
