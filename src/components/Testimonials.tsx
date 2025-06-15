import React from 'react';

const testimonials = [
  {
    name: 'Anjali Menon',
    feedback: 'Sreedrisya Media captured our wedding beautifully. The team was professional and creative throughout!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Rahul Nair',
    feedback: 'Their corporate video helped us connect with our clients. Highly recommended for any business!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Varma',
    feedback: 'The documentary they produced for our NGO was moving and impactful. Thank you for telling our story!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-neutral-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-DEFAULT max-w-2xl mx-auto">
            Real stories from people we've worked with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-primary"
              />
              <p className="text-lg text-neutral-dark mb-4">“{t.feedback}”</p>
              <span className="font-semibold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 