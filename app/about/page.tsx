import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Our Company" subtitle="We provide excavation and construction site support with reliable machinery and experienced operators." />
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Built for construction site reliability</h2>
            <p className="mt-5 leading-7 text-slate-600">Our company supports customers with excavation works, land clearing, site preparation and machinery support for on-site projects.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/70 ring-1 ring-slate-200">
            <h3 className="text-xl font-black">Why customers work with us</h3>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>• Experienced machinery operators</li>
              <li>• Reliable excavators and equipment</li>
              <li>• Fast response for project enquiries</li>
              <li>• Practical support for site requirements</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
