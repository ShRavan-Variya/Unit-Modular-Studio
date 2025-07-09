"use client";

import {useState} from "react";
import {products, partners} from "@/constants/Theme";
import TopNav from "@/components/TopNav";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const getUniqueSubcategories = (items: typeof products) => {
  return [...new Set(items.map((p) => p.subcategory).filter(Boolean))];
};

export default function Products() {
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const modularProducts = products.filter(p => p.category === "Modular Furniture");
  const bespokeProducts = products.filter(p => p.category === "Bespoke Furniture");
  const subcategories = ["All", ...getUniqueSubcategories(modularProducts)];

  const filteredModular = selectedSubcategory === "All"
    ? modularProducts
    : modularProducts.filter(p => p.subcategory.toLowerCase() === selectedSubcategory.toLowerCase());

  const duplicatedPartners = [...partners, ...partners, ...partners];
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow w-full mx-auto overflow-y-auto p-8 pt-20">
        <TopNav current={"products"} />

        <div className="w-full px-3 sm:px-10 py-4 text-sm text-gray-500">
          <nav className="flex space-x-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/products" className="text-red-500 font-medium">Shop</Link>
          </nav>
        </div>

        <h2 className="text-xl font-semibold mb-2 mt-3 text-gray-500 px-3 sm:px-10 ">Modular Furniture</h2>
        <div className="flex flex-wrap gap-2 mb-5 px-3 sm:px-10">
          {subcategories.map((sub, index) => (
            <button
              key={index}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-1 border rounded-full text-sm font-semibold transition ${
                selectedSubcategory === sub
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >{sub}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-3 sm:px-10">
          {filteredModular.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          ) : (
            filteredModular.map((item) => (
              <ProductCard 
                key={item.id}
                id={item.id}
                image={item.image}
                image2={item.image2}
                category={item.category}
                subcategory={item.subcategory}
                link={item.link}
              />
            ))
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-10 text-gray-500 px-3 sm:px-10">Bespoke Furniture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-3 sm:px-10">
          {bespokeProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          ) : (
            bespokeProducts.map((item) => (
              <ProductCard 
                key={item.id}
                id={item.id}
                image={item.image}
                image2={item.image2}
                category={item.category}
                subcategory={item.subcategory}
                link={item.link}
              />
            )
          ))}
        </div>
      </div>
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
