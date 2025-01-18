import React from 'react';
import blogImage from '../../images/blog2.webp';

import BlogHeader from './blogComponents/BlogHeader';
import BlogSubheading from './blogComponents/BlogSubheading';
import BlogSectionWrapper from './blogComponents/BlogSectionWrapper';
import BlogSectionSubheading from './blogComponents/BlogSectionSubheading';
import BlogText from './blogComponents/BlogText';

const Blog2 = ({ consistentLayout }) => {
  const blogTitle = 'The Impact of Web Design on User Experience and Conversions';

  // Intro
  const introHeader = 'Introduction';
  const introText = `
    Web design influences everything from brand perception to user engagement. 
    A well-crafted layout can reduce bounce rates and boost conversions, while 
    poorly structured sites drive visitors away. In this article, we examine how 
    layout, aesthetics, and overall user experience tie into conversion success.
  `;

  // Section 1
  const section1Heading = '1. First Impressions and Brand Perception';
  const section1Subhead1 = '1.1 Visual Appeal and Trust';
  const section1Text1 = `
    Users form opinions within seconds of arriving. Colors, fonts, and layout 
    cues establish trust (or distrust). Cohesive branding signals professionalism. 
    Clashing design elements or slow-loading banners can raise doubts about 
    product/service quality.
  `;
  const section1Subhead2 = '1.2 Reducing Bounce Rates';
  const section1Text2 = `
    High bounce rates often result from immediate disappointment or confusion. 
    Placing essential info above the fold and simplifying navigation helps visitors 
    find what they need. Quick, well-structured pages reduce friction and encourage 
    further exploration.
  `;

  // Section 2
  const section2Heading = '2. Usability and Navigation';
  const section2Subhead1 = '2.1 Logical Site Hierarchy';
  const section2Text1 = `
    Menus should use concise labels that map to your site's structure. For large sites, 
    mega menus or well-organized categories make deeper content accessible. 
    Use breadcrumbs to show users where they are in the hierarchy.
  `;
  const section2Subhead2 = '2.2 CTAs and Conversion Flow';
  const section2Text2 = `
    Thoughtfully placed call-to-action (CTA) buttons—like “Buy Now” or “Get Started”— 
    guide users to conversion points. Maintain consistent styling for CTAs, 
    ensuring visitors recognize clickable elements. 
    Each page should have a primary action goal, aligned with your conversion funnel.
  `;

  // Section 3
  const section3Heading = '3. Mobile Responsiveness';
  const section3Subhead1 = '3.1 Responsive Layouts';
  const section3Text1 = `
    Media queries allow elements to shift or resize for smaller screens. 
    Large touch targets (at least 44x44px) prevent accidental taps. 
    Use adaptive image sizes or <picture> elements to avoid overloading mobile users 
    with large files.
  `;
  const section3Subhead2 = '3.2 Performance on Mobile';
  const section3Text2 = `
    Mobile users often have slower connections. Minimize scripts, lazy-load 
    below-the-fold content, and optimize fonts. A site that feels seamless on mobile 
    fosters higher retention and trust, directly affecting conversions.
  `;

  // Section 4
  const section4Heading = '4. Visual Hierarchy and Readability';
  const section4Subhead1 = '4.1 Using Typography to Guide the Eye';
  const section4Text1 = `
    Consistent heading levels (H1, H2, H3) define content structure. 
    Contrasting font weights draw attention to key messages or CTAs. 
    White space—also known as negative space—prevents visual clutter and helps highlight 
    crucial elements.
  `;
  const section4Subhead2 = '4.2 Form Design and User Friction';
  const section4Text2 = `
    Forms are often the final step in conversions, such as signups or checkouts. 
    Keep them short and relevant. Label each field clearly, offer inline validation, 
    and avoid unnecessary data collection. Reducing form friction can significantly 
    improve completion rates.
  `;

  // Section 5
  const section5Heading = '5. Conversion-Focused Design Overall';
  const section5Subhead1 = '5.1 Trust Indicators and Social Proof';
  const section5Text1 = `
    Badges, testimonials, and case studies reassure visitors your brand is reliable. 
    Showcasing real customer reviews or industry awards can ease uncertainties. 
    When placed near CTAs, these elements often boost conversions.
  `;
  const section5Subhead2 = '5.2 Data-Driven Iterations';
  const section5Text2 = `
    Regularly test different design elements using A/B or multivariate tests. 
    Experiment with button colors, layouts, or headlines to see which variant yields 
    the best click-through or purchase rate. Data-driven refinement ensures 
    design evolves alongside user preferences.
  `;

  // Conclusion
  const conclusionHeader = 'Conclusion';
  const conclusionText = `
    Web design directly impacts how users perceive, explore, and ultimately convert 
    on your site. By focusing on usability, mobile responsiveness, visual clarity, 
    and trust elements, you’ll elevate user experience and encourage higher conversion rates. 
    Regular testing and iterative improvements keep your design aligned with 
    ever-evolving user expectations, ensuring you remain competitive in a crowded digital space.
  `;

  return (
    <section
      id='blog2'
      className={consistentLayout.section}
      aria-label={blogTitle}
    >
      <h1 className='h1 text-center'>{blogTitle}</h1>

      <img
        src={blogImage}
        alt={blogTitle}
        className="rounded-md my-4 w-full"
      />

      <div className='responsivePad space-y-8'>
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

export default Blog2;
