"use client";

import {products, partners} from "@/constants/Theme";
import {useSearchParams} from "next/navigation";
import TopNav from "@/components/TopNav";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const filteredProjects = products.filter((item) => {
    if (!category && !subcategory) return true;
    if (item.category !== category) return false;
    if (category === "Bespoke") return true;
    if (subcategory) {
      return item.subcategory?.toLowerCase() === subcategory.toLowerCase();
    }
    return true;
  });

  console.log('filteredProjects :::: >>> ', JSON.stringify(filteredProjects));
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Scrollable Content */}
      <div className="flex-grow w-full mx-auto overflow-y-auto p-8 pt-20">
        <TopNav current={"products"} />
        {/* Breadcrumb */}
        <div className="w-full px-10 py-4 text-sm text-gray-500">
          <nav className="flex space-x-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            {subcategory ? (
              <>
                <Link href="/products" className="hover:underline">Shop</Link>
                <span>&gt;</span>
                <Link href={`/products?category=${category}`} className="hover:underline">{category}</Link>
                <span>&gt;</span>
                <span className="text-red-500 font-medium">{subcategory}</span>
              </>
            ) : category ? (
              <>
                <Link href="/products" className="hover:underline">Shop</Link>
                <span>&gt;</span>
                <span className="text-red-500 font-medium">{category}</span>
              </>
            ) : <Link href="/products" className="text-red-500 font-medium">Shop</Link>}
          </nav>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          ) : (
            filteredProjects.map((item) => (
              item.link ? (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={`Product ${item.id}`}
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                </a>
              ) : (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:scale-105"
                >
                  <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={`Product ${item.id}`}
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                </div>
              )
            ))
          )}
        </div>
      </div>
        {/* Partners Footer */}
      <div className="relative overflow-hidden mx-10 md:mx-15 lg:mx-25 xl:mx-35 mt-15 pb-10">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-30 md:w-80 lg:w-100 xl:w-180 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-30 md:w-80 lg:w-100 xl:w-180 z-10 bg-gradient-to-l from-white to-transparent" />
        <div className="scroll-partners hide-scrollbar flex gap-4">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="min-w-[150px] h-[80px] relative flex-shrink-0">
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
