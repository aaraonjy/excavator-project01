import Link from "next/link";
import PageHero from "@/components/PageHero";

const projects = ["Site Preparation Project", "Land Clearing Work", "Foundation Excavation", "Construction Earthwork"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Completed Projects / Job Sites" subtitle="Project photos build customer trust by showing real work and completed site capabilities." />

      <section className="bg-construction-graphite px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Project Gallery</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Real work that builds customer confidence</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/10">
                <div className="h-64 bg-gradient-to-br from-slate-700 via-slate-500 to-yellow-200" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-white">{project}</h3>
                  <p className="mt-3 text-white/65">Add real project description, location and photos here.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Customer Trust</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Show the results before customers enquire</h2>
          </div>
          <p className="leading-7 text-slate-600">
            Completed job site photos help customers understand the company’s experience and feel more confident to contact the team for quotation.
          </p>
        </div>
      </section>

      <section className="bg-construction-dark px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">Have a similar project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Tell us your site location and project requirements so we can review the work scope.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Get Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
