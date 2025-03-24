import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Section from './Section';
import SectionHeader from './SectionHeader';

const AboutUs = () => {
  // Bullet points to display under the main description
  const features = [
    { text: 'Lorem ipsum dolor' },
    { text: 'Lorem ipsum dolor' },
    { text: 'Lorem ipsum dolor' },
    { text: 'Lorem ipsum dolor' },
    { text: 'Lorem ipsum dolor' },
    { text: 'Lorem ipsum dolor' },
  ];

  return (
    <Section bg="bg-black" text="text-white">
      {/* Outer container for overall width control */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 md:gap-8 sm:gap-6 gap-4 items-center">
          {/* Right Column: Text & Features */}
          <div>
            <SectionHeader
              // Subheading
              sectionName="About Us"
              // Main heading
              sectionHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              // Paragraph/description
              sectionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
            />
            
            {/* Feature List (Check Icons) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <i className="bi bi-check-circle-fill text-orange-500 mr-2 text-xl"></i>
                  <span className="text-base sm:text-md">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Left Column: Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 md:h-[400px] bg-gray-200 flex items-center justify-center">
              {/* You can replace this div with an actual <img> tag if you have a real image */}
              <span className="text-gray-500">[Image Placeholder]</span>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
