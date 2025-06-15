import React from 'react';

const Home: React.FC = () => (
  <div>
    {/* Hero Section */}
    <section className="py-20 text-center bg-neutral-light">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
        alt="Video production team at work"
        className="mx-auto mb-8 rounded-lg shadow-lg max-h-96 object-cover w-full max-w-4xl"
      />
      <h1 className="text-5xl font-bold mb-4">Cinematic Video Production That Moves Your Audience</h1>
      <p className="text-lg mb-8">We craft compelling stories for brands, events, and creatives—delivering videos that inspire, engage, and drive results.</p>
      <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold">Get a Free Consultation</a>
    </section>
    {/* About/Philosophy */}
    <section className="py-16 text-center">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        alt="Creative team collaborating"
        className="mx-auto mb-6 rounded-lg shadow max-h-64 object-cover w-full max-w-2xl"
      />
      <h2 className="text-3xl font-bold mb-2">Your Video Production Partner</h2>
      <p className="max-w-2xl mx-auto">At Sreedrisya Media, we believe every story deserves to be told with passion and precision. Our team blends creativity, technology, and strategy to deliver videos that truly connect with your audience.</p>
    </section>
    {/* Services Preview */}
    <section className="py-16 text-center bg-neutral-light">
      <img
        src="https://images.pexels.com/photos/2749371/pexels-photo-2749371.jpeg?auto=compress&w=800&q=80"
        alt="Video editing in progress"
        className="mx-auto mb-6 rounded-lg shadow max-h-64 object-cover w-full max-w-2xl"
      />
      <h2 className="text-3xl font-bold mb-2">Our Services</h2>
      <p className="max-w-xl mx-auto mb-6">From brand films and commercials to event coverage and social media content, we offer a full suite of video production services tailored to your needs.</p>
      <a href="/work" className="text-primary underline">See our work</a>
    </section>
    {/* Portfolio Preview */}
    <section className="py-16 text-center">
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
        alt="Portfolio preview - video camera on tripod"
        className="mx-auto mb-6 rounded-lg shadow max-h-64 object-cover w-full max-w-2xl"
      />
      <h2 className="text-3xl font-bold mb-2">Behold the Fruits of Our Work</h2>
      <p className="max-w-xl mx-auto mb-6">See how we've helped brands tell their stories through the power of video.</p>
      <a href="/work" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold">Our Portfolio</a>
    </section>
    {/* Testimonials Preview */}
    <section className="py-16 text-center bg-neutral-light">
      <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
      <blockquote className="max-w-xl mx-auto mb-6 italic text-neutral-dark">“Sreedrisya Media exceeded our expectations. The team was creative, professional, and delivered on time.”<br /><span className="not-italic font-semibold">— Anjali Menon, Client</span></blockquote>
    </section>
    {/* Contact CTA */}
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">Ready to bring your vision to life?</h2>
      <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold">Let's Talk</a>
    </section>
  </div>
);

export default Home; 