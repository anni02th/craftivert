import React, { useState } from 'react';

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setFormSubmitted(true);
        setFormData({
          name: data.get('name'),
          email: data.get('email'),
        });
        form.reset();
      })
      .catch((error) => alert('There was an error submitting the form. Please try again.'));
  };

  return (
    <div className="p-4 w-full">
      {!formSubmitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-[#a97eff1a] rounded-xl p-6 md:p-8 mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />

          <h2 className="text-2xl font-bold text-[#A97EFF] mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Let us know how we can help with your design needs. We're excited to
            collaborate!
          </p>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A97EFF] focus:border-[#A97EFF] sm:text-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A97EFF] focus:border-[#A97EFF] sm:text-sm"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium">
              What can we help you with?
            </label>
            <select
              name="subject"
              id="subject"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A97EFF] focus:border-[#A97EFF] sm:text-sm"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Website Design">Website Design</option>
              <option value="Website Redesign">Website Redesign</option>
              <option value="Branding & Logo Design">Branding & Logo Design</option>
              <option value="Graphic Design">
                Graphic Design (Print, Social Media, etc.)
              </option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A97EFF] focus:border-[#A97EFF] sm:text-sm"
              placeholder="Describe your project or issue in detail"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#A97EFF] text-white px-4 py-2 rounded-md hover:bg-[#8c62d8] focus:outline-none focus:ring-2 focus:ring-[#A97EFF] focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="bg-[#a97eff1a] rounded-xl p-6 md:p-8 mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#A97EFF] mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-4">
            Thank you, {formData.name}! We have received your message and will get back to you at {formData.email} shortly.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="mt-4 bg-[#A97EFF] text-white px-4 py-2 rounded-md hover:bg-[#8c62d8] focus:outline-none focus:ring-2 focus:ring-[#A97EFF] focus:ring-opacity-50"
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
