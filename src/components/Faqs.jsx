import React from 'react'
import Section from './Section';
import SectionHeader from './SectionHeader';

const Faqs = () => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Another important question about our services?",
      answer:
        "Consequuntur harum ratione eveniet ab corrupti atque repellat, excepturi dolor commodi! Inventore consequuntur accusamus, quos illo aliquam quisquam tempora nulla!",
    },
    {
      question: "What if I have additional inquiries?",
      answer:
        "Feel free to contact our support team at any time. We aim to respond to all queries promptly and help you find the solution that's right for you!",
    },
    {
      question: "What if I have additional inquiries?",
      answer:
        "Feel free to contact our support team at any time. We aim to respond to all queries promptly and help you find the solution that's right for you!",
    },
    {
      question: "What if I have additional inquiries?",
      answer:
        "Feel free to contact our support team at any time. We aim to respond to all queries promptly and help you find the solution that's right for you!",
    },
    {
      question: "What if I have additional inquiries?",
      answer:
        "Feel free to contact our support team at any time. We aim to respond to all queries promptly and help you find the solution that's right for you!",
    },
  ];

  return (
    <Section bg="bg-black" text="text-white">
      <SectionHeader 
        sectionName="FAQs" 
        sectionHeader="Frequently Asked Questions"
        centre={true}
      />

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded bg-gray-50 p-4 text-gray-900"
            >
              <h2 className="font-medium">{faq.question}</h2>

              <svg
                className="size-5 shrink-0 shadow-sm transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export default Faqs;