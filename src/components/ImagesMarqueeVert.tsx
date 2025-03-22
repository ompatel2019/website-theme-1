import React from 'react';
import { Marquee } from './magicui/marquee';
import ImageComponent from './ImageComponent';

interface ImagesMarqueeProps {
  placeholderImg: string;
  /** Optional custom height, e.g. "250px" or "50vh". */
  height?: string;
}

const images = [1, 2, 3, 4, 5];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

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
      className="rounded-md object-cover 2xl:w-[360px] 2xl:h-[400px] lg:w-[320px] lg:h-[340px] md:w-[240px] md:h-[280px] sm:w-[160px] sm:h-[200px]"
      loading="eager"
      priority={true}
    />
  </figure>
);

export function ImagesMarqueeVert({ placeholderImg, height }: ImagesMarqueeProps) {
  // Use a fallback if `height` wasn't passed
  const marqueeHeight = height || '700px';

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: marqueeHeight }}
    >
      <Marquee vertical className="[--duration:20s]">
        {firstRow.map((_, index) => (
          <ImageCard key={`first-${index}`} img={placeholderImg} />
        ))}
      </Marquee>

      <Marquee vertical reverse className="[--duration:20s]">
        {secondRow.map((_, index) => (
          <ImageCard key={`second-${index}`} img={placeholderImg} />
        ))}
      </Marquee>

      {/* Optional gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 from-background"></div>
    </div>
  );
};

export default ImagesMarqueeVert;
