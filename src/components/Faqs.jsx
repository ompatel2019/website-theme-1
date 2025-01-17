import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQs = ({ faqsSec, consistentLayout }) => {
  const faqs = [
    {
      question: "How do I know if a website is right for my company?",
      answer: "If you are a business looking to expand and scale, a website is the perfect solution. You can showcase your services to everyone on the internet and gain credibility, as consumers will see you as a more legitimate and accessible entity."
    },
    {
      question: "What technologies do you use to build websites?",
      answer: "We use modern and scalable technologies including HTML5, CSS3, JavaScript, and popular frameworks like React for frontend development. This ensures your website is efficient, responsive, and capable of evolving with your business."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "We have developed a variety of websites and follow a consistent website conversion funnel. We meticulously design each aspect to meet client expectations and ensure a solid, scalable foundation. Our goal is to achieve perfect scores in Google's Lighthouse audits which ensures a page is optimal and Google will rank it higher. With a responsive client, it would take a month or just under to get completely finished."
    },
    {
      question: "How does the subscription-based model work?",
      answer: "This model is extremely flexible as clients put $0 down for the website and pay $239 per month with a minimum 6-month contract. After that, it transitions to a month-to-month basis, allowing clients to leave the subscription at their discretion. This plan includes regular website updates to adapt to Google's search engine algorithms and 24/7 support, enabling unlimited edits to the website. It's ideal for clients who understand that achieving significant website performance and SEO rankings takes time and are patient with the process."
    },
    {
      question: "What is included in the website maintenance service?",
      answer: "Our maintenance service is absolutely free. Unlike generic website builders that often require subscriptions, our custom-coded solutions typically face fewer issues. Maintenance includes adding minor content, updating existing content, adding images, changing text, and adjusting colors. Please note, adding major sections or overhauls is not covered under the maintenance service and may incur additional costs."
    },
    {
      question: "How do updates to the website work?",
      answer: "Whenever you need to make changes to your website—such as updating content, modifying existing sections, or making minor adjustments—you can simply reach out to us. We'll implement the requested updates within 1-2 days, and often even within the same day. We understand that businesses require responsiveness, so we strive to ensure your website stays up-to-date and aligned with your evolving business needs."
    },
    {
      question: "How do you offer SEO services to improve my website's visibility?",
      answer: "We provide comprehensive SEO services tailored to your website. This includes on-page optimizations, keyword research, meta tag enhancements, and regular updates to align with the latest search engine algorithms. Our goal is to boost your website's ranking and drive sustainable organic traffic to your business. However, clients must note that this all won't work overnight, it is a gradual ascent because SEO rankings takes time and it is a patience game."
    }
  ];

  const subheading = "Your questions, answered."
  const [activeFaqIndex, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(prev => (prev === index ? null : index));
  };

  return (
    <section 
      id="faqs"
      className={consistentLayout.section}
      aria-label="faq-section"
    >
      <div className="md:text-center">
        <p className={`${consistentLayout.sectionClass}`}>
          {faqsSec}
        </p>
        <h3 className={`${consistentLayout.sectionSubheadingClass}`}>
          {subheading}
        </h3>
      </div>

      <div>
        {faqs.map((faq, faqIndex) => {
          const isActive = activeFaqIndex === faqIndex;
          return (
            <div 
              key={faqIndex}
              className="py-10 md:py-8 max-md:py-6 border-b-2 flex flex-col h6 space-y-4"
            >
              <div className="flex justify-between items-top max-md:items-center">
                {/* Convert the entire row into a button for better accessibility */}
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => toggleFaq(faqIndex)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${faqIndex}`}
                  aria-label={isActive ? `Collapse answer ${faqIndex + 1}` : `Expand answer ${faqIndex + 1}`}
                >
                  <h3>
                    {faqIndex + 1}. {faq.question}
                  </h3>
                </button>

                {/* Icon for toggling */}
                {isActive ? (
                  <FaMinus
                    onClick={() => toggleFaq(faqIndex)}
                    className="w-6 h-6 max-md:max-w-4 max-md:max-h-4 max-md:ml-2 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <FaPlus
                    onClick={() => toggleFaq(faqIndex)}
                    className="w-6 h-6 max-md:max-w-4 max-md:max-h-4 max-md:ml-2 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>

              {isActive && (
                <div
                  id={`faq-answer-${faqIndex}`}
                  className="text-gray-400"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default FAQs;
