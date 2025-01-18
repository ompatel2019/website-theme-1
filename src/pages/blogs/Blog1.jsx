import React from 'react';
import blogImage from '../../images/blog1.webp';

// Subcomponents
import BlogHeader from './blogComponents/BlogHeader';
import BlogSubheading from './blogComponents/BlogSubheading';
import BlogSectionWrapper from './blogComponents/BlogSectionWrapper';
import BlogSectionSubheading from './blogComponents/BlogSectionSubheading';
import BlogText from './blogComponents/BlogText';

const Blog1 = ({ consistentLayout }) => {
  const blogTitle = 'The Ultimate Guide to Optimising Your Website for 2025';

  // -- Intro
  const introHeader = 'Introduction';
  const introText = `
    As we approach 2025, website optimization continues to evolve at a rapid pace. 
    AI-driven algorithms demand high-quality, context-rich content, while user expectations 
    for speed, security, and personalized experiences keep rising. This guide explores 
    essential strategies to optimize both your front-end (what users see) and your back-end 
    (what search engines and browsers require). By staying proactive, you can ensure your 
    site remains relevant and high-performing well into 2025.
  `;

  // =============== Section 1
  const section1Heading = '1. Core Web Vitals and Technical Foundations';
  const section1Subhead1 = '1.1 Understanding LCP, FID, CLS';
  const section1Text1 = `
    Core Web Vitals are crucial ranking signals focusing on:
    - Largest Contentful Paint (LCP): How quickly main content is rendered.
    - First Input Delay (FID): How responsive your site is to user interactions.
    - Cumulative Layout Shift (CLS): How stable your layout remains while loading.
    By optimizing these metrics—using a CDN, minifying scripts, and compressing images—
    you’ll deliver faster, more stable user experiences. 
  `;
  const section1Subhead2 = '1.2 Server and Hosting Optimizations';
  const section1Text2 = `
    Server-side improvements can drastically reduce TTFB (Time To First Byte). 
    Employ server caching, use HTTP/2 or HTTP/3, and enable SSL certificates for better 
    security and user trust. Investing in robust hosting with SSD storage and auto-scaling 
    capabilities can help your site handle traffic spikes without performance dips.
  `;

  // =============== Section 2
  const section2Heading = '2. Mobile-First Design and Accessibility';
  const section2Subhead1 = '2.1 Mobile Usability';
  const section2Text1 = `
    Mobile devices account for the majority of global web traffic. Ensure fluid layouts, 
    legible fonts, and tap-friendly buttons. Also consider mobile-specific features 
    like click-to-call functionality, location-aware content, and optimized media queries 
    to reduce load times on slower connections.
  `;
  const section2Subhead2 = '2.2 Accessibility Standards';
  const section2Text2 = `
    Meeting WCAG guidelines (e.g., text contrast, alt attributes, keyboard navigation) 
    improves usability for everyone. Use semantic HTML tags—<header>, <nav>, <main>, <footer>— 
    so assistive technologies can parse your content effectively. Color contrast checkers 
    and screen reader testing are essential to uncover hidden barriers.
  `;

  // =============== Section 3
  const section3Heading = '3. On-Page SEO and Content Strategy';
  const section3Subhead1 = '3.1 High-Quality, Context-Rich Content';
  const section3Text1 = `
    Google’s AI-driven search algorithms can detect keyword stuffing and superficial content. 
    Instead, produce in-depth articles that address user intent comprehensively. 
    Incorporate synonyms and related terms naturally to give search engines a fuller picture 
    of your page’s topic. 
  `;
  const section3Subhead2 = '3.2 Meta Tags, Headings, and Internal Linking';
  const section3Text2 = `
    Well-crafted title tags and meta descriptions entice clicks from SERPs. 
    Logical heading structures (H1, H2, H3) guide both users and search engines. 
    Internal links with descriptive anchor text help visitors explore related content 
    and improve crawlability. Group related pages into thematic clusters for clarity.
  `;

  // =============== Section 4
  const section4Heading = '4. Performance Testing and Monitoring';
  const section4Subhead1 = '4.1 Lighthouse and PageSpeed Insights';
  const section4Text1 = `
    Run regular audits using Google’s Lighthouse or PageSpeed Insights to track LCP, FID, and CLS, 
    as well as accessibility and SEO best practices. Achieving near-perfect scores is good, 
    but real-world user data (collected via the Chrome User Experience Report) often 
    paints a more accurate picture of performance.
  `;
  const section4Subhead2 = '4.2 Real User Monitoring';
  const section4Text2 = `
    Beyond synthetic tests, tools like New Relic or Datadog provide real user monitoring (RUM) 
    data, measuring actual load times on various devices and network conditions. These insights 
    help prioritize which pages or elements need the most urgent optimization.
  `;

  // =============== Section 5
  const section5Heading = '5. Future-Proofing and Continuous Updates';
  const section5Subhead1 = '5.1 Emerging Technologies';
  const section5Text1 = `
    Keep an eye on Progressive Web Apps (PWAs), voice search integration, and AI-driven 
    personalization. Users increasingly expect app-like features in the browser, 
    real-time chat assistance, and context-aware recommendations. 
  `;
  const section5Subhead2 = '5.2 Regular Content Refreshes';
  const section5Text2 = `
    Outdated information can hurt credibility. Schedule periodic audits of older posts 
    and landing pages, updating facts, stats, or visuals to remain authoritative. 
    Regularly patch and update your CMS and plugins to prevent security vulnerabilities 
    and maintain performance.
  `;

  // Conclusion
  const conclusionHeader = 'Conclusion';
  const conclusionText = `
    Optimizing for 2025 means mastering Core Web Vitals, embracing mobile and accessibility, 
    and crafting content that resonates with both search engines and real people. 
    Keep testing your site’s performance, stay informed about algorithm shifts, 
    and adopt new tech that enhances user experiences. 
    By combining technical excellence with user-centric design, 
    you’ll position your website for sustainable success well into the future.
  `;

  return (
    <section 
      id='blog1'
      className={consistentLayout.section}
      aria-label={blogTitle}
    >
      {/* Blog Title */}
      <h1 className='h1 text-center'>{blogTitle}</h1>

      {/* Blog Image */}
      <img
        src={blogImage}
        alt={blogTitle}
        className="rounded-md my-4 w-full"
      />

      <div className='responsivePad space-y-8 '>
        {/* Intro */}
        <BlogSectionWrapper>
          <BlogHeader blogHeader={introHeader} />
          <BlogText blogText={introText} />
        </BlogSectionWrapper>

        {/* Section 1 */}
        <BlogSubheading blogSubheading={section1Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section1Subhead1} />
          <BlogText blogText={section1Text1} />
          <BlogSectionSubheading blogSectionSubheading={section1Subhead2} />
          <BlogText blogText={section1Text2} />
        </BlogSectionWrapper>

        {/* Section 2 */}
        <BlogSubheading blogSubheading={section2Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section2Subhead1} />
          <BlogText blogText={section2Text1} />
          <BlogSectionSubheading blogSectionSubheading={section2Subhead2} />
          <BlogText blogText={section2Text2} />
        </BlogSectionWrapper>

        {/* Section 3 */}
        <BlogSubheading blogSubheading={section3Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section3Subhead1} />
          <BlogText blogText={section3Text1} />
          <BlogSectionSubheading blogSectionSubheading={section3Subhead2} />
          <BlogText blogText={section3Text2} />
        </BlogSectionWrapper>

        {/* Section 4 */}
        <BlogSubheading blogSubheading={section4Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section4Subhead1} />
          <BlogText blogText={section4Text1} />
          <BlogSectionSubheading blogSectionSubheading={section4Subhead2} />
          <BlogText blogText={section4Text2} />
        </BlogSectionWrapper>

        {/* Section 5 */}
        <BlogSubheading blogSubheading={section5Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section5Subhead1} />
          <BlogText blogText={section5Text1} />
          <BlogSectionSubheading blogSectionSubheading={section5Subhead2} />
          <BlogText blogText={section5Text2} />
        </BlogSectionWrapper>

        {/* Conclusion */}
        <BlogSectionWrapper>
          <BlogHeader blogHeader={conclusionHeader} />
          <BlogText blogText={conclusionText} />
        </BlogSectionWrapper>
      </div>


    </section>
  );
};

export default Blog1;
