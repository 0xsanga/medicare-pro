import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdAnalytics, MdPayment } from "react-icons/md";
import billing from "../assets/billing.png";
import analytics from "../assets/analytics.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BillingAnalytics() {
  return (
    <section className="py-32 px-10 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <span className="inline-flex items-center gap-2 text-[#003d36] font-bold tracking-widest text-xs uppercase mb-4 block">
              <MdPayment size={16} />
              Automation Engine
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#003178] mb-6 leading-tight">
              Billing & insurance automation
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Reduce administrative overhead by 40%. Our automated engine
              handles claims, tracks payments, and integrates directly with
              major insurance providers.
            </p>

            <ul className="space-y-4">
              {[
                "Real-time claim status tracking",
                "One-click invoice generation",
                "Direct insurance provider integration",
                "Automated payment reminders",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <HiOutlineCheckCircle
                    size={22}
                    className="text-[#70d8c8] flex-shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm mb-1">Total Revenue</p>
                <p className="text-2xl font-extrabold text-[#003178]">$524,100</p>
                <p className="text-xs text-emerald-500 font-semibold mt-1">+8% vs last year</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#003d36]">
                <p className="text-slate-400 text-sm mb-1">Pending Claims</p>
                <p className="text-2xl font-extrabold text-[#003d36]">12</p>
                <p className="text-xs text-slate-400 font-semibold mt-1">Requires attention</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <div className="absolute -inset-4 bg-[#003178]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/40">
              <img
                src={billing}
                alt="Billing Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <span className="inline-flex items-center gap-2 text-[#003d36] font-bold tracking-widest text-xs uppercase mb-4 block">
              <MdAnalytics size={16} />
              Insights & Intelligence
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#003178] mb-6 leading-tight">
              Real-time analytics dashboard
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Visualize your clinic's health at a glance. Track patient
              throughput, resource allocation, and clinical outcomes with
              pixel-perfect accuracy.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: "Avg. Recovery Rate", value: "92%", color: "bg-[#70d8c8]", width: "w-11/12" },
                { label: "Patient Throughput", value: "+18.4%", color: "bg-[#003178]", width: "w-3/4" },
                { label: "Satisfaction Score", value: "4.9/5", color: "bg-[#0d47a1]", width: "w-10/12" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
                    <span className="text-[#003178] font-extrabold">{stat.value}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.width.replace("w-", "") === "11/12" ? "91.67%" : stat.width.replace("w-", "") === "3/4" ? "75%" : "83.33%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <div className="absolute -inset-4 bg-[#003178]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/40">
              <img
                src={analytics}
                alt="Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
