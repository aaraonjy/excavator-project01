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
    <header className="absolute left-0 top-0 z-40 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="text-xl font-black tracking-tight text-white drop-shadow-md">
          EXCAVATOR<span className="text-construction-yellow">CO</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-construction-yellow"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}