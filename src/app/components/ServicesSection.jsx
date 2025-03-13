// components/ServicesSection.js
'use client';
import { motion } from 'framer-motion';

const ServicesSection = ({ colors, servicesControls, servicesRef, servicesInView }) => {
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

  // Updated services with new content
  const services = [
    {
      title: "Loan Management System",
      description: "A complete cloud-based lending solution that streamlines product creation, loan disbursement, and management from start to finish.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Loan Origination System",
      description: "Our configurable platform simplifies loan origination with flexible workflows, API integrations, and dynamic underwriting.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Mutual Funds Software",
      description: "Our software solutions for mutual funds are designed to optimize fund management, tracking, and reporting.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: "Credit Rule Engine",
      description: "With our streamlined solutions, lenders can customize credit rules, integrate diverse data sources, and leverage automated or manual decisioning for streamlined loan approvals.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Digital Onboarding",
      description: "A seamless and efficient digital onboarding process tailored for modern financial institutions adapting to the evolving landscape.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
    },
    {
      title: "ONDC Registration",
      description: "We are proud to be registered with the Open Network for Digital Commerce (ONDC) in India, ensuring seamless interoperability and enhanced digital commerce experiences.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={servicesRef}
          initial="hidden"
          animate={servicesControls}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-wider font-semibold mb-3"
            style={{ color: colors.teal }}
          >
            Our Services
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.navy }}
          >
            Innovative Financial Solutions
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-32 h-1 mx-auto mb-8"
            style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Discover how our cutting-edge technology transforms banking operations and customer experiences with tailored solutions for modern financial institutions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-xl p-8 group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="relative mb-8">
                <div 
                  className="absolute inset-0 bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center -z-10"
                  style={{ backgroundColor: `${colors.teal}30` }}
                ></div>
                <motion.div 
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-teal-500"
                  style={{ color: colors.teal }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3 
                className="text-xl font-bold mb-4 group-hover:text-teal-500 transition-colors duration-300"
                style={{ color: colors.navy }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertise section highlighting our strengths */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-10 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 
              className="text-3xl font-bold mb-6"
              style={{ color: colors.navy }}
            >
              Our Expertise
            </h3>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={`expertise-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start space-x-4"
              >
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.teal }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.navy }}
                  >
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;