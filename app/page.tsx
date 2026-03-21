'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Phone, MapPin, Scissors, Heart, Sparkles, ArrowRight, Clock, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax images
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // Reveal animations
      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCFA]/85 backdrop-blur-2xl border-b border-[#8FA68E]/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <Link href="/" className="font-display text-xl text-[#2C2C2C] tracking-tight hover:text-[#8FA68E] transition-colors duration-500">
            School Street <span className="text-[#8FA68E]">Salon</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="font-body text-sm text-[#4A4A4A] hover:text-[#8FA68E] transition-colors duration-500 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FA68E] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
            <motion.a 
              href="tel:6037279377" 
              className="btn-luxury text-xs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={14} />
              Book Now
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <Image
            src="/images/salon-real/salon-interior-1.jpg"
            alt="School Street Salon Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA]/95 via-[#FDFCFA]/80 to-[#FDFCFA]" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-block font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase mb-8"
            >
              Lebanon, New Hampshire
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero-title text-[#2C2C2C] mb-8"
            >
              Your Neighborhood
              <span className="block text-[#8FA68E]">Salon</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-body text-xl md:text-2xl text-[#4A4A4A] mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              A women-owned sanctuary for hair care. Where listening comes first 
              and every visit feels like coming home.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <motion.a 
                href="tel:6037279377" 
                className="btn-luxury"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={18} />
                Book Appointment
              </motion.a>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services" className="btn-outline-luxury">
                  Explore Services
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-16 flex flex-wrap justify-center gap-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#8FA68E] fill-[#8FA68E]" />
                  ))}
                </div>
                <span className="font-body font-medium text-[#2C2C2C]">4.9 Google Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#8FA68E]" />
                <span className="font-body font-medium text-[#2C2C2C]">Women-Owned</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 lg:py-40 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20"
          >
            <span className="font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase">What We Do</span>
            <h2 className="section-title text-[#2C2C2C] mt-5 mb-6">Our Services</h2>
            <p className="font-body text-xl text-[#4A4A4A] max-w-2xl mx-auto">
              From precision cuts to transformative color, we offer a complete range of professional hair services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: "Haircuts", desc: "Precision cuts for women, men, and children. Tailored to your face shape and lifestyle.", img: "/images/salon-real/salon-interior-1.jpg" },
              { icon: Sparkles, title: "Color", desc: "Full color, highlights, balayage, and color correction using premium products.", img: "/images/salon-real/salon-interior-1.jpg" },
              { icon: Heart, title: "Styling", desc: "Blowouts, updos, and special occasion styling that lasts all day and night.", img: "/images/salon-real/salon-interior-1.jpg" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <service.icon className="w-10 h-10 text-[#8FA68E] mb-4" />
                  <h3 className="font-display text-2xl text-[#2C2C2C] mb-3">{service.title}</h3>
                  <p className="font-body text-[#4A4A4A] leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/services" className="btn-luxury">
              View All Services & Pricing
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-[#8FA68E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">Why Choose Us</h2>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4.9", label: "Google Rating", suffix: "★" },
              { number: "35+", label: "Five-Star Reviews", suffix: "" },
              { number: "100%", label: "Women-Owned", suffix: "" },
              { number: "10+", label: "Years Experience", suffix: "" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="font-body text-white/70 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="section-title text-[#2C2C2C] mb-6">Ready for a Fresh Look?</h2>
            <p className="font-body text-xl text-[#4A4A4A] mb-10 max-w-2xl mx-auto">
              Call us to book your appointment or stop by the salon. We cannot wait to meet you.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <motion.a 
                href="tel:6037279377" 
                className="btn-luxury text-lg px-10 py-5"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={20} />
                (603) 727-9377
              </motion.a>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-outline-luxury text-lg px-10 py-5">
                  <MapPin size={20} />
                  Get Directions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="font-display text-2xl mb-5">
                School Street <span className="text-[#8FA68E]">Salon</span>
              </div>
              <p className="font-body text-white/60 leading-relaxed">
                A women-owned beauty sanctuary in Lebanon, NH. Where every visit feels like coming home.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-5">Quick Links</h4>
              <ul className="space-y-3 font-body text-white/60">
                <li><Link href="/services" className="hover:text-[#8FA68E] transition-colors duration-300">Services</Link></li>
                <li><Link href="/about" className="hover:text-[#8FA68E] transition-colors duration-300">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#8FA68E] transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-5">Contact</h4>
              <ul className="space-y-3 font-body text-white/60">
                <li><a href="tel:6037279377" className="hover:text-[#8FA68E] transition-colors">(603) 727-9377</a></li>
                <li>1 School St, Lebanon, NH</li>
                <li>In The Village House</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-5">Hours</h4>
              <p className="font-body text-white/60">
                By Appointment<br />
                Call to Schedule
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center font-body text-white/40 text-sm">
            © {new Date().getFullYear()} School Street Salon. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
