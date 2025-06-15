import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'BrandOne',
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="32" rx="8" fill="#E5E7EB" />
        <text x="50" y="20" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="sans-serif">BrandOne</text>
      </svg>
    ),
  },
  {
    name: 'BrandTwo',
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="32" rx="8" fill="#E5E7EB" />
        <text x="50" y="20" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="sans-serif">BrandTwo</text>
      </svg>
    ),
  },
  {
    name: 'BrandThree',
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="32" rx="8" fill="#E5E7EB" />
        <text x="50" y="20" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="sans-serif">BrandThree</text>
      </svg>
    ),
  },
  {
    name: 'BrandFour',
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="32" rx="8" fill="#E5E7EB" />
        <text x="50" y="20" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="sans-serif">BrandFour</text>
      </svg>
    ),
  },
  {
    name: 'BrandFive',
    svg: (
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="32" rx="8" fill="#E5E7EB" />
        <text x="50" y="20" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="sans-serif">BrandFive</text>
      </svg>
    ),
  },
];

const FeaturedClients: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="uppercase text-sm tracking-widest text-neutral-dark/60 font-semibold">Trusted By</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer bg-transparent rounded-lg p-2"
              title={logo.name}
            >
              {logo.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients; 