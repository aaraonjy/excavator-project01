import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Our Company" subtitle="We provide excavation and construction site support with reliable machinery and experienced operators." />
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Who We Are</p>
            <h2 className="mt-3 text-3xl font-black">Built for construction site reliability</h2>
            <p className="mt-5 leading-7 text-white/65">Our company supports customers with excavation works, land clearing, site preparation and machinery support for on-site projects.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
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
      <section className="bg-construction-light px-5 py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Our Focus</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black">Helping customers complete site work with the right machinery support</h2>
          <p className="mt-5 max-w-3xl leading-7 text-neutral-600">The website is designed to show customers what the company does, what equipment is available, and how to contact the team quickly for project enquiries.</p>
        </div>
      </section>
      <section className="bg-construction-graphite px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Get Started</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Need excavation support for your next project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Contact us with your project location and requirements. Our team will respond as soon as possible.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Get Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
