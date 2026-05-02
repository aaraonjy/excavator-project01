import PageHero from "@/components/PageHero";

const machinery = ["20 Ton Excavator", "Mini Excavator", "Hydraulic Breaker", "Long Arm Excavator", "Wheel Loader", "Lorry Support"];

export default function MachineryPage() {
  return (
    <>
      <PageHero title="Our Machinery" subtitle="A simple machinery showcase helps customers understand the company’s capability and equipment availability." />
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {machinery.map((item) => (
            <div key={item} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
              <div className="h-52 bg-gradient-to-br from-yellow-300/80 via-neutral-400/40 to-neutral-900/70" />
              <div className="p-6">
                <h2 className="text-xl font-black">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">Suitable for excavation and construction site support. Replace this with actual model and machine details later.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-construction-light px-5 py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Capability</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black">Machinery details help customers understand what type of work can be supported</h2>
        </div>
      </section>
    </>
  );
}
