import PageHero from "@/components/PageHero";

const projects = ["Site Preparation Project", "Land Clearing Work", "Foundation Excavation", "Construction Earthwork"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Completed Projects / Job Sites" subtitle="Project photos build customer trust by showing real work and completed site capabilities." />
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="h-64 bg-gradient-to-br from-gray-300 to-yellow-200" />
              <div className="p-6">
                <h2 className="text-xl font-black">{project}</h2>
                <p className="mt-3 text-gray-600">Add real project description, location and photos here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
