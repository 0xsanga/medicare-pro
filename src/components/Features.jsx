import { motion } from "framer-motion";
import { MdMonitorHeart, MdEventAvailable, MdPayment, MdMedication } from "react-icons/md";
import { HiOutlineLockClosed, HiOutlineChartBar } from "react-icons/hi";

const features = [
  {
    icon: <MdMonitorHeart size={24} />,
    iconBg: "bg-[#d9e2ff]",
    iconColor: "text-[#003178]",
    title: "Streamlined Patient Management",
    description:
      "Unified patient profiles with 360-degree health history and intelligent search functionality.",
  },
  {
    icon: <MdEventAvailable size={24} />,
    iconBg: "bg-[#8df5e4]",
    iconColor: "text-[#003d36]",
    title: "Smart Appointment Scheduling",
    description:
      "AI-powered slot optimization that reduces wait times and maximizes practitioner efficiency.",
  },
  {
    icon: <HiOutlineLockClosed size={24} />,
    iconBg: "bg-[#d8e3fb]",
    iconColor: "text-[#545f73]",
    title: "Secure Medical Records",
    description:
      "End-to-end encrypted storage complying with HIPAA and global privacy standards.",
  },
  {
    icon: <MdPayment size={24} />,
    iconBg: "bg-[#d9e2ff]",
    iconColor: "text-[#003178]",
    title: "Billing & Insurance Automation",
    description:
      "Reduce administrative overhead by 40% with automated claims and one-click invoice generation.",
  },
  {
    icon: <HiOutlineChartBar size={24} />,
    iconBg: "bg-[#8df5e4]",
    iconColor: "text-[#003d36]",
    title: "Real-Time Analytics Dashboard",
    description:
      "Visualize clinic health at a glance — patient throughput, resource allocation, and outcomes.",
  },
  {
    icon: <MdMedication size={24} />,
    iconBg: "bg-[#d8e3fb]",
    iconColor: "text-[#545f73]",
    title: "Digital Prescriptions",
    description:
      "Generate, sign, and send prescriptions digitally with full audit trails and pharmacy integration.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-10 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#003d36] font-bold tracking-widest text-xs uppercase mb-4 block">
            Everything You Need
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#003178] mb-4">
            Precision-engineered features
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Designed by clinicians, for clinicians. Every feature built around
            real workflows.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 cursor-default"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${feature.iconBg} ${feature.iconColor} flex items-center justify-center rounded-xl mb-6`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-headline text-lg font-bold text-[#003178] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
