import React from 'react';
import {IconType} from 'react-icons';

interface DesignProcessItemProps {
  Icon: IconType;
  title: string;
  details: string[];
}

const DesignProcessItem: React.FC<DesignProcessItemProps> = (props) => {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="text-3xl text-red-500">
        <props.Icon />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-600">{props.title}</h3>
        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
          {props.details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesignProcessItem;
