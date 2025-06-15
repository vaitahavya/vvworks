import React from 'react';

const Contact: React.FC = () => (
  <div className="py-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
    <form className="bg-white rounded-lg shadow p-8 max-w-lg mx-auto mb-8 flex flex-col gap-6">
      <input type="text" placeholder="Your Name" className="border border-neutral-200 rounded-lg px-4 py-3 text-lg" />
      <input type="email" placeholder="Your Email" className="border border-neutral-200 rounded-lg px-4 py-3 text-lg" />
      <textarea placeholder="Your Message" rows={5} className="border border-neutral-200 rounded-lg px-4 py-3 text-lg" />
      <button type="submit" className="bg-primary text-white font-semibold text-lg rounded-full px-8 py-3 shadow-lg hover:bg-primary-dark transition-colors duration-200">Send Message</button>
    </form>
    <div className="text-center">
      <div className="mb-2">Phone: <a href="tel:+919999999999" className="text-primary">+91 99999 99999</a></div>
      <div className="mb-2">Email: <a href="mailto:info@sreedrisyamedia.com" className="text-primary">info@sreedrisyamedia.com</a></div>
      <div>Location: Kerala, India</div>
    </div>
  </div>
);

export default Contact; 