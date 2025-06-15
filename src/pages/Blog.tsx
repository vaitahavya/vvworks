import React from 'react';

const Blog: React.FC = () => (
  <div className="py-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Video Production Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[{
        title: 'Is Fiverr Video Editing Worth It?',
        excerpt: 'A look at the pros and cons of using Fiverr for your video editing needs.',
      }, {
        title: 'AI in Video Production',
        excerpt: 'How artificial intelligence is reinventing the video production process.',
      }, {
        title: 'Benefits of Video Production for Small Businesses',
        excerpt: 'Why every small business should invest in video content.',
      }].map((post, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="mb-4">{post.excerpt}</p>
          <a href="#" className="text-primary underline">Read more »</a>
        </div>
      ))}
    </div>
  </div>
);

export default Blog; 