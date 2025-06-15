import React from 'react';

const About: React.FC = () => (
  <div className="py-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
    <section className="mb-12 text-center">
      <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
      <p className="max-w-2xl mx-auto">A group of friends set out to make video production better—more creative, budget-friendly, and less stressful. We create custom videos for clients worldwide, turning simple ideas into powerful stories.</p>
    </section>
    <section className="mb-12 text-center">
      <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
      <ul className="max-w-xl mx-auto">
        <li>• Creativity</li>
        <li>• Collaboration</li>
        <li>• Transparency</li>
        <li>• On Time, On Budget</li>
      </ul>
    </section>
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {/* Placeholder team members */}
        {[{ name: 'Vaitahavya', role: 'CEO & Director' }, { name: 'Rudra', role: 'Content Head' }].map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow p-6 w-60">
            <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-neutral-dark">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About; 