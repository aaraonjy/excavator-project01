import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Send us your project location and requirements. We will get back to you as soon as possible." />

      <section className="bg-construction-graphite px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Enquiry Form</p>
            <h2 className="mt-3 text-2xl font-black">Send your project details</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Name" />
              <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Phone Number" />
              <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Project Location" />
              <textarea className="min-h-32 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Tell us about your project" />
              <button type="button" className="rounded-full bg-construction-yellow px-7 py-3 font-bold text-black transition hover:bg-yellow-300">Submit Enquiry</button>
            </form>
            <p className="mt-4 text-sm text-white/50">Note: This form is UI only. Add API later if you want email submission.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-construction-yellow">Direct Contact</p>
            <h2 className="mt-3 text-2xl font-black">Get in touch directly</h2>
            <div className="mt-6 space-y-4 text-white/75">
              <p>Phone: +60 12-345 6789</p>
              <p>Email: enquiry@example.com</p>
              <p>Service Area: Malaysia</p>
            </div>
            <a href="https://wa.me/60123456789" target="_blank" className="mt-8 inline-flex rounded-full bg-construction-yellow px-7 py-3 font-bold text-black transition hover:bg-yellow-300">WhatsApp Now</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            ["Share Location", "Let us know where the project site is located."],
            ["Describe Scope", "Tell us the excavation or site work required."],
            ["Receive Response", "Our team will review and respond as soon as possible."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5 h-12 w-12 rounded-xl bg-construction-yellow" />
              <h3 className="text-lg font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-construction-dark px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">Ready to discuss your site requirements?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">Send us the details and we will assist with the next step.</p>
        </div>
      </section>
    </>
  );
}
