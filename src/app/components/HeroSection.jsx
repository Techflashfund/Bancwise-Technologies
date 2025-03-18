// components/HeroSection.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const HeroSection = ({ colors, heroControls, heroRef }) => {
  const [showPopup, setShowPopup] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const handleConsultationClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: colors.white }}>
      {/* Premium Background Emblem */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full scale-110">
          <div className="relative w-full h-full">
            <Image
              src="/MAINN.png" 
              alt="BancWise Background Emblem"
              layout="fill"
              objectFit="contain"
              className='opacity-70'
              
            />
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full" 
          style={{ background: `radial-gradient(circle, ${colors.teal}15 0%, transparent 70%)` }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full" 
          style={{ background: `radial-gradient(circle, ${colors.blue}10 0%, transparent 70%)` }}></div>
      </motion.div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 z-10">
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroControls}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
              style={{ color: colors.navy }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Elevating
              </motion.span>{" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
              >
                Financial Innovation
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-12 text-gray-700 mx-auto"
          >
            Cutting-edge software solutions for loan services, mutual funds, and financial applications.
          </motion.p>
          
          {/* Divider */}
          <motion.div 
            variants={fadeInUp} 
            className="w-24 h-1 mx-auto mb-12 rounded"
            style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
          ></motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full font-medium text-white shadow-xl text-lg"
              style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
              onClick={() => {
                document.getElementById('solutions').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Explore Solutions
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full font-medium border-2 text-blue backdrop-blur-sm text-lg shadow-sm"
              style={{ borderColor: colors.blue, color: colors.blue }}
              onClick={handleConsultationClick}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
          
          {/* Feature Pills */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            {[
              { label: "Credit Rule Engine", icon: "shield" },
              { label: "Loan Management", icon: "chart" },
              { label: "Digital Onboarding", icon: "check" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg"
                style={{ border: `1px solid ${colors.blue}20` }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  background: `linear-gradient(90deg, ${colors.white}95, ${colors.teal}10)`
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
              >
                <div className="mr-2" style={{ color: colors.blue }}>
                  {feature.icon === "shield" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {feature.icon === "chart" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {feature.icon === "check" && (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <span className="font-medium" style={{ color: colors.navy }}>{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Premium Wave Effect Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill={colors.navy}
            fillOpacity="0.08"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,266.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: `linear-gradient(135deg, ${colors.white}05 0%, ${colors.white}00 50%, ${colors.teal}05 100%)`,
        }} 
      />

      {/* Consultation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div 
            className="absolute inset-0 backdrop-blur-sm bg-opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closePopup}
          />
          <motion.div 
            className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl relative z-10"
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
            
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>Schedule a Consultation</h3>
            <p className="text-gray-600 mb-6">Contact our team to discuss your financial technology needs.</p>
            
            <div className="flex flex-col gap-4 mb-6">
              <a 
                href="mailto:info@bancwise.com" 
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ border: `1px solid ${colors.blue}30` }}
              >
                <div className="rounded-full p-2" style={{ backgroundColor: `${colors.blue}15` }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.blue }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium" style={{ color: colors.navy }}>Email Us</h4>
                  <p className="text-sm text-gray-500">info@bancwise.com</p>
                </div>
              </a>
              
              <a 
                href="tel:958 555 1544" 
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ border: `1px solid ${colors.blue}30` }}
              >
                <div className="rounded-full p-2" style={{ backgroundColor: `${colors.teal}15` }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.teal }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium" style={{ color: colors.navy }}>Call Us</h4>
                  <p className="text-sm text-gray-500">958 555 1544</p>
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
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;