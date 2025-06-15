import React from 'react';
import { motion } from 'framer-motion';
import Text from './Text';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Text variant="h2" className="mb-6">Our Philosophy</Text>
          <Text variant="body" className="mb-8 text-neutral-dark">
            We believe every story deserves to be told with passion, creativity, and precision. Our approach is rooted in collaboration, innovation, and a relentless pursuit of excellence. From concept to final cut, we partner with you to craft videos that inspire, engage, and make an impact.
          </Text>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex-1 bg-neutral-light rounded-lg p-6 shadow-sm">
              <Text variant="h3" className="mb-2 text-primary">Collaboration</Text>
              <Text variant="body" className="text-neutral-dark">We work closely with our clients, valuing your input at every stage to ensure your vision comes to life.</Text>
            </div>
            <div className="flex-1 bg-neutral-light rounded-lg p-6 shadow-sm">
              <Text variant="h3" className="mb-2 text-primary">Creativity</Text>
              <Text variant="body" className="text-neutral-dark">We push creative boundaries, blending artistry and technology to deliver unique, memorable content.</Text>
            </div>
            <div className="flex-1 bg-neutral-light rounded-lg p-6 shadow-sm">
              <Text variant="h3" className="mb-2 text-primary">Excellence</Text>
              <Text variant="body" className="text-neutral-dark">We are committed to the highest standards in every project, ensuring quality and attention to detail from start to finish.</Text>
            </div>
          </div>
          <a
            href="#portfolio"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy; 