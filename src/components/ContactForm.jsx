// ContactForm.jsx - With Styling Version

import React, { useState } from "react";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  // Clears the status message after 3 seconds
  const clearStatus = () => {
    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  };

  // Handle form submission via AJAX
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
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
    <div className="bg-gray-100 p-6 rounded shadow-md">
      {/*
        Contact Form Component - With Styling Version

        This form is configured for Netlify Forms.
        It includes:
          - A hidden input ("form-name") for Netlify to identify the form.
          - A honeypot field ("bot-field") for spam prevention.
          - Styled input fields for Name, Email, Number, and Message with aria-labels.
          - A reCAPTCHA placeholder (injected by Netlify on deployment).
          - AJAX submission handler that clears the status message after 3 seconds.
      */}
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Hidden input required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam prevention */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" aria-label="bot-field" />
          </label>
        </p>

        {/* Name field */}
        <div>
          <label htmlFor="name" className="block font-medium">
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            aria-label="Your Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block font-medium">
            Your Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            aria-label="Your Email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Number field */}
        <div>
          <label htmlFor="number" className="block font-medium">
            Your Number:
          </label>
          <input
            id="number"
            type="number"
            name="number"
            aria-label="Your Number"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Message field */}
        <div>
          <label htmlFor="message" className="block font-medium">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            aria-label="Message"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        {/* reCAPTCHA placeholder - Netlify will inject the widget when deployed */}
        <div data-netlify-recaptcha="true"></div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send a message
          </button>
        </div>
      </form>

      {/* Display status message if it exists */}
      {statusMessage && (
        <p className="mt-4 text-center text-green-600">{statusMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;
