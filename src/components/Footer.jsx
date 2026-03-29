import { MdFavorite } from "react-icons/md";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "HIPAA Compliance", href: "#" },
  { label: "Security", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline text-lg font-extrabold text-[#003178]">
            MediCare Pro
          </span>
          <p className="text-slate-400 text-xs tracking-wide">
            © 2024 MediCare Pro. Clinical Precision & Security Guaranteed.
          </p>
          <p className="text-slate-300 text-xs flex items-center gap-1">
            Built with <MdFavorite size={12} className="text-red-400" /> by{" "}
            <a
              href="https://github.com/0xsanga"
              target="_blank"
              rel="noreferrer"
              className="text-[#003178] font-semibold hover:underline"
            >
              Idaramfon Usanga
            </a>{" "}
            for{" "}
            <span className="text-[#003178] font-semibold">LZ Flex Digital Solutions</span>
          </p>
          <a
            href="mailto:Lzflexdigital@outlook.com"
            className="text-slate-400 text-xs hover:text-[#003178] transition-colors"
          >
            Lzflexdigital@outlook.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 text-xs tracking-wide hover:text-[#003178] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
