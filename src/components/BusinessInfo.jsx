export default function BusinessInfo() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            Visit Us
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Ready for a cleaner ride?
          </h2>

          <p className="mt-3 text-slate-600">
            Stop by, call us, or request an appointment online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">📍</div>
            <h3 className="mb-2 font-bold">Location</h3>
            <p className="text-sm text-slate-600">
              123 Shine Street
              <br />
              Charlotte, NC
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">📞</div>
            <h3 className="mb-2 font-bold">Phone</h3>
            <a
              href="tel:5551234567"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              (555) 123-4567
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">✉️</div>
            <h3 className="mb-2 font-bold">Email</h3>
            <a
              href="mailto:hello@splashprowash.com"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              hello@splashprowash.com
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">🕒</div>
            <h3 className="mb-2 font-bold">Hours</h3>
            <p className="text-sm text-slate-600">
              Mon - Sat: 8AM - 6PM
              <br />
              Sunday: 10AM - 4PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
