import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
};

type Machine = {
  name: string;
  image: string;
  alt: string;
};

const iconClassName = "h-6 w-6 text-black";

const services: Service[] = [
  {
    title: "Excavation Works",
    description: "Suitable for construction, industrial and site preparation projects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName}>
        <path d="M3 19h18" />
        <path d="M5 19l3-7h5l3 7" />
        <path d="M10 12V7h3a4 4 0 0 1 4 4v1" />
        <path d="M17 12h3l-2 4" />
        <circle cx="8" cy="19" r="2" />
        <circle cx="16" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: "Land Clearing",
    description: "Clear land areas efficiently for construction, access roads and site preparation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName}>
        <path d="M12 3v18" />
        <path d="M7 8c0-3 2-5 5-5s5 2 5 5c0 2-1 4-5 6-4-2-5-4-5-6Z" />
        <path d="M4 21h16" />
        <path d="M8 21l4-5 4 5" />
      </svg>
    ),
  },
  {
    title: "Site Preparation",
    description: "Prepare project sites for foundation, earthwork and construction activities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName}>
        <path d="M3 21h18" />
        <path d="M5 21l4-11h6l4 11" />
        <path d="M9 10l3-7 3 7" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
  {
    title: "Demolition Support",
    description: "Machinery support for demolition, breaking work and heavy-duty site tasks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName}>
        <path d="M14 4l6 6" />
        <path d="M11 7l6 6" />
        <path d="M5 21l9-9" />
        <path d="M4 20l-1-1 7-7 2 2-7 7-1-1Z" />
        <path d="M15 3l6 6-4 4-6-6 4-4Z" />
      </svg>
    ),
  },
];

const machines: Machine[] = [
  {
    name: "20 Ton Excavator",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    alt: "20 ton excavator working at a construction site",
  },
  {
    name: "Mini Excavator",
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=900&q=80",
    alt: "mini excavator for compact site work",
  },
  {
    name: "Hydraulic Breaker",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    alt: "hydraulic breaker machinery support for demolition work",
  },
  {
    name: "Long Arm Excavator",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80",
    alt: "long arm excavator for earthwork and construction projects",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg px-5 pb-28 pt-36 text-center text-white md:pb-40 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-construction-yellow">
            Reliable Machinery • Experienced Operators
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Professional Excavation Services for Construction Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            We provide reliable excavation support for on-site construction projects, land clearing, site preparation and earthwork needs.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-construction-yellow px-8 py-4 font-bold text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/25 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-construction-light hover:text-black"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">What We Do</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Excavation services for job sites</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-construction-yellow shadow-lg shadow-yellow-500/10">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-construction-light px-5 py-20 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Our Machinery</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Machinery that proves our capability</h2>
            <p className="mt-5 text-neutral-600">Showcase the excavators and equipment available so customers can understand what type of projects the company can support.</p>
            <Link href="/machinery" className="mt-8 inline-flex rounded-full bg-construction-dark px-7 py-3 font-bold text-white transition hover:bg-neutral-800">
              View Machinery
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {machines.map((machine) => (
              <div key={machine.name} className="overflow-hidden rounded-2xl bg-construction-soft shadow-sm ring-1 ring-neutral-300">
                <img
                  src={machine.image}
                  alt={machine.alt}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-black">{machine.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-construction-graphite px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Get Started</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Need excavation services for your site?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Contact us with your project location and requirements. Our team will respond as soon as possible.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Get Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
