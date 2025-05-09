import React, {FC} from 'react';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  subtitle: string;
  mainImage: StaticImageData;
  icon: StaticImageData;
  previewImage: StaticImageData;
  description: string;
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
  const slug = props.title.replace(/\s+/g, '-').toLowerCase();

  return (
    <Link href={`/projects/${slug}`}>
      <div className="relative group flex items-start space-x-5">
        <div className="w-40 text-right pt-3 shrink-0 relative overflow-hidden">
          {/* Animated Image on Hover */}
          <div className="relative ml-auto overflow-hidden transition-all duration-700 ease-in-out h-0 group-hover:h-16 w-16 transform translate-x-20 group-hover:translate-x-0">
            <Image
              src={props.icon}
              alt="Small Hover Image"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-md"
            />
          </div>

          {/* Title and Subtitle */}
          <h2 className="text-md text-gray-700 font-semibold mt-2">{props.title}</h2>
          <p className="text-sm text-gray-400 mt-1">{props.subtitle}</p>
        </div>
  
        <div className="relative group w-full max-w-[500px] min-h-[350px] perspective-1000">
          <div className="relative w-full h-[350px] transition-transform duration-700 ease-in-out transform-gpu group-hover:rotate-y-180 [transform-style:preserve-3d] shadow-md group-hover:shadow-lg rounded-xl">
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl shadow-md">
              <Image
                src={props.mainImage}
                alt={props.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
            
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl flex flex-col items-center justify-center p-6 shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
              <div className="relative flex-1 w-full">
                <Image
                  src={props.previewImage}
                  alt="Preview"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-xl"
                />
              </div>
              <p className="text-sm text-gray-600 text-center max-w-full mt-4">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;