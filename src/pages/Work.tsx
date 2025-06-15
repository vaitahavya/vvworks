import React from 'react';

const Work: React.FC = () => (
  <div className="py-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Our Work</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Placeholder video cards */}
      {[1,2,3,4,5,6].map((n) => (
        <div key={n} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="w-full aspect-video bg-neutral-200 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Project Title {n}</h2>
          <p className="text-neutral-dark">Short description of the project.</p>
        </div>
      ))}
    </div>
  </div>
);

export default Work; 