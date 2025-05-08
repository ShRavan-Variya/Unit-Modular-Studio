"use client";
import Link from 'next/link';
import {FC} from 'react';

interface TopNavProps {
  setFilter: (filter: string) => void;
}

const TopNav: FC<TopNavProps> = (props) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-black cursor-pointer" onClick={() => props.setFilter("All")}>
          Unit Modular <span className="text-red-500">Studio</span>
        </div>
        <nav className="flex space-x-6 text-gray-700 text-sm">
          <Link href="/#" className="hover:text-red-500">Architecture</Link>
          <Link href="/#" className="hover:text-red-500">Interior Design</Link>
          <Link href="/about" className="hover:text-red-500">About Us</Link>
          <Link href="/contact" className="hover:text-red-500">Contact us</Link>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
