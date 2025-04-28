import React from 'react'
import { useState } from 'react';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', telephone: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };
  return (
    <>
      <section id='Contact' className='h-screen flex justify-evenly items-center'>
        <div id='c-form' className="flex justify-center items-center w-1/2">
          <form onSubmit={handleSubmit} className=" p-8 rounded shadow-md w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded mt-1"
                  placeholder="Your name" required/>
              </div>

              <div>
                <label className="block text-gray-700">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded mt-1"
                  placeholder="Your email" required/>
              </div>

              <div>
                <label className="block text-gray-700">Telephone *</label>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full border p-2 rounded mt-1"
                  placeholder="Your phone number" required/>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Subject *</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full border p-2 rounded mt-1"
                placeholder="Subject" required/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message / Questions *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border p-2 rounded mt-1"
                placeholder="Input your message here" required/>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
            </div>
          </form>
        </div>

        <div id='c-details' className="bg-gray-100 p-6 w-2/5">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

          <div className="sub-section flex flex-col md:flex-row justify-evenly items-start md:items-center">
            {/* Store Address */}
            <div className="sub-section mb-6 md:mb-0 w-1/4">
              <h2 className="text-xl font-semibold">Visit Us:</h2>
              <p className="mt-2">Opto-Nik</p>
              <p>123 Main Street,</p>
              <p>NawabShah, Pakistan.</p>
            </div>

            {/* Phone Number */}
            <div className="sub-section mb-6 md:mb-0 w-1/4">
              <h2 className="text-xl font-semibold">Call Us:</h2>
              <p className="mt-2">Customer Service: 0123456789</p>
            </div>

            {/* Email */}
            <div className="sub-section mb-6 md:mb-0 w-1/4">
              <h2 className="text-xl font-semibold">Email Us:</h2>
              <p className="mt-2">General Inquiries: <a href="mailto:info@optonik.com" className="text-blue-500">info@optonik.com</a></p>
              <p>Support: <a href="mailto:support@optonik.com" className="text-blue-500">support@optonik.com</a></p>
            </div>
          </div>

          {/* Business Hours */}
          <div id='business' className="sub-section mt-10 ml-10">
            <h2 className="text-xl font-semibold">Business Hours:</h2>
            <ul className="mt-2">
              <li>Monday – Friday: 9:00 AM – 7:00 PM</li>
              <li>Saturday: 10:00 AM – 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div id='social-media' className="sub-section mt-10 ml-10">
            <h2 className="text-xl font-semibold">Stay Connected:</h2>
            <p className="mt-2">Follow us on social media for the latest updates, promotions, and trends!</p>
            {/* Add social media icons/links here if needed */}
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
