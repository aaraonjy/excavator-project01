import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Send us your project location and requirements. We will get back to you as soon as possible." />
      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-black">Enquiry Form</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Name" />
              <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Phone Number" />
              <input className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Project Location" />
              <textarea className="min-h-32 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-construction-yellow" placeholder="Tell us about your project" />
              <button type="button" className="rounded-full bg-construction-yellow px-7 py-3 font-bold text-black hover:bg-yellow-300">Submit Enquiry</button>
            </form>
            <p className="mt-4 text-sm text-white/45">Note: This form is UI only. Add API later if you want email submission.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-black">Get in touch directly</h2>
            <div className="mt-6 space-y-4 text-white/65">
              <p>Phone: +60 12-345 6789</p>
              <p>Email: enquiry@example.com</p>
              <p>Service Area: Malaysia</p>
            </div>
            <a href="https://wa.me/60123456789" target="_blank" className="mt-8 inline-flex rounded-full bg-construction-yellow px-7 py-3 font-bold text-black hover:bg-yellow-300">WhatsApp Now</a>
          </div>
        </div>
      </section>
    </>
  );
}