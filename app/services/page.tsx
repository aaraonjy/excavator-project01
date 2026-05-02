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
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-construction-light px-5 py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Project Enquiry</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Need help for your site work?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">Send your project location and job scope so the team can understand your requirements.</p>
        </div>
      </section>
      <section className="bg-construction-graphite px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Get Started</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Ready to discuss your excavation requirements?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Contact us with your project details and our team will advise the suitable machinery support.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Get Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
