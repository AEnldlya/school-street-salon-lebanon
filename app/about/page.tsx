'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Heart, Award, Users, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-reveal').forEach((el) => {
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
    <main className="min-h-screen bg-[#FDFCFA] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#8FA68E] hover:text-[#6B826A] transition-colors mb-8 font-body">
          <ArrowRight size={16} className="rotate-180" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16 about-reveal">
          <span className="block font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase mb-4">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-6">
            About Us
          </h1>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="about-reveal relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/salon-real/salon-interior-1.jpg"
              alt="School Street Salon"
              fill
              className="object-cover"
            />
          </div>
          <div className="about-reveal">
            <h2 className="font-display text-3xl md:text-4xl text-[#2C2C2C] mb-6">
              A Salon Built on Listening
            </h2>
            <div className="space-y-6 font-body text-lg text-[#4A4A4A] leading-relaxed">
              <p>
                School Street Salon opened with a simple mission: create a space where 
                everyone feels welcome, listened to, and leaves looking their best.
              </p>
              <p>
                Located in The Village House at 1 School Street in Lebanon, New Hampshire, 
                we are a small, women-owned business serving the Upper Valley community.
              </p>
              <p>
                We believe good hair starts with a good conversation. Our stylists take 
                the time to understand what you want and what works for your lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Heart, title: "Personal Touch", desc: "We remember your name, your preferences, and what makes you feel confident." },
            { icon: Award, title: "Quality Work", desc: "Professional products and proven techniques for results that last." },
            { icon: Users, title: "Community First", desc: "Proud to be part of Lebanon and the Upper Valley community." },
          ].map((value, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              className="text-center p-8 bg-[#F7F5F0] rounded-3xl"
            >
              <div className="w-16 h-16 rounded-full bg-[#8FA68E]/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-[#8FA68E]" />
              </div>
              <h3 className="font-display text-2xl text-[#2C2C2C] mb-3">{value.title}</h3>
              <p className="font-body text-[#4A4A4A]">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Women-Owned */}
        <div className="about-reveal bg-[#8FA68E] rounded-3xl p-10 md:p-16 text-center mb-24">
          <Heart className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Women-Owned Business
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            School Street Salon is proudly women-owned and operated. We believe in 
            supporting local businesses and creating opportunities for women in our community.
          </p>
        </div>

        {/* Location */}
        <div className="about-reveal text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#2C2C2C] mb-8">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#8FA68E] mb-3" />
              <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Address</h3>
              <p className="font-body text-[#4A4A4A] text-center">
                1 School Street<br />
                Lebanon, NH 03766<br />
                In The Village House
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-[#8FA68E] mb-3" />
              <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Phone</h3>
              <a href="tel:6037279377" className="font-body text-[#8FA68E] hover:underline">
                (603) 727-9377
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-[#8FA68E] mb-3" />
              <h3 className="font-body font-medium text-[#2C2C2C] mb-1">Hours</h3>
              <p className="font-body text-[#4A4A4A] text-center">
                By Appointment<br />
                Call to Schedule
              </p>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-luxury">
              Get Directions
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="font-display text-2xl mb-4">
            School Street <span className="text-[#8FA68E]">Salon</span>
          </div>
          <p className="font-body text-white/60">
            1 School St, Lebanon, NH | (603) 727-9377
          </p>
        </div>
      </footer>
    </main>
  );
}
