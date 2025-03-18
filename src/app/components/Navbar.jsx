'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = ({ colors }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
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
          {['Home', 'Services', 'Why us', 'Our Team', 'Contact'].map((item) => (
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
          onClick={handleGetStartedClick}
        >
          Get Started
        </motion.button>
        
        <div className="md:hidden">
          {/* Mobile menu icon here if needed */}
        </div>
      </div>

      {/* Get Started Popup */}
      {showPopup && (
        <div className=" inset-0 flex items-center justify-center z-50">
          <motion.div 
            className="absolute inset-0 backdrop-blur-sm  bg-opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closePopup}
          />
          <motion.div 
            className=" rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={closePopup}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>Get Started with BancWise</h3>
            <p className="text-gray-600 mb-6">Choose an option below to begin your financial technology journey.</p>
            
            <div className="flex flex-col gap-4 mb-6">
              <a 
                href="#solutions" 
                onClick={(e) => {
                  handleNavClick(e, 'solutions');
                  closePopup();
                }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ border: `1px solid ${colors.blue}30` }}
              >
                <div className="rounded-full p-2" style={{ backgroundColor: `${colors.blue}15` }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.blue }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium" style={{ color: colors.navy }}>Explore Solutions</h4>
                  <p className="text-sm text-gray-500">Browse our financial technology solutions</p>
                </div>
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => {
                  handleNavClick(e, 'contact');
                  closePopup();
                }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ border: `1px solid ${colors.blue}30` }}
              >
                <div className="rounded-full p-2" style={{ backgroundColor: `${colors.teal}15` }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.teal }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium" style={{ color: colors.navy }}>Contact Sales</h4>
                  <p className="text-sm text-gray-500">Speak with our sales team</p>
                </div>
              </a>

              <a 
                href="mailto:demo@bancwise.com"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ border: `1px solid ${colors.blue}30` }}
              >
                <div className="rounded-full p-2" style={{ backgroundColor: `${colors.blue}15` }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.blue }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium" style={{ color: colors.navy }}>Request Demo</h4>
                  <p className="text-sm text-gray-500">See our solutions in action</p>
                </div>
              </a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-lg font-medium text-white"
              style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
              onClick={() => {
                window.location.href = "mailto:info@bancwise.com";
                closePopup();
              }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;