import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ImageComponent from './ImageComponent';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Clock, Award, Shield, ThumbsUp } from 'lucide-react';

const WhyChooseUs = ({ bg, text, placeholderImg }) => {
  const benefits = [
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for your urgent plumbing needs",
      icon: <Clock className="text-blue-500 flex-shrink-0" size={20} />
    },
    {
      title: "Licensed Professionals",
      description: "Fully certified experts with years of field experience",
      icon: <Award className="text-blue-500 flex-shrink-0" size={20} />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, detailed quotes before we start work",
      icon: <Shield className="text-blue-500 flex-shrink-0" size={20} />
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We're not happy until you're completely satisfied",
      icon: <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
    }
  ];

  return (
    <Section bg={bg} text={text}>
      <div className="container mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left column with image and floating badges - takes 2 columns */}
          <div className="relative order-2 lg:order-1 mx-auto lg:mx-0 lg:col-span-2">
            {/* Decorative background element */}
            <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-lg transform rotate-3 -translate-x-2 translate-y-2 opacity-20"></div>
            
            <div className="rounded-lg overflow-hidden shadow-2xl w-full max-w-md">
              <ImageComponent 
                src={placeholderImg} 
                alt="Professional plumber at work" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover rounded-lg" 
                loading="lazy" 
              />
            </div>
          
          </div>
          
          {/* Right column with content - takes 3 columns */}
          <div className="space-y-6 order-1 lg:order-2 lg:col-span-3">
            <SectionHeader 
              sectionName="Why Choose Us" 
              sectionHeader="Your Premier Plumbing Partner For Every Home Challenge"
              sectionDesc="We combine cutting-edge technology with decades of hands-on expertise to deliver plumbing solutions that stand the test of time."
            />
            
            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{benefit.title}</h3>
                      <p className="text-sm opacity-75">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Customer testimonial preview with improved styling */}
            <div className="bg-white bg-opacity-5 p-5 rounded-lg italic text-sm border-l-4 border-blue-500 mt-6 relative">
              <div className="absolute -top-3 -left-3 bg-blue-500 rounded-full p-1">
                <ThumbsUp size={14} className="text-white" />
              </div>
              "The team was professional, efficient, and solved our plumbing emergency in no time. Highly recommended!"
              <div className="mt-2 font-semibold text-blue-400">— Sarah Johnson, Homeowner</div>
            </div>
            
            {/* CTA button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to='/contact-us' className="flex-1">
                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group">
                  Schedule Your Call
                  <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;