import React from 'react';
import blogImage from '../../images/blog3.webp';

import BlogHeader from './blogComponents/BlogHeader';
import BlogSubheading from './blogComponents/BlogSubheading';
import BlogSectionWrapper from './blogComponents/BlogSectionWrapper';
import BlogSectionSubheading from './blogComponents/BlogSectionSubheading';
import BlogText from './blogComponents/BlogText';

const Blog3 = ({ consistentLayout }) => {
  const blogTitle = 'How to Measure the ROI of Your SEO Efforts';

  // Intro
  const introHeader = 'Introduction';
  const introText = `
    SEO can drive long-term growth, but measuring its financial impact 
    requires careful analysis. This blog provides a framework for tracking 
    organic traffic, ranking improvements, and revenue, so you can confidently 
    evaluate your SEO strategies and make data-driven decisions.
  `;

  // Section 1
  const section1Heading = '1. Defining Clear Goals and KPIs';
  const section1Subhead1 = '1.1 Identifying Primary Objectives';
  const section1Text1 = `
    Whether your priority is sales, lead generation, or brand visibility, 
    define your SEO goals accordingly. By establishing explicit targets—like 
    a 20% increase in monthly organic leads—you’ll have benchmarks to measure against.
  `;
  const section1Subhead2 = '1.2 Key Performance Indicators (KPIs)';
  const section1Text2 = `
    Common KPIs include organic traffic, conversion rates from search, 
    cost per lead (CPL), and average order value (AOV). Tie each KPI to 
    an overarching business objective. Tracking these indicators helps 
    quantify SEO ROI over time.
  `;

  // Section 2
  const section2Heading = '2. Tracking Organic Traffic and Rankings';
  const section2Subhead1 = '2.1 Google Analytics and Search Console';
  const section2Text1 = `
    Google Analytics shows how many users arrive via organic search. 
    Tag specific campaigns or landing pages to see which optimizations yield results. 
    Meanwhile, Search Console reveals keyword-level data and index coverage issues.
  `;
  const section2Subhead2 = '2.2 Third-Party Rank Trackers';
  const section2Text2 = `
    Tools like SEMrush or Ahrefs let you track keyword rankings over time. 
    Identify high-intent keywords driving revenue and monitor how position changes 
    correlate with new content or technical improvements.
  `;

  // Section 3
  const section3Heading = '3. Conversion and Revenue Attribution';
  const section3Subhead1 = '3.1 Setting Up Goals in Analytics';
  const section3Text1 = `
    Define Goals or Events for sign-ups, form submissions, or purchases. 
    Assign monetary values to these goals if possible (e.g., average lead 
    lifetime value). This links specific SEO-driven sessions to actual revenue.
  `;
  const section3Subhead2 = '3.2 E-commerce Tracking';
  const section3Text2 = `
    For online stores, integrate e-commerce tracking to see which transactions 
    originate from organic clicks. Subtract your SEO spend from total organic 
    revenue to gauge net gain. If your store has multiple channels, apply 
    multi-touch attribution models to see how SEO fits into the customer’s journey.
  `;

  // Section 4
  const section4Heading = '4. Time-to-Value Considerations';
  const section4Subhead1 = '4.1 SEO’s Long-Tail Results';
  const section4Text1 = `
    Unlike paid ads with immediate returns, SEO often has a lag. 
    It can take weeks or months to rank well for competitive terms. 
    Track incremental gains each month, and focus on consistent upward trends 
    rather than instant spikes.
  `;
  const section4Subhead2 = '4.2 Handling Seasonal Fluctuations';
  const section4Text2 = `
    Seasonal demand can skew data. Compare the same time periods year-over-year 
    to factor out holidays or industry trends. This approach clarifies whether 
    growth is truly from SEO improvements or routine seasonal changes.
  `;

  // Section 5
  const section5Heading = '5. Continuous Refinement and Reporting';
  const section5Subhead1 = '5.1 A/B Testing and Content Refreshes';
  const section5Text1 = `
    Once you spot successful tactics—like an article attracting significant 
    organic leads—replicate and refine them. Keep content fresh with updated stats, 
    new insights, or improved internal links to maintain relevance.
  `;
  const section5Subhead2 = '5.2 Stakeholder Reporting';
  const section5Text2 = `
    Monthly or quarterly reports help stakeholders see ROI. Include metrics like 
    traffic growth, conversions, and revenue linked to SEO. Highlight any 
    content or technical changes you made, illustrating the impact on key KPIs.
  `;

  // Conclusion
  const conclusionHeader = 'Conclusion';
  const conclusionText = `
    Measuring SEO ROI means combining traffic and ranking data with concrete 
    business outcomes like leads or revenue. By setting clear goals, attributing 
    conversions properly, and consistently refining strategies, you’ll 
    maximize the long-term value of SEO. While it requires patience, the 
    sustained gains in brand visibility, customer engagement, and profitability 
    are well worth the effort.
  `;

  return (
    <section
      id='blog3'
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

export default Blog3;
