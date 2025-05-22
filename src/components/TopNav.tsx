"use client";
import {FC, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

interface TopNavProps {
  current?: string;
}

const TopNav: FC<TopNavProps> = (props) => {
  const [hovered, setHovered] = useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen1(false);
    setIsMenuOpen2(false);
    setMobileMenuOpen(false);
    setHovered(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Desktop + Tablet Navbar */}
      <div className="relative items-center justify-center h-20 px-6 transition-all duration-700 ease-in-out hidden lg:flex" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
        {/* Logo */}
        <Link
          href="/"
          className={`absolute flex items-center space-x-2 cursor-pointer transition-all duration-700 ease-in-out ${hovered ? "left-6" : "left-1/2 -translate-x-1/2"}`}>
          <div className="relative w-8 h-8">
            <Image src={logo} alt="Craft Spaces Logo" fill className="object-contain" priority />
          </div>
          <h1 className="text-2xl font-normal whitespace-nowrap">
            <span style={{ color: "#ED5858" }} className="font-semibold">CRAFT</span>{" "}
            <span className="text-gray-500">SPACES</span>
          </h1>
        </Link>

        {/* Desktop Navbar */}
        <nav className={`transition-all duration-700 ease-in-out flex space-x-10 text-gray-700 text-sm ${hovered ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          {/* <Link href="/architecture" className={`${props.current === "architecture" ? "text-red-500" : "hover:text-red-500"}`}>Architecture</Link> */}
          <div className="relative group">
            <div className={`${props.current === "architecture" ? "text-red-500" : "hover:text-red-500"}`}>
              <button onClick={() => setIsMenuOpen1(!isMenuOpen1)}>Architecture</button>
            </div>
            {isMenuOpen1 && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                {["Residential", "Commercial", "Hospitality", "Recreational"].map(
                  (category) => (
                    <Link key={category} href={`/architecture?category=${category}`} className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick} >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
          <div className="relative group">
            <div className={`${props.current === "industrial" ? "text-red-500" : "hover:text-red-500"}`}>
              <button onClick={() => setIsMenuOpen2(!isMenuOpen2)}>Industrial Design</button>
            </div>
            {isMenuOpen2 && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                {["steel", "chemical", "pharma", "textile", "food"].map(
                  (category) => (
                    <Link key={category} href={`/industrial?category=${category}`} className="block px-4 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-500" onClick={handleLinkClick} >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
          <Link href="/products" className={`${props.current === "products" ? "text-red-500" : "hover:text-red-500"}`}>Products</Link>
          <Link href="/about" className={`${props.current === "about" ? "text-red-500" : "hover:text-red-500"}`}>About Us</Link>
          <Link href="/contact" className={`${props.current === "contact" ? "text-red-500" : "hover:text-red-500"}`}>Contact us</Link>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden px-4 py-3 h-16">
        {/* Logo Left on Mobile */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image src={logo} alt="Craft Spaces Logo" fill className="object-contain" priority />
          </div>
          <h1 className="text-xl font-normal whitespace-nowrap">
            <span style={{ color: "#ED5858" }} className="font-semibold">CRAFT</span>{" "}
            <span className="text-gray-500">SPACES</span>
          </h1>
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      {/* {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white/60 backdrop-blur-md z-50 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-6 px-6 pt-24 text-gray-800 text-lg">
            <Link href="/architecture" onClick={handleLinkClick}>Architecture</Link>
            <div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full text-left text-gray-700">Industrial Design</button>
              {isMenuOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-1">
                  {["steel", "chemical", "pharma", "textile", "food"].map((category) => (
                    <Link key={category} href={`/industrial?category=${category}`} className="text-[15px] font-medium text-gray-700 hover:text-red-500" onClick={handleLinkClick}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/products" onClick={handleLinkClick}>Products</Link>
            <Link href="/about" onClick={handleLinkClick}>About Us</Link>
            <Link href="/contact" onClick={handleLinkClick}>Contact us</Link>
          </nav>
        </div>
      )} */}

      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white/60 backdrop-blur-md z-50 transition-all duration-300 ease-in-out">
          <div className="absolute top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 bg-transparent">

            <Link href="/">
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image src={logo} alt="Craft Spaces Logo" fill className="object-contain" />
                </div>
                <h1 className="text-xl font-semibold whitespace-nowrap">
                  <span style={{ color: "#ED5858" }}>CRAFT</span>{" "}
                  <span className="text-gray-700">SPACES</span>
                </h1>
              </div>
            </Link>

            {/* Close Button */}
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700 z-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col space-y-6 px-6 pt-24 text-gray-800 text-lg">
            {/* <Link href="/architecture" onClick={handleLinkClick}>Architecture</Link>  */}
            <div>
              <button onClick={() => setIsMenuOpen1(!isMenuOpen2)} className="w-full text-left">Architecture</button>
              {isMenuOpen1 && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {["Residential", "Commercial", "Hospitality", "Recreational"].map((category) => (
                    <Link key={category} href={`/architecture?category=${category}`} className="text-[15px] font-medium text-gray-700 hover:text-red-500" onClick={handleLinkClick}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setIsMenuOpen2(!isMenuOpen2)} className="w-full text-left">Industrial Design</button>
              {isMenuOpen1 && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {["steel", "chemical", "pharma", "textile", "food"].map((category) => (
                    <Link key={category} href={`/industrial?category=${category}`} className="text-[15px] font-medium text-gray-700 hover:text-red-500" onClick={handleLinkClick}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/products" onClick={handleLinkClick}>Products</Link>
            <Link href="/about" onClick={handleLinkClick}>About Us</Link>
            <Link href="/contact" onClick={handleLinkClick}>Contact us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopNav;
