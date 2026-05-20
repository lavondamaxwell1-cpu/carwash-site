import { packages } from "../data/siteData";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Wash Packages</h2>

          <p className="mt-3 text-slate-600">
            Simple pricing for every kind of clean.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-6 shadow ${
                pkg.popular
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {pkg.popular && (
                <p className="mb-3 inline-block rounded-full bg-blue-700 px-3 py-1 text-sm font-bold text-white">
                  Most Popular
                </p>
              )}

              <h3 className="text-2xl font-bold">{pkg.name}</h3>

              <p className="my-4 text-4xl font-extrabold text-blue-700">
                {pkg.price}
              </p>

              <ul className="mb-6 space-y-2 text-slate-600">
                {pkg.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="#booking"
                className="block rounded-xl bg-blue-700 px-5 py-3 text-center font-bold text-white hover:bg-blue-800"
              >
                Choose Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
