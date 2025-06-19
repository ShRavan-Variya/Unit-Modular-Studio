import Image from 'next/image';
import React, {FC} from 'react';
import logo from '@/assets/logo.png';

const AboutDetails: FC<any> = (props) => {
  return (
    <div className="mx-auto text-justify text-gray-800 leading-relaxed px-4 mb-12">
      <h2 className="text-xl font-bold text-center mb-4">ABOUT US</h2>
      <p>
        <strong>CRAFT SPACES</strong> multidisciplinary Architecture, Interior & Landscape Firm founded in 2017. <strong>Ar. Sudhanshu Yande</strong> & <strong>Ar. Abhishek Dukane</strong> are the joint Principal Architects of Craft Spaces with a team of 10 people.
      </p>
      <br />
      <p>
        Our firm works on multi-scale projects with various organizations—from private clients to corporates. This allows us to experiment and diversify work, including architecture & interior projects, row houses, residences, commercial offices, and institutional and hospitality projects.
      </p>
      <br />
      <p>
        Craft Spaces’ design approach is to reconnect architecture with nature, making optimum use of space, natural material, and lighting to reinvent and transform living environments and urban spaces.
      </p>
      <br />
      <p>
        We strive to create inspiring designs for each project, regardless of size or scale, understanding architecture’s power to influence lifestyle and society. Our forte is attention to detail.
      </p>
      <br />
      <p>
        Honesty in design, client satisfaction, and sustainability are the driving forces behind our constant exploration. We are dedicated to balancing functionality and aesthetics, context, climate, material, cost, and timeframe in every project.
      </p>
      <br />
      <p>
        Principals are registered architects with the Council of Architecture and the Maharashtra Industrial Development Corporation.
      </p>
    </div>
  );
}

export default AboutDetails;
