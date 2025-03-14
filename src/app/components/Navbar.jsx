'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = ({ colors }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } }
  };

  // Handle smooth scrolling when clicking navigation items
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
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
            width={isMobile ? 180 : 250}
            height={isMobile ? 60 : 80}
            priority
            className="w-auto h-auto"
          />
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['Home', 'Services', 'Solutions', 'About Us', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase().replace(' ', '-'))}
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
          {/* You can keep the mobile menu icon here if needed, or remove it entirely */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;