// pages/HomePage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Sections ───────────────────────────────────────────────────────────
import Hero from '../components/Hero';
import CTAMini from '../components/CTAMini';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';

// ─── Tools ───────────────────────────────────────────────────────────
import { BlurFade } from "@/components/magicui/blur-fade";

const HomePage = ({placeholderImg, services}) => {
  // ─── Schema for Home Page ──────────────────────────────────────────────
  const jsonLdHomePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Business Name: Description",
    "description": "Welcome to Business Name. Customize your homepage description here.",
    "url": "https://example.com/"
  };

  const stats = [ 
    {
      stat: "10",
      statType: "+",
      statDesc: "Years Experience"
    },
    {
      stat: "550",
      statType: "+",
      statDesc: "Clients Served"
    },
    {
      stat: "1100",
      statType: "+",
      statDesc: "Projects Completed"
    },
  ]

  return (
    <>
      <SeoHelmet
        title="Business Name: Description"
        description="Welcome to Business Name. Customize your homepage description here."
        jsonSchema={jsonLdHomePage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <BlurFade delay={0.15} inView>
        <CTAMini text="Book online and receive $50 off your first service"/>
        <Hero placeholderImg={placeholderImg}/>
      </BlurFade>

      <Stats stats={stats} bg="bg-primary" text="text-black"/>

      <Services bg="bg-black" text="text-white" services={services} isHome={true}/>
      <CTAMini text="Schedule Your Free Consultation Today"/>
      <WhyChooseUs bg="bg-black" text="text-white" placeholderImg={placeholderImg}/>
      <Projects />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default HomePage;
