'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  formTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formTitle,
  nameLabel,
  emailLabel,
  messageLabel,
  submitButton,
  successMessage,
  errorMessage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your actual keys from EmailJS
    const serviceID = 'service_4mv8ubf';
    const templateID = 'template_dev2xbn';
    const userID = 'J1davUN7pra_vysg2';

    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, userID)
      .then(() => {
        setStatus(successMessage);  // Use the success message prop
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
      }, () => {
        setStatus(errorMessage);  // Use the error message prop
      });
  };

  return (
    <div id="contact-form" className="relative pt-20">
    <div className="flex justify-center items-center min-h-screen bg-[#334498] p-10">
      <div className="contact-form-container w-full max-w-2xl p-12 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-[#334498] text-center mb-6">{formTitle}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-[#334498] text-lg font-medium">{nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 rounded-md border-2 border-[#b45309] focus:outline-none focus:ring-2 focus:ring-[#b45309]"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-[#334498] text-lg font-medium">{emailLabel}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 rounded-md border-2 border-[#b45309] focus:outline-none focus:ring-2 focus:ring-[#b45309]"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="message" className="block text-[#334498] text-lg font-medium">{messageLabel}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 rounded-md border-2 border-[#b45309] focus:outline-none focus:ring-2 focus:ring-[#b45309] h-32"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#334498] text-white font-semibold rounded-lg shadow-md border-2 border-[#b45309] transition duration-300 transform hover:bg-[#b45309] hover:text-[#fef3c7] hover:shadow-lg hover:scale-105 focus:outline-none"
          >
            {submitButton}
          </button>
        </form>

        {status && <div className="status-message mt-6 text-center text-lg font-semibold text-[#b45309]">{status}</div>}  {/* Display status message */}
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
