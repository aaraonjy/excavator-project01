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
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="text-xl font-black tracking-tight text-white drop-shadow-sm">
          EXCAVATOR<span className="text-construction-yellow">CO</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-construction-yellow">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
