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
                <p className="text-sm text-white/70">
                  Saturday: 8:00 AM – 4:00 PM
                </p>
                <p className="text-sm text-white/70">
                  Sunday: Closed
                </p>
              </div>

              <p className="text-xs text-white/40">
                * Please contact us before visiting to confirm availability.
              </p>
            </div>

            {/* RIGHT - LOCATION / MAP */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-widest text-white/40">LOCATION</p>
                  <h2 className="mt-2 text-xl font-black">Our Service Area</h2>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
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
                className="inline-flex rounded-full bg-construction-yellow px-7 py-3 font-bold text-black hover:bg-yellow-300"
              >
                WhatsApp Now
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}