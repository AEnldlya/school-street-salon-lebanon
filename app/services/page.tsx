'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Heart, ArrowRight, Phone, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    category: 'Cuts',
    icon: Scissors,
    gradient: 'from-[#8FA68E] to-[#A8C4A7]',
    items: [
      {
        name: "Women's Cut & Style",
        price: '$45-65',
        time: '60 min',
        desc: 'A cut that works for your hair type and your daily routine',
      },
      {
        name: "Men's Cut",
        price: '$30-40',
        time: '30 min',
        desc: 'Clean, sharp, easy to maintain',
      },
      {
        name: "Kid's Cut (12 & under)",
        price: '$25-35',
        time: '30 min',
        desc: 'We are patient with the little ones',
      },
      {
        name: 'Bang Trim',
        price: '$15',
        time: '15 min',
        desc: 'Quick cleanup between full cuts',
      },
      {
        name: 'Beard Trim',
        price: '$15-20',
        time: '15 min',
        desc: 'Neat, shaped, looking sharp',
      },
    ],
  },
  {
    category: 'Color',
    icon: Sparkles,
    gradient: 'from-[#A8C4A7] to-[#6B826A]',
    items: [
      {
        name: 'Full Color',
        price: '$75-95',
        time: '90 min',
        desc: 'All-over color with products we trust',
      },
      {
        name: 'Root Touch-up',
        price: '$65-85',
        time: '75 min',
        desc: 'Keep your color fresh without doing everything over',
      },
      {
        name: 'Partial Highlights',
        price: '$85-115',
        time: '90 min',
        desc: 'A few highlights to add some dimension',
      },
      {
        name: 'Full Highlights',
        price: '$120-160',
        time: '2 hrs',
        desc: 'Full head of highlights for a bigger change',
      },
      {
        name: 'Balayage',
        price: '$150-200',
        time: '2.5 hrs',
        desc: 'Hand-painted color that looks natural as it grows out',
      },
      {
        name: 'Color Correction',
        price: 'Consultation',
        time: 'Varies',
        desc: 'If something went wrong, we can fix it. Call us first.',
      },
    ],
  },
  {
    category: 'Styling & Treatments',
    icon: Heart,
    gradient: 'from-[#6B826A] to-[#8FA68E]',
    items: [
      {
        name: 'Blowout',
        price: '$35-50',
        time: '45 min',
        desc: 'Smooth, bouncy, ready to go',
      },
      {
        name: 'Special Occasion Styling',
        price: '$65-85',
        time: '60 min',
        desc: 'Weddings, proms, big nights out',
      },
      {
        name: 'Deep Conditioning Treatment',
        price: '$25-35',
        time: '30 min',
        desc: 'Bring dry, damaged hair back to life',
      },
      {
        name: 'Keratin Treatment',
        price: '$200-300',
        time: '3 hrs',
        desc: 'Smooth, frizz-free hair that lasts for months',
      },
      {
        name: 'Scalp Treatment',
        price: '$35',
        time: '30 min',
        desc: 'Healthy hair starts at the roots',
      },
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.service-reveal').forEach((el) => {
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
    <main className="min-h-screen bg-[#FDFCFA] pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8FA68E] hover:text-[#6B826A] transition-colors mb-8 font-body"
        >
          <ArrowRight size={16} className="rotate-180" />
          Back to Home
        </Link>
        <span className="block font-body text-sm text-[#8FA68E] tracking-[0.3em] uppercase mb-4">
          What We Offer
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-6">
          Services &amp; Pricing
        </h1>
        <p className="font-body text-xl text-[#4A4A4A] max-w-2xl">
          Prices may vary depending on hair length and what is involved. Call us
          for a quote if you are not sure.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        {services.map((service, idx) => (
          <section key={idx} className="service-reveal">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div
                className={`relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-32 h-32 text-white/20" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#8FA68E]/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#8FA68E]" />
                  </div>
                  <h2 className="font-display text-4xl text-[#2C2C2C]">
                    {service.category}
                  </h2>
                </div>
                <p className="font-body text-lg text-[#4A4A4A]">
                  Take a look at what we offer. If you do not see what you need,
                  just call and ask.
                </p>
              </div>
            </div>

            <div className="bg-[#F7F5F0] rounded-3xl p-8 md:p-12">
              <div className="space-y-0">
                {service.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="py-6 border-b border-[#8FA68E]/10 last:border-0"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-body text-xl font-medium text-[#2C2C2C]">
                            {item.name}
                          </h3>
                          <span className="flex items-center gap-1 text-sm text-[#4A4A4A]/60 font-body">
                            <Clock size={14} />
                            {item.time}
                          </span>
                        </div>
                        <p className="font-body text-[#4A4A4A]/70">
                          {item.desc}
                        </p>
                      </div>
                      <span className="font-display text-2xl text-[#8FA68E] lg:text-right">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-24">
        <div className="bg-[#8FA68E] rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to book?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8">
            Give us a call and we will get you on the schedule.
          </p>
          <motion.a
            href="tel:6037279377"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#8FA68E] font-body font-medium text-lg rounded-full hover:bg-[#2C2C2C] hover:text-white transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={20} />
            (603) 727-9377
          </motion.a>
        </div>
      </div>
    </main>
  );
}
