import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50 relative bg-black">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Construct AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;