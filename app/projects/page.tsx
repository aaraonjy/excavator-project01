import Link from "next/link";
import PageHero from "@/components/PageHero";

const projects = [
  {
    title: "Site Preparation Project",
    description: "Preparation works for construction sites including levelling, clearing and earthwork support.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Construction%20vehicles%20-%20excavators.jpg?width=1400",
  },
  {
    title: "Land Clearing Work",
    description: "Clearing and preparation of land areas before construction, development or infrastructure work begins.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Demolition%20with%20Excavator.jpg?width=1400",
  },
  {
    title: "Foundation Excavation",
    description: "Excavation support for building foundations, trenches and other structural preparation works.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Excavator%20buckets%2C%20Hyundai%20excavators.jpg?width=1400",
  },
  {
    title: "Construction Earthwork",
    description: "Earthmoving and construction support for commercial, industrial and infrastructure job sites.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Latvian%20and%20US%20Engineers%20Level%20Up%20Joint%20Capabilities%20%289094905%29.jpg?width=1400",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Completed Projects / Job Sites" subtitle="Project photos build customer trust by showing real work and completed site capabilities." />
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-black">{project.title}</h2>
                <p className="mt-3 text-white/65">{project.description}</p>
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
