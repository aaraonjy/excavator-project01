import Link from "next/link";
import PageHero from "@/components/PageHero";

const projects = ["Site Preparation Project", "Land Clearing Work", "Foundation Excavation", "Construction Earthwork"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Completed Projects / Job Sites" subtitle="Project photos build customer trust by showing real work and completed site capabilities." />
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
              <div className="h-64 bg-gradient-to-br from-neutral-900 via-neutral-600 to-yellow-300/80" />
              <div className="p-6">
                <h2 className="text-xl font-black">{project}</h2>
                <p className="mt-3 text-white/65">Add real project description, location and photos here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-construction-light px-5 py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Proof Of Work</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Real project photos help build customer confidence</h2>
        </div>
      </section>
      <section className="bg-construction-graphite px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Get Started</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Have a project site that needs excavation work?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Contact us with your project location and requirements. Our team will respond as soon as possible.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Get Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
