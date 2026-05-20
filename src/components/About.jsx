export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
            About SplashPro Wash
          </p>

          <h2 className="mb-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Reliable car care with a spotless finish
          </h2>

          <p className="mb-5 text-slate-600">
            At SplashPro Wash, we believe every vehicle deserves to look its
            best. From quick exterior washes to full interior details, our team
            provides friendly service, quality products, and results you can
            see.
          </p>

          <p className="mb-8 text-slate-600">
            Whether you are getting ready for work, a weekend trip, or just want
            that fresh clean-car feeling, we make it simple to keep your ride
            shining.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-5 text-center">
              <p className="text-3xl font-extrabold text-blue-700">5+</p>
              <p className="text-sm font-medium text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-center">
              <p className="text-3xl font-extrabold text-blue-700">1K+</p>
              <p className="text-sm font-medium text-slate-600">Cars Cleaned</p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-center">
              <p className="text-3xl font-extrabold text-blue-700">100%</p>
              <p className="text-sm font-medium text-slate-600">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=900&q=80"
            alt="Car wash service"
            className="h-96 w-full rounded-3xl object-cover shadow-xl"
          />

          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Local Service
            </p>
            <p className="text-xl font-extrabold text-slate-900">
              Fast. Friendly. Fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
