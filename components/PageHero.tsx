type PageHeroProps = { title: string; subtitle: string };

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero-bg px-5 pb-24 pt-36 text-white md:pb-28 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-construction-yellow">Excavation Services</p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}
