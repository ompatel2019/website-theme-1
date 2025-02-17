import React, { useState } from "react";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

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
      })
      .catch((error) => {
        setStatusMessage(`Form submission failed: ${error}`);
      });
  };

  return (
    <div className="bg-orange-50 p-4">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        {/* Hidden input must match the form's name */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Optional honeypot field for spam protection */}
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="block my-2 p-2 border"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="block my-2 p-2 border"
        />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
          required
          className="block my-2 p-2 border"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Send a message
        </button>
      </form>
      {statusMessage && <p className="mt-4">{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
