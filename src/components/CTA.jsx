import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-10 bg-[#f2f4f6]">
      <motion.div
        className="max-w-5xl mx-auto bg-gradient-to-br from-[#003178] to-[#0d47a1] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0d47a1] blur-3xl rounded-full opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#003178] blur-3xl rounded-full opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#70d8c8] inline-block animate-pulse" />
            Join 500+ clinics already on MediCare Pro
          </span>

          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to modernize your clinical operations?
          </h2>

          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Start your 14-day free trial today. No credit card required.
            Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#003178] px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 active:scale-95 transition-all shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 active:scale-95 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
