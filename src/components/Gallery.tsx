import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface GalleryProps {
  images: {src: StaticImageData; alt: string}[];
}

const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <section className="px-4 pb-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">Project Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {props.images.map((img, index) => (
          <div key={index} className="break-inside-avoid">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto pointer-events-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
