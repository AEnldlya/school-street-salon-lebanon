import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="font-display text-2xl mb-5">
              School Street <span className="text-[#8FA68E]">Salon</span>
            </div>
            <p className="font-body text-white/60 leading-relaxed">
              A women-owned salon in Lebanon, NH. Good hair starts with a good conversation.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-5">Pages</h4>
            <ul className="space-y-3 font-body text-white/60">
              <li>
                <Link href="/services" className="hover:text-[#8FA68E] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8FA68E] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8FA68E] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-5">Contact</h4>
            <ul className="space-y-3 font-body text-white/60">
              <li>
                <a href="tel:6037279377" className="hover:text-[#8FA68E] transition-colors">
                  (603) 727-9377
                </a>
              </li>
              <li>1 School St, Lebanon, NH</li>
              <li>In The Village House</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-5">Hours</h4>
            <p className="font-body text-white/60">
              By Appointment
              <br />
              Call to Schedule
            </p>
            <a
              href="https://www.facebook.com/schoolstreetsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-body text-[#8FA68E] hover:text-white transition-colors"
            >
              Follow us on Facebook
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center font-body text-white/40 text-sm">
          &copy; {new Date().getFullYear()} School Street Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
