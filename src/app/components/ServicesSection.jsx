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

  // Updated team members data with the provided information
  const teamMembers = [
    {
      name: "Mr. Sijo Paul E.",
      position: "Banking Operations & Strategic Growth Expert",
      bio: "Co-founder and Grievance expert with extensive knowledge in banking operations and developing strategic growth initiatives for financial institutions.",
      image: "/SIJO PAUL (1).png"
    },
    {
      name: "Mr. Bastian Jose",
      position: "Banking & Credit Specialist",
      bio: "Co-founder with specialized expertise in banking and credit solutions, helping financial institutions implement effective credit evaluation systems.",
      image: "/Removal-79.png"
    },
    {
      name: "Mr. Joji P. Sunny",
      position: "MSME & SME & Corporate Lending Expert",
      bio: "Co-founder focused on designing specialized lending solutions for MSMEs, SMEs, and corporate clients with deep industry knowledge.",
      image: "/JOJI SUNNY (1).jpg"
    },
    {
      name: "Mr. Selestin Thomas",
      position: "Information Technology Expert",
      bio: "Technical Partner with extensive experience in developing and implementing innovative IT solutions for the financial services industry.",
      image: "/SELESTIN THOMAS.jpg"
    }
  ];

  return (
    <section id='services' className="py-24 bg-white overflow-hidden">
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

        {/* Updated Premium UI for Expert Team section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32"
          id='about-us'
          
        >
          <div  className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{ background: `linear-gradient(45deg, ${colors.blue}, ${colors.teal})` }}
              >
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
              id='our-team'
              style={{ color: colors.navy }}
            >
              Our Expert Team
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={servicesInView ? { opacity: 1, width: "128px" } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 mx-auto mb-8"
              style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto text-lg text-gray-600"
            >
              Our leadership team brings decades of experience in financial technology innovation.
            </motion.p>
          </div>
          
          {/* Enhanced Premium UI Team Cards with the new team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 transition-all duration-300 relative overflow-hidden border border-gray-100">
                  {/* Subtle gradient accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-2 opacity-80"
                    style={{ background: `linear-gradient(90deg, ${colors.blue}, ${colors.teal})` }}
                  ></div>
                  
                  {/* Profile image with refined styling */}
                  <div className="relative flex justify-center mb-6">
                    <div 
                      className="absolute inset-0 rounded-full blur-sm opacity-20"
                      style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})` }}
                    ></div>
                    
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-md relative border-4 border-white">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 
                      className="text-xl font-bold mb-1"
                      style={{ color: colors.navy }}
                    >
                      {member.name}
                    </h4>
                    
                    <p 
                      className="text-sm font-semibold mb-4"
                      style={{ color: colors.teal }}
                    >
                      {member.position}
                    </p>
                    
                    {/* Bio section */}
                    <p className="text-gray-600 text-sm mb-6 min-h-16">
                      {member.bio}
                    </p>
                    
                    {/* LinkedIn only */}
                    <div className="flex justify-center mt-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                        style={{ backgroundColor: `${colors.blue}10` }}
                      >
                        <svg className="w-5 h-5" style={{ color: colors.blue }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
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