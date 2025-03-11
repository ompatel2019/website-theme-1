import React from 'react';
import { cn } from '@/lib/utils';
import { Marquee } from './magicui/marquee';
import ImageComponent from './ImageComponent';
 
interface ImagesMarqueeProps {
    placeholderImg: string;
  }
  
  const images = [1, 2, 3, 4, 5];
  
  const firstRow = images.slice(0, images.length);
  
  interface ImageCardProp {
    img: string;
  }
  
  const ImageCard: React.FC<ImageCardProp> = ({ img }) => (
    <figure className="relative cursor-pointer rounded-md border bg-gray-50 dark:bg-gray-900">
      <ImageComponent
        src={img}
        alt="Placeholder"
        width={320}
        height={340}
        className="rounded-md object-cover sm:w-[320px] md:w-[400px] w-[240px]"
        loading='eager'
        priority={true}
      />
    </figure>
  );
 
 
export function ImagesMarqueeHor({ placeholderImg }: ImagesMarqueeProps) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:15s]">
      {firstRow.map((_, index) => (
          <ImageCard key={`first-${index}`} img={placeholderImg} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 from-background"></div>
    </div>
  );
}

export default ImagesMarqueeHor;