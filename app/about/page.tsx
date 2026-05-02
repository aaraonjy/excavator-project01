import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Our Company" subtitle="We provide excavation and construction site support with reliable machinery and experienced operators." />

      <section className="bg-construction-graphite px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Who We Are</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Built for construction site reliability</h2>
            <p className="mt-5 leading-7 text-white/65">
              Our company supports customers with excavation works, land clearing, site preparation and machinery support for on-site projects.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
            <h3 className="text-xl font-black">Why customers work with us</h3>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>• Experienced machinery operators</li>
              <li>• Reliable excavators and equipment</li>
              <li>• Fast response for project enquiries</li>
              <li>• Practical support for site requirements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Our Focus</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Helping customers complete site work with the right machinery support</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Construction site support",
              "Land and earthwork preparation",
              "Reliable machinery deployment",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-5 h-12 w-12 rounded-xl bg-construction-yellow" />
                <h3 className="text-lg font-black">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Clear project support for customers who need excavation and on-site machinery services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-construction-dark px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">Discuss your excavation requirements with us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Share your project location and scope so we can understand the job requirements.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
