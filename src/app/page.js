'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  // Animation controls for various sections
  const heroControls = useAnimation();
  const servicesControls = useAnimation();
  const aboutControls = useAnimation();
  const testimonialsControls = useAnimation();
  
  // Refs for detecting when elements come into view
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
    if (servicesInView) {
      servicesControls.start('visible');
    }
    if (aboutInView) {
      aboutControls.start('visible');
    }
    if (testimonialsInView) {
      testimonialsControls.start('visible');
    }
  }, [heroInView, servicesInView, aboutInView, testimonialsInView, heroControls, servicesControls, aboutControls, testimonialsControls]);
  
  // BancWise colors from logo
  const colors = {
    navy: '#2D2A7C',
    blue: '#2175BC',
    teal: '#00B2B2',
    white: '#FFFFFF'
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>BancWise Technologies | Innovative Financial Solutions</title>
        <meta name="description" content="Premium financial technology solutions by BancWise Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar colors={colors} />
      
      <HeroSection colors={colors} heroControls={heroControls} heroRef={heroRef} />
      
      <ServicesSection colors={colors} servicesControls={servicesControls} servicesRef={servicesRef} servicesInView={servicesInView} />
      
      <FeaturesSection colors={colors} aboutControls={aboutControls} aboutRef={aboutRef} aboutInView={aboutInView} />
      
      
      
      <CTASection colors={colors} />
      
      <Footer colors={colors} />
    </div>
  );
}