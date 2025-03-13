// components/TestimonialsSection.js
'use client';
import { motion } from 'framer-motion';

const TestimonialsSection = ({ colors, testimonialsControls, testimonialsRef, testimonialsInView }) => {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsControls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.navy }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r mx-auto mb-6"
            style={{ background: `linear-gradient(90deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            See how we're helping leading financial institutions transform their operations.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "BancWise Technologies has revolutionized our approach to digital banking, allowing us to offer services we never thought possible.",
              author: "Sarah Johnson",
              position: "CTO, Global Financial Group",
            },
            {
              quote: "The security features implemented by BancWise have strengthened our fraud detection capabilities by over 200%.",
              author: "Michael Chen",
              position: "Head of Security, Meridian Banking",
            },
            {
              quote: "Their customer service platform has helped us achieve the highest satisfaction ratings in our 50-year history.",
              author: "Elena Rodriguez",
              position: "VP of Customer Experience, Atlantic Credit Union",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div 
                className="absolute top-0 left-10 w-12 h-12 rounded-b-lg flex items-center justify-center transform -translate-y-50"
                style={{ background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.teal} 100%)` }}
              >
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.navy }}>{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;