import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Text from './Text';

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Video Production', href: '#video-production' },
      { label: 'Motion Graphics', href: '#motion-graphics' },
      { label: 'Animation', href: '#animation' },
      { label: 'Post Production', href: '#post-production' },
    ],
  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = [
  'home',
  'services',
  'portfolio',
  'about',
  'contact',
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Text variant="h3" color="white" className="font-bold">
            VideoPro
          </Text>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.label)}
                  className={`flex items-center space-x-1 py-2 hover:text-accent transition-colors ${item.href.replace('#','') === activeSection ? 'text-accent font-semibold' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <motion.div
                    initial="hidden"
                    animate={activeDropdown === item.label ? "visible" : "hidden"}
                    variants={dropdownVariants}
                    className="absolute left-0 mt-2 w-48 bg-white text-primary rounded-lg shadow-lg py-2 z-50"
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-accent hover:text-white transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.dropdown && toggleDropdown(item.label)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 