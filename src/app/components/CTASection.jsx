// components/AboutSection.js
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutSection = ({ colors }) => {
  const [activeTab, setActiveTab] = useState('mission');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };
  
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '30+', label: 'Financial Solutions' },
    { value: '99.9%', label: 'Uptime Guaranteed' }
  ];
  
  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'approach', label: 'Our Approach' }
  ];
  
  const tabContent = {
    mission: {
      heading: "Transforming Financial Services Through Innovation",
      content: "At BancWise Technologies, we're committed to revolutionizing the financial technology landscape with solutions that empower institutions to thrive in a rapidly evolving digital economy. Our mission is to combine cutting-edge technology with deep financial expertise to deliver software that drives efficiency, security, and growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    expertise: {
      heading: "Deep Financial Industry Knowledge & Technical Excellence",
      content: "With decades of combined experience in banking and financial systems, our team brings unparalleled expertise to every project. We specialize in developing secure, compliant, and scalable solutions that address the complex challenges facing modern financial institutions, with particular focus on ONDC integration and digital transformation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    approach: {
      heading: "Client-Centered & Results-Driven Development",
      content: "Our development philosophy centers on deep collaboration with our clients, ensuring that every solution we create is tailored to their specific needs and objectives. We employ agile methodologies, continuous integration, and rigorous testing to deliver robust software that exceeds expectations while meeting the highest standards of security and compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  };

  return (
    <section id='contact'   className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg className="absolute top-0 right-0 h-64 w-64 text-gray-100 transform rotate-90" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 Z" fill="currentColor"/>
        </svg>
        <svg className="absolute -bottom-20 -left-20 h-64 w-64 text-white opacity-80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="currentColor"/>
        </svg>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5" 
          style={{ background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left column - About content */}
          <div>
            <motion.div variants={fadeIn} className="inline-block mb-4">
              <div className="flex items-center">
                <div 
                  className="h-px w-10" 
                  style={{ backgroundColor: colors.blue }}
                ></div>
                <span className="mx-4 text-sm uppercase tracking-wider font-semibold" style={{ color: colors.blue }}>
                  About BancWise
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.navy }}
            >
              Pioneering Financial Technology Excellence
            </motion.h2>
            
            <motion.div variants={fadeIn}>
              <div className="flex mb-12">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 mr-2 rounded-lg transition-all duration-300 ${activeTab === tab.id ? 'font-semibold shadow-md' : 'text-gray-500'}`}
                    style={
                      activeTab === tab.id 
                        ? { background: `linear-gradient(90deg, ${colors.blue}10 0%, ${colors.teal}10 100%)`, color: colors.navy } 
                        : {}
                    }
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div 
                        className="h-0.5 w-full mt-1" 
                        style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
                      ></div>
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="mr-4" style={{ color: colors.blue }}>
                    {tabContent[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>
                      {tabContent[activeTab].heading}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tabContent[activeTab].content}
                    </p>
                  </div>
                </div>
              </div>
              
              
            </motion.div>
          </div>
          
          {/* Right column - Contact card */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
          >
            <div 
              className="h-24 w-full" 
              style={{ 
                background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)`
              }}
            ></div>
            
            <div className="relative px-8 pb-8">
              <div className="bg-white rounded-xl shadow-lg p-8 -mt-16 relative z-10">
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.navy }}>
                  Ready to Transform Your Financial Processes?
                </h3>
                <p className="text-gray-600 mb-8">
                  Contact us today to learn more about our innovative software solutions and how we can help you achieve your goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div 
                      className="p-3 rounded-lg mr-4"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors.blue}10 0%, ${colors.teal}10 100%)`,
                        color: colors.blue 
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <div className="font-medium" style={{ color: colors.navy }}>958 555 1544</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div 
                      className="p-3 rounded-lg mr-4"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors.blue}10 0%, ${colors.teal}10 100%)`,
                        color: colors.blue 
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <div className="font-medium" style={{ color: colors.navy }}>info@bancwise.com</div>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 py-4 rounded-lg font-semibold text-white shadow-lg"
                  style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
                >
                  Contact Us
                </motion.button>
              </div>
              
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;