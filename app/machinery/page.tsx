import Link from "next/link";
import PageHero from "@/components/PageHero";

const machinery = ["20 Ton Excavator", "Mini Excavator", "Hydraulic Breaker", "Long Arm Excavator", "Wheel Loader", "Lorry Support"];

export default function MachineryPage() {
  return (
    <>
      <PageHero title="Our Machinery" subtitle="A simple machinery showcase helps customers understand the company’s capability and equipment availability." />

      <section className="bg-construction-graphite px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Equipment Showcase</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Machinery available for construction site support</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {machinery.map((item) => (
              <div key={item} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/10">
                <div className="h-52 bg-gradient-to-br from-yellow-300/90 via-slate-300 to-slate-600" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">Suitable for excavation and construction site support. Replace this with actual model and machine details later.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-600">Why It Matters</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Customers can quickly understand our capability</h2>
          </div>
          <p className="leading-7 text-slate-600">
            Showing machinery helps customers confirm whether the company has suitable equipment for land clearing, excavation, earthwork and on-site support requirements.
          </p>
        </div>
      </section>

      <section className="bg-construction-dark px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">Looking for machinery support?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Send us your project details and we will advise based on the job requirements.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
