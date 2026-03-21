'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCFA]/85 backdrop-blur-2xl border-b border-[#8FA68E]/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="font-display text-xl text-[#2C2C2C] tracking-tight hover:text-[#8FA68E] transition-colors duration-500"
          >
            School Street <span className="text-[#8FA68E]">Salon</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-body text-sm transition-colors duration-500 relative group ${
                  pathname === l.href
                    ? 'text-[#8FA68E]'
                    : 'text-[#4A4A4A] hover:text-[#8FA68E]'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#8FA68E] transition-all duration-500 ${
                    pathname === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
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

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#2C2C2C]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FDFCFA]/98 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-2xl transition-colors ${
                    pathname === l.href ? 'text-[#8FA68E]' : 'text-[#2C2C2C]'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:6037279377"
                className="btn-luxury mt-4"
                onClick={() => setMobileOpen(false)}
              >
                <Phone size={18} />
                (603) 727-9377
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
