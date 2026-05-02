import Link from "next/link";
import PageHero from "@/components/PageHero";

const machinery = [
  {
    title: "20 Ton Excavator",
    description: "Suitable for medium to large excavation works, earthmoving, foundation digging and construction site support.",
    image: "https://images.unsplash.com/photo-1574041324658-e3f0e3d4ef8a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mini Excavator",
    description: "Suitable for smaller job sites, tight access areas, drainage works and light excavation support.",
    image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hydraulic Breaker",
    description: "Suitable for breaking concrete, rock, road surfaces and demolition-related site preparation works.",
    image: "https://images.unsplash.com/photo-1581093458791-9d42cc0a0edb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Long Arm Excavator",
    description: "Suitable for deep excavation, slope work, riverbank projects and extended-reach site requirements.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wheel Loader",
    description: "Suitable for material loading, site clearing, stockpile handling and general construction support.",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lorry Support",
    description: "Suitable for transporting soil, aggregates, debris and construction materials for project sites.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
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
