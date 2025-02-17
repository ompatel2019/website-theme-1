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
    <>
      <div>ContactForm</div>
      
      <div>
        {/*
          Contact Form Component - No Styling Version

          This form is configured for Netlify Forms.
          It includes:
            - A hidden input ("form-name") for Netlify to identify the form.
            - A honeypot field ("bot-field") for spam prevention.
            - Input fields for Name, Email, Number, and Message with aria-labels.
            - A reCAPTCHA placeholder (injected by Netlify on deployment).
            - AJAX submission handler that clears the status message after 3 seconds.
        */}
        <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
          {/* Hidden input required by Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field for spam prevention */}
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out: <input name="bot-field" aria-label="bot-field" />
            </label>
          </p>

          {/* Name field */}
          <div>
            <label htmlFor="name">Your Name:</label>
            <input id="name" type="text" name="name" aria-label="Your Name" required />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email">Your Email:</label>
            <input id="email" type="email" name="email" aria-label="Your Email" required />
          </div>

          {/* Number field */}
          <div>
            <label htmlFor="number">Your Number:</label>
            <input id="number" type="number" name="number" aria-label="Your Number" required />
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" aria-label="Message" required></textarea>
          </div>

          {/* reCAPTCHA placeholder - Netlify will inject the widget when deployed */}
          <div data-netlify-recaptcha="true"></div>

          {/* Submit button */}
          <div>
            <button type="submit">Send a message</button>
          </div>
        </form>

        {/* Display status message if it exists */}
        {statusMessage && <p>{statusMessage}</p>}
      </div>
      
    </>
  );
};

export default ContactForm;
