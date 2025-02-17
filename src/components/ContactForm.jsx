import React, { useState } from "react";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default page reload
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        // Show a success message or handle the success however you like
        setStatusMessage("Form submission successful!");
      })
      .catch((error) => {
        // Show an error message or handle the error
        setStatusMessage(`Form submission failed: ${error}`);
      });
  };

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="bg-blue-600"
      >
        {/* Required hidden input for Netlify form handling */}
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: 
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>

        {/* reCAPTCHA placeholder (injected by Netlify on deploy) */}
        <div className="field" data-netlify-recaptcha="true"></div>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      {/* Display success/error message */}
      {statusMessage && <p>{statusMessage}</p>}
    </>
  );
};

export default ContactForm;
