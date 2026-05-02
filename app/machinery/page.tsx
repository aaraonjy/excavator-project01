import Link from "next/link";
import PageHero from "@/components/PageHero";

const machinery = [
  {
    title: "20 Ton Excavator",
    description: "Suitable for medium to large excavation works, earthmoving, foundation digging and construction site support.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kato%20Excavator.jpg?width=1200",
  },
  {
    title: "Mini Excavator",
    description: "Suitable for smaller job sites, tight access areas, drainage works and light excavation support.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hitachi%20Mini%20Excavator.jpg?width=1200",
  },
  {
    title: "Hydraulic Breaker",
    description: "Suitable for breaking concrete, rock, road surfaces and demolition-related site preparation works.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jackhammer%20On%20An%20Excavator%20End.jpg?width=1200",
  },
  {
    title: "Long Arm Excavator",
    description: "Suitable for deep excavation, slope work, riverbank projects and extended-reach site requirements.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Excavator%20CAT%20325B%20LN%208707.jpg?width=1200",
  },
  {
    title: "Wheel Loader",
    description: "Suitable for material loading, site clearing, stockpile handling and general construction support.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wheel-loader02.jpg?width=1200",
  },
  {
    title: "Lorry Support",
    description: "Suitable for transporting soil, aggregates, debris and construction materials for project sites.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Construction%20Truck.jpg?width=1200",
  },
];

export default function MachineryPage() {
  return (
    <>
      <PageHero title="Our Machinery" subtitle="A simple machinery showcase helps customers understand the company’s capability and equipment availability." />
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {machinery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
              <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
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
      <section className="bg-construction-graphite px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Get Started</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Need the right machinery for your job site?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Share your site requirements with us and we will advise suitable machinery support.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
