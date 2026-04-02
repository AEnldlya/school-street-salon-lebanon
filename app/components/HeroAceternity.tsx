'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Phone, ArrowRight, Star, Heart } from 'lucide-react';

// Text reveal animation component
const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const words = children.split(' ');
  
  return (
    <span className="inline-flex flex-wrap">
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Magnetic button component
const MagneticButton = ({ 
  children, 
  href, 
  variant = 'primary',
  onClick 
}: { 
  children: React.ReactNode; 
  href?: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const baseClasses = variant === 'primary' 
    ? 'btn-luxury magnetic-btn-primary'
    : 'btn-outline-luxury magnetic-btn-outline';

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <div className={baseClasses}>
        {href.startsWith('http') || href.startsWith('tel:') ? (
          <a href={href} className="block w-full h-full">
            {content}
          </a>
        ) : (
          <Link href={href} className="block w-full h-full">
            {content}
          </Link>
        )}
      </div>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

// Floating particle component
const FloatingParticle = ({ delay, size, color }: { delay: number; size: number; color: string }) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: 'blur(1px)',
      }}
      initial={{ 
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: [null, -20, 20, -20, 0],
        x: [null, 10, -10, 10, 0],
        opacity: [0, 0.6, 0.4, 0.6, 0],
        scale: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// Spotlight effect component
const Spotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const background = useMotionTemplate`radial-gradient(
    600px circle at ${spotlightX}px ${spotlightY}px,
    rgba(143, 166, 142, 0.15),
    transparent 40%
  )`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background }}
    />
  );
};

// 3D Tilt card component
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(x, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / rect.width;
    const mouseY = (e.clientY - centerY) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

// Scroll progress bar component
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#8FA68E] origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default function HeroAceternity() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; size: number; color: string }>>([]);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    // Generate particles on client side only
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      size: Math.random() * 6 + 2,
      color: ['#8FA68E', '#A8C4A7', '#E8DCD4'][Math.floor(Math.random() * 3)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <Spotlight />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            delay={particle.delay}
            size={particle.size}
            color={particle.color}
          />
        ))}
      </div>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFCFA]"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <Image
            src="/images/salon-real/salon-interior-1.jpg"
            alt="School Street Salon Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA]/90 via-[#FDFCFA]/70 to-[#FDFCFA]" />
        </motion.div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(143, 166, 142, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(143, 166, 142, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <TiltCard className="max-w-4xl mx-auto">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8FA68E]/10 text-[#8FA68E] text-sm font-medium tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#8FA68E] animate-pulse" />
                Lebanon, New Hampshire
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="hero-title text-[#2C2C2C] mb-8">
              <TextReveal delay={0.4}>
                Your Neighborhood
              </TextReveal>
              <span className="block text-[#8FA68E] mt-2">
                <TextReveal delay={0.8}>
                  Salon
                </TextReveal>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="font-body text-xl md:text-2xl text-[#4A4A4A] mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              A women-owned salon where we take the time to listen and get it
              right. Walk in feeling ready for a change, walk out feeling like
              yourself.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap justify-center gap-5"
            >
              <MagneticButton href="tel:6037279377" variant="primary">
                <Phone size={18} />
                Book Appointment
              </MagneticButton>
              <MagneticButton href="/services" variant="outline">
                See Services
                <ArrowRight size={18} />
              </MagneticButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: [0.23, 1, 0.32, 1] }}
              className="mt-16 flex flex-wrap justify-center gap-10"
            >
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + i * 0.1, duration: 0.4 }}
                    >
                      <Star className="w-5 h-5 text-[#8FA68E] fill-[#8FA68E]" />
                    </motion.div>
                  ))}
                </div>
                <span className="font-body font-medium text-[#2C2C2C]">
                  4.9 on Google
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full">
                <Heart className="w-5 h-5 text-[#8FA68E]" />
                <span className="font-body font-medium text-[#2C2C2C]">
                  Women-Owned
                </span>
              </div>
            </motion.div>
          </TiltCard>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFCFA] to-transparent z-10" />
      </section>
    </>
  );
}
