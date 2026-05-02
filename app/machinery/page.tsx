import PageHero from "@/components/PageHero";

const machinery = ["20 Ton Excavator", "Mini Excavator", "Hydraulic Breaker", "Long Arm Excavator", "Wheel Loader", "Lorry Support"];

export default function MachineryPage() {
  return (
    <>
      <PageHero title="Our Machinery" subtitle="A simple machinery showcase helps customers understand the company’s capability and equipment availability." />
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {machinery.map((item) => (
            <div key={item} className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-slate-200/70 ring-1 ring-slate-200">
              <div className="h-52 bg-gradient-to-br from-yellow-200 via-slate-100 to-slate-300" />
              <div className="p-6">
                <h2 className="text-xl font-black">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Suitable for excavation and construction site support. Replace this with actual model and machine details later.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
