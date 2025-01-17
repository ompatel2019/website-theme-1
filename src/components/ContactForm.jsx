import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

/**
 * Contact Form
 */
const ContactForm = ({ contactForm, consistentLayout }) => {
  const contacts = [
    {
      icon: FaPhoneAlt,
      contactType: "Phone",
      contactInformation: '0490536019',
      contactRedirect: 'tel:0490536019'
    },
    {
      icon: MdEmail,
      contactType: "Email",
      contactInformation: 'bytesites@info.com',
      contactRedirect: 'mailto:bytesites@info.com',
    },
    {
      icon: FaLocationDot,
      contactType: "Areas Served",
      contactInformation: 'Sydney, NSW',
    }
  ];

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "4137160f-72eb-4e4a-983e-07995f90140f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error submitting form:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  const subheading = "Websites Starting at $0 Down and $239 per month. Money back guaranteed if you don’t want to continue.";
  const formSubheading = "You’ve got ideas? We have the skills to convert them. Let’s put the pen to paper!";

  return (
    <section
      id="contact"
      className={consistentLayout.section}
      aria-label="Contact Section"
    >
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-8">
        
        {/* LEFT: Contact Info */}
        <div className="space-y-4 lg:space-y-8 flex flex-col justify-between 2xl:w-[115%]">
          <p className={consistentLayout.sectionClass}>
            {contactForm.toUpperCase()}
          </p>
          <h2
            className={`${consistentLayout.sectionSubheadingClass}`}
            style={{ marginBottom: '1rem' }}
          >
            {subheading}
          </h2>

          <div className="flex flex-col gap-8 2xl:flex-row">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} className="flex space-x-4 items-center">
                  <Icon className="w-8 h-8" aria-hidden="true" /> 
                  <div className="flex flex-col">
                    <h3 className="h6 font-semibold">
                      {contact.contactType.toUpperCase()}
                    </h3>
                    {contact.contactRedirect ? (
                      <a
                        className="hover:underline"
                        href={contact.contactRedirect}
                        rel="noopener noreferrer"
                        aria-label={`Go to ${contact.contactType}`}
                      >
                        {contact.contactInformation}
                      </a>
                    ) : (
                      <p>{contact.contactInformation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="p-8 bg-c2-0 rounded-xl space-y-4 flex flex-col justify-around max-md:p-6 2xl:w-[75%] ml-auto 2xl:p-10">
          <h4 className="h5 font-questrial mb-4">{formSubheading}</h4>

          <form
            onSubmit={onSubmit}
            className="space-y-4 text-base"
            method="POST"
            aria-label="Contact Form"
          >
            {/* NAME + EMAIL */}
            <div className="lg:flex gap-4 max-lg:space-y-4">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="mb-1">
                  Full Name <span className="sr-only">(required)</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-c4-0 border-2 rounded-md py-2 px-4 transition-all hover:pl-8"
                  required
                  autoComplete="name"
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="mb-1">
                  Email <span className="sr-only">(required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full bg-transparent border-c4-0 border-2 rounded-md py-2 px-4 transition-all hover:pl-8"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1">
                Phone <span className="sr-only">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="123456789"
                className="w-full bg-transparent border-c4-0 border-2 rounded-md px-4 py-2 transition-all hover:pl-8"
                autoComplete="tel"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">
                Message <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="
                  2xl:p-3
                  bg-transparent
                  rounded-md
                  border-2
                  border-c4-0
                  py-2
                  px-4
                  w-full
                  text-c4-0
                  text-base
                  transition-all
                  hover:pl-8
                "
                placeholder="I'd love a blueprint for my business!"
                rows={8}
                required
                autoComplete="off"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div
              className="
                turnParent
                flex
                p-2
                rounded-lg
                bg-c1-0
                px-4
                items-center
                space-x-1
                text-base
                transition-all
                hover:bg-c3-0
                hover:px-8
                w-full
                justify-center
                p
              "
            >
              <button
                type="submit"
                aria-label="Submit contact form"
                className="focus:outline-none"
              >
                Get Started
              </button>
              <MdArrowOutward
                className="turn transition-all"
                aria-hidden="true"
              />
            </div>
          </form>

          {/* Submission Feedback */}
          {result && (
            <p className="text-sm mt-2" role="status" aria-live="polite">
              {result}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
