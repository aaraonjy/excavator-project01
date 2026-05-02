import Link from "next/link";

const services = [
  {
    title: "Excavation Works",
    description: "Suitable for construction, industrial and site preparation projects.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M7 18l2-7h5l3 7M9 11l-2-3h4l1 3M15 13h3l2 5M5 21h3m8 0h3" />
    ),
  },
  {
    title: "Land Clearing",
    description: "Suitable for clearing land areas before construction and development work.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 7c-2 0-4 2-4 4 3 0 5-1 6-4M16 7c2 0 4 2 4 4-3 0-5-1-6-4M7 15h10M5 21h14" />
    ),
  },
  {
    title: "Site Preparation",
    description: "Suitable for preparing construction sites before project execution.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M6 14l4-4 3 3 5-6M8 21h8M15 7h4v4" />
    ),
  },
  {
    title: "Demolition Support",
    description: "Suitable for selected demolition, breaking and clearing support works.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l6 6-3 3-6-6 3-3zM11 7l-7 7v4h4l7-7M4 21h16" />
    ),
  },
];

const machines = [
  {
    title: "20 Ton Excavator",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kato%20Excavator.jpg?width=900",
  },
  {
    title: "Mini Excavator",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hitachi%20Mini%20Excavator.jpg?width=900",
  },
  {
    title: "Hydraulic Breaker",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jackhammer%20On%20An%20Excavator%20End.jpg?width=900",
  },
  {
    title: "Long Arm Excavator",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Excavator%20CAT%20325B%20LN%208707.jpg?width=900",
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
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-construction-yellow text-black shadow-lg shadow-yellow-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    {service.icon}
                  </svg>
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
              <div key={machine.title} className="overflow-hidden rounded-2xl bg-construction-soft shadow-sm ring-1 ring-neutral-300">
                <img src={machine.image} alt={machine.title} className="h-36 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-black">{machine.title}</h3>
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
