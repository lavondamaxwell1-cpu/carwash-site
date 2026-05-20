export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-cyan-500 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-100">
            Premium Car Wash & Detailing
          </p>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Make Your Car Shine Like New
          </h2>

          <p className="mb-8 max-w-xl text-lg text-blue-50">
            Fast, affordable, and professional car wash services for drivers who
            want their vehicle looking fresh.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="rounded-xl bg-white px-6 py-3 text-center font-bold text-blue-700 shadow hover:bg-blue-50"
            >
              Book a Wash
            </a>

            <a
              href="#pricing"
              className="rounded-xl border border-white px-6 py-3 text-center font-bold text-white hover:bg-white/10"
            >
              View Packages
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/20 p-5 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80"
            alt="Clean car"
            className="h-80 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
