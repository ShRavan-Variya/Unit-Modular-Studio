"use client";

import {useSearchParams} from "next/navigation";
import Link from "next/link";
import TopNav from "@/components/TopNav";

export default function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  return (
    <div className="w-full min-h-screen bg-white mx-auto overflow-y-auto p-8 pt-20">
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
      <div className="w-full mx-auto overflow-y-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        </div>
      </div>
    </div>
  );
}
