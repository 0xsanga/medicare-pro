import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Medicare_Logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Solutions", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Demo", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img
            src={logo}
            alt="MediCare Pro"
            className="h-20 w-auto object-contain"
          />

          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 font-medium hover:text-[#003178] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#003178] font-medium hover:text-blue-700 transition-all px-4 py-2">
            Sign In
          </button>
          <button className="bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-[#003178]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-600 font-medium hover:text-[#003178] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-slate-100" />
            <button className="text-[#003178] font-medium text-left">
              Sign In
            </button>
            <button className="bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white px-6 py-2.5 rounded-lg font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
