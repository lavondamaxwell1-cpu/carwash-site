export default function ServiceArea() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            Service Area
          </p>

          <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
            Proudly serving local drivers
          </h2>

          <p className="mb-6 text-slate-600">
            We provide reliable car wash and detailing services for customers in
            Charlotte and nearby areas. Whether you need a quick wash or a full
            detail, we are ready to help keep your vehicle looking fresh.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Charlotte, NC",
              "Concord, NC",
              "Huntersville, NC",
              "Matthews, NC",
            ].map((city) => (
              <div
                key={city}
                className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-800"
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-100">
            Need mobile service?
          </p>

          <h3 className="mb-4 text-3xl font-extrabold">
            Ask about mobile car wash options
          </h3>

          <p className="mb-6 text-blue-50">
            Customers can request service details through the booking form, and
            our team will confirm availability.
          </p>

          <a
            href="#booking"
            className="inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow hover:bg-blue-50"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}
