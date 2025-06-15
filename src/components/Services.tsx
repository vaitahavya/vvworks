import React from 'react';
import { motion } from 'framer-motion';
import Text from './Text';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: ServiceCard[] = [
  {
    title: "Video Production",
    description: "Professional video production services for businesses, events, and creative projects.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Corporate Videos",
      "Event Coverage",
      "Product Showcases",
      "Brand Stories"
    ]
  },
  {
    title: "Motion Graphics",
    description: "Engaging motion graphics and animations to bring your message to life.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Logo Animations",
      "Title Sequences",
      "Infographics",
      "Social Media Content"
    ]
  },
  {
    title: "Post Production",
    description: "Professional editing, color grading, and sound design services.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      "Video Editing",
      "Color Grading",
      "Sound Design",
      "Visual Effects"
    ]
  }
];

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="mb-4">Our Services</Text>
          <Text variant="body" className="max-w-2xl mx-auto text-neutral-dark">
            We offer comprehensive video production services to help bring your vision to life.
            From concept to final delivery, we handle every aspect of your project.
          </Text>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <Text variant="h3" className="mb-4">{service.title}</Text>
              <Text variant="body" className="text-neutral-dark mb-6">
                {service.description}
              </Text>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-neutral-dark">
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 mb-16"
        >
          <Text variant="h2" className="mb-8 text-center">How We Work</Text>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 z-0" style={{ transform: 'translateY(-50%)' }} />
              {[
                {
                  label: 'Script',
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-8-4h8M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" /></svg>
                  ),
                },
                {
                  label: 'Shoot',
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" /></svg>
                  ),
                },
                {
                  label: 'Edit',
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2m-1 0v14m-7-7h14" /></svg>
                  ),
                },
                {
                  label: 'Deliver',
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6a2 2 0 002-2v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                  ),
                },
              ].map((step, idx, arr) => (
                <div key={step.label} className="relative z-10 flex flex-col items-center flex-1">
                  <div className="bg-white rounded-full shadow-lg p-4 mb-2 border-2 border-primary">
                    {step.icon}
                  </div>
                  <span className="font-semibold text-primary mb-2">{step.label}</span>
                  {idx < arr.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 w-full h-1 bg-primary" style={{ left: '50%', width: '100%', zIndex: -1, transform: 'translateY(-50%)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Showreel Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
            <iframe
              src="https://www.youtube.com/embed/sHGxNxInifk?autoplay=1&mute=1&loop=1&playlist=sHGxNxInifk"
              title="Showreel"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors shadow-lg"
          >
            Book Your Video Project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 