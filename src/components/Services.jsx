import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Our Services</h2>

          <p className="mt-3 text-slate-600">
            Everything your car needs to look clean, fresh, and protected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
