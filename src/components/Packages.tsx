import React from 'react';
import { motion } from 'framer-motion';
import Text from './Text';

const packages = [
  {
    title: 'Starter Brand Film',
    price: '₹75,000',
    features: [
      '1 Day Shoot',
      '60-second Edit',
      'Script & Direction',
      'Voiceover + Music',
      '4K Delivery',
    ],
    cta: 'Enquire Now',
  },
  {
    title: 'Advanced Brand Film',
    price: '₹1,50,000',
    features: [
      '2-Day Shoot',
      'Two Versions: 60 & 120 sec',
      'Concept, Voice, Location',
      '2 Reels (Cutdowns)',
    ],
    cta: 'Let\'s Talk',
  },
  {
    title: 'Campaign Film Pack',
    price: '₹3,50,000+',
    features: [
      '3–5 Short Films',
      'Reels + Brand Strategy',
      'Custom Score, Storyboard',
    ],
    cta: 'Schedule a Strategy Call',
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Text variant="h2" className="mb-4">Video Production Packages</Text>
          <Text variant="body" className="max-w-2xl mx-auto text-neutral-dark">
            Choose the package that fits your vision and budget. All packages include end-to-end production and creative support.
          </Text>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-light rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-neutral-200"
            >
              <Text variant="h3" className="mb-2 text-primary">{pkg.title}</Text>
              <div className="text-3xl font-bold text-neutral-dark mb-4">{pkg.price}</div>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center text-neutral-dark">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-semibold shadow"
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages; 