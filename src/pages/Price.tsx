import React from 'react';

const Price: React.FC = () => (
  <div className="py-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Video Production Pricing</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Sample pricing cards */}
      {[{
        title: 'Starter', price: '₹75,000', features: ['1 Day Shoot', '60s Edit', 'Script & Direction'] },
        { title: 'Advanced', price: '₹1,50,000', features: ['2 Days', '2 Versions', 'Voice & Location'] },
        { title: 'Campaign', price: '₹3,50,000+', features: ['3–5 Films', 'Brand Strategy', 'Storyboard'] }
      ].map((pkg) => (
        <div key={pkg.title} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
          <div className="text-2xl font-bold mb-4">{pkg.price}</div>
          <ul className="mb-4">
            {pkg.features.map(f => <li key={f}>• {f}</li>)}
          </ul>
          <a href="/contact" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold">Enquire</a>
        </div>
      ))}
    </div>
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="mb-4"><strong>How much will the video cost?</strong><br />It depends on your needs. We offer transparent, fixed pricing.</div>
      <div className="mb-4"><strong>Are there hidden costs?</strong><br />No, our pricing is clear and upfront.</div>
      <div className="mb-4"><strong>What if I'm not sure what I want?</strong><br />We'll help you clarify your vision and guide you through the process.</div>
    </div>
  </div>
);

export default Price; 