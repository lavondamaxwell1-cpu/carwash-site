export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            A better clean, every time
          </h2>

          <p className="mt-3 text-slate-600">
            We make car care simple, quick, and dependable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
              ⚡
            </div>
            <h3 className="mb-2 text-lg font-bold">Fast Service</h3>
            <p className="text-sm text-slate-600">
              Get in, get cleaned, and get back on the road quickly.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
              💧
            </div>
            <h3 className="mb-2 text-lg font-bold">Quality Products</h3>
            <p className="text-sm text-slate-600">
              We use reliable cleaning products that help protect your vehicle.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
              💰
            </div>
            <h3 className="mb-2 text-lg font-bold">Affordable Prices</h3>
            <p className="text-sm text-slate-600">
              Choose from simple packages that fit your budget.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl">
              🤝
            </div>
            <h3 className="mb-2 text-lg font-bold">Friendly Team</h3>
            <p className="text-sm text-slate-600">
              Helpful service with a clean, professional finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
