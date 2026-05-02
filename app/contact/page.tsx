import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for excavation services, project enquiries, and site support."
      />

      <section className="bg-construction-graphite px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-neutral-900 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT - CONTACT DETAILS */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest text-white/40">BUSINESS</p>
                <h2 className="mt-2 text-2xl font-black">EXCAVATORCO</h2>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs tracking-widest text-white/40">PHONE / WHATSAPP</p>
                <p className="mt-2 text-lg font-semibold">+60 12-345 6789</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs tracking-widest text-white/40">EMAIL</p>
                <p className="mt-2 text-lg font-semibold">enquiry@example.com</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs tracking-widest text-white/40">SERVICE AREA</p>
                <p className="mt-2 text-lg font-semibold">
                  Malaysia (Kuala Lumpur & Selangor)
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-xs tracking-widest text-white/40">BUSINESS HOURS</p>
                <p className="mt-2 text-sm text-white/70">
                  Monday – Friday: 8:00 AM – 6:00 PM
                </p>
                <p className="text-sm text-white/70">Saturday: 8:00 AM – 4:00 PM</p>
                <p className="text-sm text-white/70">Sunday: Closed</p>
              </div>

              <p className="text-xs text-white/40">
                * Please contact us before visiting to confirm availability.
              </p>
            </div>

            {/* RIGHT - LOCATION / MAP */}
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs tracking-widest text-white/40">LOCATION</p>
                  <h2 className="mt-2 text-xl font-black">Our Service Area</h2>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="shrink-0 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Open Map
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=Kuala%20Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-[300px] w-full"
                  loading="lazy"
                />
              </div>

              <a
                href="https://wa.me/60123456789"
                target="_blank"
                className="inline-flex rounded-full bg-construction-yellow px-7 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm md:p-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-construction-yellow">
              Get A Quote
            </p>
            <h2 className="mt-3 text-3xl font-black">Quotation Enquiry Form</h2>
            <p className="mt-4 text-white/65">
              Submit your project location and requirements so our team can review the job scope and respond with suitable excavation support.
            </p>
          </div>

          <form className="grid gap-5 md:grid-cols-2">
            <input
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-construction-yellow"
              placeholder="Name"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-construction-yellow"
              placeholder="Phone Number"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-construction-yellow"
              placeholder="Project Location"
            />
            <select
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-construction-yellow"
              defaultValue=""
            >
              <option value="" disabled className="text-black">
                Service Required
              </option>
              <option className="text-black">Excavation Works</option>
              <option className="text-black">Land Clearing</option>
              <option className="text-black">Site Preparation</option>
              <option className="text-black">Demolition Support</option>
              <option className="text-black">Machinery Support</option>
            </select>
            <textarea
              className="min-h-36 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-construction-yellow md:col-span-2"
              placeholder="Tell us about your project requirements"
            />
            <div className="md:col-span-2">
              <button
                type="button"
                className="rounded-full bg-construction-yellow px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
              >
                Submit Enquiry
              </button>
              <p className="mt-4 text-sm text-white/45">
                Note: This form is UI only. Add API later if you want email submission.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
