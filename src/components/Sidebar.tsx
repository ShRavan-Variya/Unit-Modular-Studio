import Link from 'next/link';
import React, {FC} from 'react';

const Sidebar: FC<any> = (props) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-150 flex flex-col items-start justify-center px-8 bg-white text-gray-500 text-sm font-light">
      <div className="mb-10 ml-10">
        <Link href="/"><h1 className="text-3xl font-light">Unit Modular <span className="font-bold text-red-500">Studio</span></h1></Link>
      </div>
      <nav className="flex flex-col space-y-2 text-gray-600 text-lg ml-10">
        <Link href="/arch" className="hover:text-red-500">Architecture</Link>
        <Link href="/interior" className="hover:text-red-500">Interior Design</Link>
        <Link href="/about" className="hover:text-red-500">About Us</Link>
        <Link href="/contact" className="hover:text-red-500">Contact us</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;