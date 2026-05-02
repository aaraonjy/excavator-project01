import Link from "next/link";

const services = ["Excavation Works", "Land Clearing", "Site Preparation", "Demolition Support"];
const machines = ["20 Ton Excavator", "Mini Excavator", "Hydraulic Breaker", "Long Arm Excavator"];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg px-5 py-28 text-center text-white md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-construction-yellow">Reliable Machinery • Experienced Operators</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">Professional Excavation Services for Construction Projects</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">We provide reliable excavation support for on-site construction projects, land clearing, site preparation and earthwork needs.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/60123456789" target="_blank" className="rounded-full bg-construction-yellow px-8 py-4 font-bold text-black hover:bg-yellow-300">WhatsApp Now</a>
            <Link href="/projects" className="rounded-full border border-white/30 px-8 py-4 font-bold text-white hover:bg-white hover:text-black">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">What We Do</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Excavation services for job sites</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <div key={service} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="mb-5 h-12 w-12 rounded-xl bg-construction-yellow" />
                <h3 className="text-lg font-black">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">Suitable for construction, industrial and site preparation projects.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Our Machinery</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Machinery that proves our capability</h2>
            <p className="mt-5 text-gray-600">Showcase the excavators and equipment available so customers can understand what type of projects the company can support.</p>
            <Link href="/machinery" className="mt-8 inline-flex rounded-full bg-black px-7 py-3 font-bold text-white hover:bg-gray-800">View Machinery</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {machines.map((machine) => (
              <div key={machine} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 h-28 rounded-xl bg-gradient-to-br from-yellow-300 to-gray-300" />
                <h3 className="font-black">{machine}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-black md:text-4xl">Need excavation services for your site?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">Contact us with your project location and requirements. Our team will respond as soon as possible.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black hover:bg-yellow-300">Get Quotation</Link>
        </div>
      </section>
    </>
  );
}
