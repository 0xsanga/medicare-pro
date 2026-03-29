import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "Free forever",
    description: "Perfect for solo practitioners just getting started.",
    accent: "border-slate-200",
    badge: null,
    buttonStyle: "border-2 border-[#003178] text-[#003178] hover:bg-[#003178] hover:text-white",
    features: [
      { text: "Up to 50 patients", included: true },
      { text: "Basic appointment scheduling", included: true },
      { text: "Digital prescriptions", included: true },
      { text: "Email support", included: true },
      { text: "Billing & insurance automation", included: false },
      { text: "Analytics dashboard", included: false },
      { text: "Multi-user access", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "For growing clinics that need the full suite of tools.",
    accent: "border-[#003178]",
    badge: "Most Popular",
    buttonStyle: "bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white hover:opacity-90",
    features: [
      { text: "Up to 500 patients", included: true },
      { text: "Smart appointment scheduling", included: true },
      { text: "Digital prescriptions", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Billing & insurance automation", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Up to 5 users", included: true },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "per month",
    description: "For hospitals and large practices with advanced needs.",
    accent: "border-slate-200",
    badge: null,
    buttonStyle: "border-2 border-[#003178] text-[#003178] hover:bg-[#003178] hover:text-white",
    features: [
      { text: "Unlimited patients", included: true },
      { text: "Smart appointment scheduling", included: true },
      { text: "Digital prescriptions", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Billing & insurance automation", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Unlimited users", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-10 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#003d36] font-bold tracking-widest text-xs uppercase mb-4 block">
            Simple Pricing
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#003178] mb-4">
            Plans for every practice
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`relative bg-white rounded-2xl shadow-sm border-2 ${plan.accent} p-8 flex flex-col gap-6 ${
                plan.badge ? "shadow-xl scale-105" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-headline text-xl font-extrabold text-[#003178] mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div>
                <span className="font-headline text-5xl font-extrabold text-[#003178]">
                  {plan.price}
                </span>
                <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold text-sm transition-all active:scale-95 ${plan.buttonStyle}`}
              >
                Get Started
              </button>

              <hr className="border-slate-100" />

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-sm"
                  >
                    {feature.included ? (
                      <HiOutlineCheckCircle
                        size={18}
                        className="text-[#70d8c8] flex-shrink-0"
                      />
                    ) : (
                      <MdClose
                        size={18}
                        className="text-slate-300 flex-shrink-0"
                      />
                    )}
                    <span
                      className={
                        feature.included ? "text-slate-700" : "text-slate-400"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-slate-400 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
