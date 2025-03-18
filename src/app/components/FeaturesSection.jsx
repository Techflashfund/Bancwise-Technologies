// components/FeaturesSection.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FeaturesSection = ({ colors }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  
  const featureBoxVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const handleConsultationClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  
  // Feature data
  const features = [
    {
      title: "Innovative Solutions",
      description: "We leverage the latest technologies to develop innovative software that meets the evolving needs of the financial sector.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Expert Team",
      description: "Our team of skilled professionals brings extensive experience in finance and technology, ensuring high-quality and reliable solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs and work closely with them to deliver customized solutions that drive success.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "ONDC Expertise",
      description: "Our deep understanding of ONDC technologies allows us to create software that seamlessly integrates with ONDC platforms, enhancing digital commerce capabilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section id='why-us' className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10" 
          style={{ background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}>
        </div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10" 
          style={{ background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.navy} 100%)` }}>
        </div>
        
        {/* Abstract patterns */}
        <svg className="absolute top-0 right-0 h-64 w-64 text-gray-100 transform rotate-90 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 Z" fill="currentColor"/>
        </svg>
        <svg className="absolute bottom-0 left-0 h-64 w-64 text-gray-100 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L100,100 L0,0 Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="inline-block">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px w-8 bg-gray-300"></div>
              <span className="mx-4 text-sm uppercase tracking-wider font-semibold text-gray-500">Excellence in banking technology</span>
              <div className="h-px w-8 bg-gray-300"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.navy }}
          >
            Why Choose Us
          </motion.h2>
          
          <motion.div variants={fadeIn}>
            <div 
              className="h-1 w-24 mx-auto mb-8"
              style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
            ></div>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering financial institutions with cutting-edge solutions that drive growth, 
              enhance customer experiences, and ensure regulatory compliance.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureBoxVariant}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
              ></div>
              
              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45"
                style={{ background: `linear-gradient(135deg, ${colors.blue}10 0%, ${colors.teal}30 100%)` }}
              ></div>
              
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 p-3 rounded-lg mr-6"
                  style={{ color: colors.blue }}
                >
                  {feature.icon}
                </div>
                
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: colors.navy }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div 
                className="h-1 w-12 mt-6"
                style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal}00 100%)` }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button 
            className="px-10 py-4 rounded-full font-semibold text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
            onClick={handleConsultationClick}
          >
            Book a Demo
          </button>
          
          <div className="mt-6 flex items-center justify-center">
            <div className="flex -space-x-3 mr-4">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(${i * 45}deg, ${colors.blue} 0%, ${colors.teal} 100%)`,
                    transform: `translateX(${i * 0.5}px)`
                  }}
                >
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-gray-600">Join + </p>
          </div>
        </motion.div>
      </div>

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

export default FeaturesSection;