import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-bold text-lg">Sreedrisya Media</span>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/#services" className="hover:text-primary transition-colors">Services</a>
          <a href="/#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a 
            href="https://instagram.com/sreedrisyamedia" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
          <a 
            href="https://facebook.com/sreedrisya" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook" 
            className="hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a 
            href="https://youtube.com/@sreedrisya" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube" 
            className="hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="4"/><polygon points="10 9 15 12 10 15 10 9"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 