import React, {FC} from 'react';
import Image, {StaticImageData} from 'next/image';

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  image2: StaticImageData;
  category: string;
  subcategory: string;
  link?: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const Wrapper = props.link ? 'a' : 'div';

  return (
    <Wrapper
      {...(props.link && {
        href: props.link,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="group block w-full h-64 perspective-1000"
    >
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-gpu group-hover:rotate-y-180 [transform-style:preserve-3d] shadow-md group-hover:shadow-lg rounded-2xl">
        
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <Image
            src={props.image}
            alt={`Product ${props.id}`}
            fill
            className="object-contain bg-white rounded-2xl"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-white">
          <Image
            src={props.image2}
            alt={`Product ${props.id} Preview`}
            fill
            className="object-contain bg-white rounded-2xl"
          />
        </div>

      </div>
    </Wrapper>
  );
};

export default ProductCard;