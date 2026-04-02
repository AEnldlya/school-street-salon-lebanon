'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Phone, MapPin, Scissors, Heart, Sparkles, ArrowRight } from 'lucide-react';
import HeroAceternity from './components/HeroAceternity';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFCFA] overflow-x-hidden">
      {/* Hero Section with Aceternity Effects */}
      <HeroAceternity />

      {/* Services Preview */}
      <section className="py-32 lg:py-40 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-20"
          >
            <span className="font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase">
              What We Do
            </span>
            <h2 className="section-title text-[#2C2C2C] mt-5 mb-6">
              Hair Services
            </h2>
            <p className="font-body text-xl text-[#4A4A4A] max-w-2xl mx-auto">
              Cuts, color, styling, and treatments. Whatever you need, we will
              figure it out together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: 'Cuts',
                desc: "Women's, men's, and kids. We work with your hair, not against it.",
                gradient: 'from-[#8FA68E] to-[#A8C4A7]',
              },
              {
                icon: Sparkles,
                title: 'Color',
                desc: 'Full color, highlights, balayage. We use products we actually trust.',
                gradient: 'from-[#A8C4A7] to-[#6B826A]',
              },
              {
                icon: Heart,
                title: 'Styling',
                desc: 'Blowouts, updos, and special occasions. Show up and feel great.',
                gradient: 'from-[#6B826A] to-[#8FA68E]',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div
                  className={`relative h-64 overflow-hidden bg-gradient-to-br ${service.gradient}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-white/30" />
                  </div>
                </div>
                <div className="p-8">
                  <service.icon className="w-10 h-10 text-[#8FA68E] mb-4" />
                  <h3 className="font-display text-2xl text-[#2C2C2C] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-[#4A4A4A] leading-relaxed">
                    {service.desc}
                  </p>
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
              View All Services &amp; Pricing
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { number: '4.9', label: 'Google Rating', suffix: '★' },
              { number: '35+', label: 'Five-Star Reviews', suffix: '' },
              { number: 'Upper Valley', label: 'Serving the Community', suffix: '', small: true },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="text-center"
              >
                <div
                  className={`font-display text-white mb-2 ${
                    stat.small
                      ? 'text-3xl md:text-4xl lg:text-5xl'
                      : 'text-5xl md:text-6xl lg:text-7xl'
                  }`}
                >
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="font-body text-white/70 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Snippet */}
      <section className="py-32 lg:py-40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase">
              What People Say
            </span>
            <h2 className="section-title text-[#2C2C2C] mt-5">
              From Our Clients
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Best salon in the area. They actually listen to what you want and don't rush you out the door.",
                author: 'Google Review',
              },
              {
                text: "I've been going here for a while now. Consistent, friendly, and my hair always looks great.",
                author: 'Google Review',
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
                className="bg-[#F7F5F0] rounded-3xl p-10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#8FA68E] fill-[#8FA68E]"
                    />
                  ))}
                </div>
                <p className="font-body text-lg text-[#2C2C2C] leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <span className="font-body text-sm text-[#4A4A4A]/60">
                  &mdash; {review.author}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="section-title text-[#2C2C2C] mb-6">
              Ready for a Fresh Look?
            </h2>
            <p className="font-body text-xl text-[#4A4A4A] mb-10 max-w-2xl mx-auto">
              Give us a call to book your appointment, or just stop by.
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
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="btn-outline-luxury text-lg px-10 py-5"
                >
                  <MapPin size={20} />
                  Get Directions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
