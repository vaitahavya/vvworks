import React from 'react';
import { motion } from 'framer-motion';
import Text from './Text';

const clientTypes = [
  {
    title: 'Businesses',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4a2 2 0 012-2h2a2 2 0 012 2v4m0 0h4m-4 0v-4a2 2 0 012-2h2a2 2 0 012 2v4m0 0h4m-4 0v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
      </svg>
    ),
    description: 'Corporate, retail, and startups seeking professional video solutions.'
  },
  {
    title: 'Creatives',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h3l9-9a2.121 2.121 0 00-3-3l-9 9v3zm0 0v3h3" />
      </svg>
    ),
    description: 'Artists, musicians, and influencers looking to tell their story.'
  },
  {
    title: 'Agencies',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V6a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" />
      </svg>
    ),
    description: 'Marketing, PR, and creative agencies needing video content for clients.'
  },
  {
    title: 'Events',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Conferences, weddings, and live events seeking memorable coverage.'
  },
  {
    title: 'Nonprofits',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 2.25 3 5 3 5s3-2.75 3-5c0-1.657-1.343-3-3-3z" />
      </svg>
    ),
    description: 'Charities and organizations amplifying their mission through video.'
  },
];

const ClientTypes: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Text variant="h2" className="mb-4">Who We Serve</Text>
          <Text variant="body" className="max-w-2xl mx-auto text-neutral-dark">
            We collaborate with a diverse range of clients, tailoring our video solutions to fit unique needs and goals.
          </Text>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {clientTypes.map((client, idx) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{client.icon}</div>
              <Text variant="h3" className="mb-2 text-primary">{client.title}</Text>
              <Text variant="body" className="text-neutral-dark">{client.description}</Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTypes; 