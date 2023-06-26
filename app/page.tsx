"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import Footer from '../components/Footer';
import About from '../sections/About';
import Services from '../sections/Services';
import Products from '../sections/Products';
import Countries from '../sections/Countries';
import Contact from '../components/Contact';
import CertificationsBanner from '../sections/CertificationsBanner';

function Page() {
  return (
    <>
      <Navbar />
      <div id="Home">
        <HeroSection />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Products">
        <Products />
        <CertificationsBanner />
        <Countries />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Page;
