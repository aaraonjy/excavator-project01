import Link from "next/link";
import PageHero from "@/components/PageHero";

const services = [
  ["Excavation Works", "General digging and earthwork support for construction projects."],
  ["Land Clearing", "Clearing land areas for preparation and development work."],
  ["Site Preparation", "Preparing construction sites before project execution."],
  ["Demolition Support", "Machinery support for selected demolition and clearing works."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Clear service information helps customers quickly understand what type of project support is available." />

      <section className="bg-construction-graphite px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">What We Do</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Excavation and on-site machinery services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
                <div className="mb-6 h-12 w-12 rounded-xl bg-construction-yellow" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">How We Support</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">From enquiry to site execution</h2>
          </div>
          <div className="space-y-4">
            {[
              "Customer shares project location and job scope",
              "Site requirements are reviewed before quotation",
              "Machinery and operator support are arranged for the project",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-bold text-yellow-600">Step {index + 1}</p>
                <p className="mt-2 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-construction-dark px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">Need help with site work?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Contact us to discuss excavation, land clearing and machinery support requirements.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
