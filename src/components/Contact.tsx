import React, { useState } from 'react';

const projectTypes = [
  '',
  'Brand Film',
  'Corporate Video',
  'Event Coverage',
  'Product Video',
  'Social Media Content',
  'Other',
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Something went wrong.');
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setError('Could not send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-neutral-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-neutral-DEFAULT">
            Have a project in mind or want to collaborate? Fill out the form below and we'll get back to you soon.
          </p>
        </div>
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center text-2xl text-primary font-semibold">
            Thank you for your message!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6" aria-label="Contact form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
              className="border border-neutral-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              aria-label="Your Email"
              className="border border-neutral-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              required
              aria-label="Your Phone"
              className="border border-neutral-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
              aria-label="Project Type"
              className="border border-neutral-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            >
              <option value="" disabled>Select Project Type</option>
              {projectTypes.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              aria-label="Your Message"
              className="border border-neutral-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && <div className="text-red-600 text-sm" role="alert">{error}</div>}
            <button
              type="submit"
              className="bg-primary text-white font-semibold text-lg rounded-full px-8 py-3 shadow-lg hover:bg-primary-dark transition-colors duration-200"
              disabled={submitted}
              aria-label="Send Message"
            >
              Send Message
            </button>
          </form>
        )}
        {/* Social & Quick Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.72 11.06a6.5 6.5 0 10-11.44 6.11L3 21l3.93-1.29a6.5 6.5 0 009.79-8.65z"/><path d="M8.29 13.29a8.5 8.5 0 005.42 2.21c.34 0 .68-.02 1-.07"/></svg>
            WhatsApp
          </a>
          <a
            href="https://instagram.com/sreedrisyamedia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 