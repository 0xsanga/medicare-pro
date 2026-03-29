import { motion } from "framer-motion";
import { MdFormatQuote } from "react-icons/md";

const testimonials = [
  {
    quote:
      "MediCare Pro completely transformed how we manage our clinic. Appointment scheduling alone saved us 10 hours a week.",
    name: "Dr. Sarah Mitchell",
    role: "General Practitioner",
    clinic: "Greenfield Medical Center",
    initials: "SM",
    color: "bg-[#d9e2ff] text-[#003178]",
  },
  {
    quote:
      "The billing automation is a game changer. We reduced claim rejections by 60% in the first month alone.",
    name: "James Okafor",
    role: "Hospital Administrator",
    clinic: "Sunrise Regional Hospital",
    initials: "JO",
    color: "bg-[#8df5e4] text-[#003d36]",
  },
  {
    quote:
      "Finally a platform that understands clinical workflows. The patient records system is intuitive and incredibly fast.",
    name: "Dr. Priya Sharma",
    role: "Cardiologist",
    clinic: "HeartCare Specialists",
    initials: "PS",
    color: "bg-[#d8e3fb] text-[#545f73]",
  },
  {
    quote:
      "Our patient satisfaction scores went up by 34% after switching to MediCare Pro. The scheduling system is just seamless.",
    name: "Dr. Michael Torres",
    role: "Pediatrician",
    clinic: "Little Stars Children's Clinic",
    initials: "MT",
    color: "bg-[#d9e2ff] text-[#003178]",
  },
  {
    quote:
      "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions every single day.",
    name: "Linda Fernandez",
    role: "Practice Manager",
    clinic: "Westside Family Practice",
    initials: "LF",
    color: "bg-[#8df5e4] text-[#003d36]",
  },
  {
    quote:
      "Implementation was smooth and the support team was outstanding. We were fully onboarded within a week.",
    name: "Dr. Ahmed Hassan",
    role: "Surgeon",
    clinic: "City General Hospital",
    initials: "AH",
    color: "bg-[#d8e3fb] text-[#545f73]",
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-10 bg-[#f7f9fb]">
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
            What Clinicians Say
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-[#003178] mb-4">
            Trusted by 500+ clinics worldwide
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From solo practitioners to large hospitals — here's what our
            customers have to say.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col gap-6"
            >
              {/* Quote Icon */}
              <MdFormatQuote size={36} className="text-[#003178] opacity-20" />

              {/* Quote Text */}
              <p className="text-slate-600 leading-relaxed text-sm flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#003178] text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                  <p className="text-slate-400 text-xs">{t.clinic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
