type PageHeroProps = { title: string; subtitle: string };

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-black px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-construction-yellow">Excavation Services</p>
        <h1 className="max-w-3xl text-4xl font-black md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">{subtitle}</p>
      </div>
    </section>
  );
}
