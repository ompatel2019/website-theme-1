import React from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import ImageComponent from './ImageComponent'

const WhyChooseUs = ({bg, text, placeholderImg}) => {
  return (
    <Section bg={bg} text={text}>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 border-2">
          <SectionHeader 
            sectionName="Why Choose Us" 
            sectionHeader="Your Ultimate, Trusted Partner for Every Plumbing Repair and Installation"
            sectionDesc= "Experience unmatched expertise with our dedicated plumbing professionals. Our reliable team handles repairs and installations with precision, ensuring safety and efficiency every time. Committed to quality and customer satisfaction, we combine modern technology with years of industry know-how. Choose us for prompt, trusted service that transforms your plumbing challenges into smooth, worry-free solutions. Delivering excellence in every pipe and faucet repair, always."
          /> 

          <div>
            <ImageComponent
              src={placeholderImg}
              alt="Placeholder"
              width={480}
              height={480}
              className='rounded'
              loading='lazy'
            />
          </div>
        </div>
    </Section>
  )
}

export default WhyChooseUs