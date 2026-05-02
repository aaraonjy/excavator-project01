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
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
