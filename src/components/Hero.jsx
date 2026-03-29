import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="relative px-10 py-24 md:py-32 overflow-hidden bg-[#f7f9fb]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#003178]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left — Text Content */}
        <motion.div
          className="flex-1 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d5e0f8] text-[#3c475a] text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#003178] inline-block" />
            The next generation of clinical care
          </span>

          {/* Headline */}
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#003178] leading-[1.1] tracking-tight mb-6">
            The operating system for modern healthcare
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
            A medical SaaS platform for clinics and hospitals to manage
            patients, billing, and records with clinical precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-[#003178]/20">
              Get Started
            </button>
            <button className="bg-[#e6e8ea] text-[#3c475a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d8dadc] transition-all">
              View Demo
            </button>
          </div>

          {/* Social Proof */}
          <p className="mt-8 text-sm text-slate-400 font-medium">
            Trusted by{" "}
            <span className="text-[#003178] font-bold">500+ clinics</span>{" "}
            worldwide
          </p>
        </motion.div>

        {/* Right — Dashboard Image */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-[#003178]/10 blur-3xl rounded-full pointer-events-none" />

          {/* Image Card */}
          <div className="relative rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden">
            <img
              src={dashboard}
              alt="MediCare Pro Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
