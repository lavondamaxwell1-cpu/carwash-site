export default function Memberships() {
  return (
    <section className="bg-blue-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-200">
            Monthly Memberships
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Keep your car clean all month long
          </h2>

          <p className="mt-3 text-blue-100">
            Perfect for drivers who love that fresh, clean-car feeling every
            week.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
            <h3 className="text-2xl font-bold">Basic Monthly</h3>
            <p className="my-4 text-4xl font-extrabold text-blue-700">$29/mo</p>

            <ul className="mb-6 space-y-2 text-slate-600">
              <li>✓ Unlimited basic washes</li>
              <li>✓ Exterior rinse</li>
              <li>✓ Hand dry</li>
            </ul>

            <a
              href="#booking"
              className="block rounded-xl bg-blue-700 px-5 py-3 text-center font-bold text-white hover:bg-blue-800"
            >
              Join Now
            </a>
          </div>

          <div className="rounded-2xl border-4 border-yellow-400 bg-white p-6 text-slate-900 shadow-xl">
            <p className="mb-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
              Best Value
            </p>

            <h3 className="text-2xl font-bold">Deluxe Monthly</h3>
            <p className="my-4 text-4xl font-extrabold text-blue-700">$49/mo</p>

            <ul className="mb-6 space-y-2 text-slate-600">
              <li>✓ Unlimited deluxe washes</li>
              <li>✓ Tire shine</li>
              <li>✓ Vacuum included</li>
            </ul>

            <a
              href="#booking"
              className="block rounded-xl bg-blue-700 px-5 py-3 text-center font-bold text-white hover:bg-blue-800"
            >
              Join Now
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
            <h3 className="text-2xl font-bold">Premium Monthly</h3>
            <p className="my-4 text-4xl font-extrabold text-blue-700">$79/mo</p>

            <ul className="mb-6 space-y-2 text-slate-600">
              <li>✓ Deluxe wash benefits</li>
              <li>✓ Monthly interior cleaning</li>
              <li>✓ Priority booking</li>
            </ul>

            <a
              href="#booking"
              className="block rounded-xl bg-blue-700 px-5 py-3 text-center font-bold text-white hover:bg-blue-800"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
