"use client";
import Image from 'next/image';
import Link from 'next/link';
import {FC, useState} from 'react';
import logo from '@/assets/logo.png';

interface TopNavProps {
  current?: string;
}

const TopNav: FC<TopNavProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="relative w-8 h-8">
            <Image src={logo} alt="Craft Spaces Logo" fill className="object-contain" priority />
          </div>
          <h1 className="text-2xl font-normal">
            <span style={{ color: "#ED5858" }} className='font-semibold'>CRAFT</span>{" "}
            <span className="text-gray-500">SPACES</span>
          </h1>
        </Link>
        <nav className="flex space-x-6 text-gray-700 text-sm">
          <Link href="/architecture" className={`${props.current === 'architecture' ? 'text-red-500' : 'hover:text-red-500'}`}>Architecture</Link>
          <div className="relative group">
            <div className={`${props.current === 'industrial' ? 'text-red-500' : 'hover:text-red-500'}`}><button onClick={() => setIsMenuOpen(!isMenuOpen)}>Industrial Design</button></div>
            
            {isMenuOpen ? (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                
                {/* <Link href="/industrial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 font-semibold" onClick={handleLinkClick}>Industrial Design</Link>

                <div className="pl-4"> */}
                  <Link href="/industrial?category=steel" className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick}>Steel</Link>
                  <Link href="/industrial?category=chemical" className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick}>Chemical</Link>
                  <Link href="/industrial?category=pharma" className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick}>Pharma</Link>
                  <Link href="/industrial?category=textile" className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick}>Textile</Link>
                  <Link href="/industrial?category=food" className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick}>Food</Link>
                {/* </div> */}
              </div>
            ): null}
          </div>
          <Link href="/products" className={`${props.current === 'products' ? 'text-red-500' : 'hover:text-red-500'}`}>Products</Link>
          <Link href="/about" className={`${props.current === 'about' ? 'text-red-500' : 'hover:text-red-500'}`}>About Us</Link>
          <Link href="/contact" className={`${props.current === 'contact' ? 'text-red-500' : 'hover:text-red-500'}`}>Contact us</Link>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
