import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/machinery", label: "Machinery" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-construction-dark/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-white">
          EXCAVATOR<span className="text-construction-yellow">CO</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-construction-yellow">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://wa.me/60123456789?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20excavation%20services."
          target="_blank"
          className="rounded-full bg-construction-yellow px-5 py-2.5 text-sm font-bold text-construction-dark shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
        >
          WhatsApp Now
        </a>
      </div>
    </header>
  );
}
