import Image, {StaticImageData} from 'next/image';
import React, {FC} from 'react';
import logo from '@/assets/logo.png';

interface TeamMemberProps {
  imageSrc: StaticImageData;
  quote: string;
  name: string;
  role: string;
}

const TeamMember: FC<TeamMemberProps> = (props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <Image src={props.imageSrc} alt={props.name} className="w-full h-auto object-cover rounded mb-3 pointer-events-none" priority />
      <p className="italic text-sm text-gray-600 px-2">"{props.quote}"</p>
      <p className="mt-1 font-semibold text-gray-600">{props.name}</p>
      <p className="text-xs text-gray-500">{props.role}</p>
    </div>
  );
}

export default TeamMember;
