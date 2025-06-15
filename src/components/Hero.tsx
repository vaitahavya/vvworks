import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Text from './Text';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="w-full h-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/sHGxNxInifk?autoplay=1&mute=1&loop=1&playlist=sHGxNxInifk&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="Showreel Background"
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
        </div>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/80 to-neutral-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Text
            variant="h1"
            color="white"
            className="mb-6 text-5xl md:text-7xl font-display font-bold"
          >
            Visual Storytelling That <span className="text-primary">Moves</span> People
          </Text>
          
          <Text
            variant="body"
            color="white"
            className="mb-12 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We create cinematic content that connects with your audience and drives results
          </Text>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '#portfolio'}
            >
              View Our Work
            </Button>
            <Button
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '#contact'}
            >
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 