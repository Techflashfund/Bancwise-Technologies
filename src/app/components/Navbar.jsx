// components/Navbar.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = ({ colors }) => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed w-full z-50 bg-white bg-opacity-80"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Screenshot 2025-03-12 150235.png"
            alt="BancWise Technologies Logo"
            width={180}
            height={50}
            priority
          />
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Home', 'Services', 'Solutions', 'About Us', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-navy font-medium hover:text-teal transition-colors duration-300"
              style={{ color: colors.navy }}
              whileHover={{ color: colors.teal, scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-full font-medium text-white shadow-md"
          style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
        >
          Get Started
        </motion.button>
        
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;