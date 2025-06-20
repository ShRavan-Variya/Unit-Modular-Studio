import Image from 'next/image';
import React, {FC} from 'react';
import logo from '@/assets/logo.png';

const TopBrandSection: FC<any> = (props) => {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center items-center mb-4">
        <div className="relative w-24 h-24">
          <Image src={logo} alt="Craft Spaces Logo" fill className="object-contain pointer-events-none" priority />
        </div>
      </div>
      <h1 className="text-2xl font-normal whitespace-nowrap">
        <span style={{ color: "#ED5858" }} className="font-semibold">CRAFT</span>{" "}
        <span className="text-gray-500">SPACES</span>
      </h1>
      <p className="text-gray-700 text-sm uppercase tracking-widest">
        <span className="mr-4">Architecture</span> | <span className="ml-4">Industrial design</span>
      </p>
    </div>
  );
}

export default TopBrandSection;
