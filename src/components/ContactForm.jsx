import React, { useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const clearStatus = () => {
    setTimeout(() => setStatusMessage(""), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", { method: "POST", body: formData })
      .then(() => {
        setStatusMessage("Form submission successful!");
        form.reset();
        clearStatus();
      })
      .catch((error) => {
        setStatusMessage(`Form submission failed: ${error}`);
        clearStatus();
      });
  };

  return (
    <Section bg="bg-black" text="text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side (Contact Info) */}
          <div className="">
            <SectionHeader
              sectionName="Contact"
              sectionHeader="Contact Us"
              sectionDesc="Please fill out the form below with your details. Our team will contact you promptly to discuss your plumbing needs and arrange a service that fits your schedule. We're here to assist with any issues, ensuring a quick and efficient resolution."
              centre={false}
            />

            <ul className="mt-6 space-y-5 text-white-300">
              <li className="flex items-center">
                <i className="bi bi-envelope-fill mr-3 text-xl"></i>
                plumbing@lightwatergroup.com.au
              </li>
              <li className="flex items-center">
                <i className="bi bi-geo-alt-fill mr-3 text-xl"></i>
                Sydney, NSW
              </li>
              <li className="flex items-center">
                <i className="bi bi-telephone-fill mr-3 text-xl"></i>
                0432 147 251
              </li>
            </ul>
          </div>

          {/* Right Side (Form) */}
          <div className="bg-[#3f3f3f] rounded-xl text-white shadow-xl md:p-8 sm:p-6 p-6 font-supreme">
            <h2 className="text-3xl font-bold font-supreme-bold h4">
              Claim $50 Off Your First Service
            </h2>

            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: "none" }}>
                <input name="bot-field" />
              </p>

              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full py-4 px-2 placeholder-white bg-transparent border-b-2 border-white outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full py-4 px-2 placeholder-white bg-transparent border-b-2 border-white outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                className="w-full py-4 px-2 placeholder-white bg-transparent border-b-2 border-white outline-none"
              />

              <textarea
                name="message"
                placeholder="Inquiry*"
                required
                className="w-full py-4 px-2 placeholder-white bg-transparent border-b-2 border-white outline-none h-32 resize-none"
              />

              <div data-netlify-recaptcha="true"></div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-4 rounded-lg hover:bg-white-800 transition duration-200"
              >
                Send Inquiry
              </button>

              {statusMessage && (
                <div className="mt-4 text-center font-semibold text-black">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
