export default function MapSection() {
  return (
    <section className="bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            Find Us
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Easy to find, easy to book
          </h2>

          <p className="mt-3 text-slate-600">
            Visit our location or request your appointment online.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="flex h-96 items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 p-8 text-center">
            <div>
              <div className="mb-4 text-6xl">📍</div>

              <h3 className="mb-2 text-2xl font-extrabold text-slate-900">
                Map Coming Soon
              </h3>

              <p className="mb-6 text-slate-600">
                Replace this section with the real Google Map embed
                when you have their address.
              </p>

              <a
                href="#booking"
                className="inline-block rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
