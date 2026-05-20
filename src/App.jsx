import { useState } from "react";
import { services, packages, faqs } from "./data/siteData";

export default function App() { const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  vehicleType: "",
  package: "",
  date: "",
  time: "",
  message: "",
});

const [submitted, setSubmitted] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [openFaq, setOpenFaq] = useState(null);
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Booking request:", formData);
  setSubmitted(true);

  setFormData({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    package: "",
    date: "",
    time: "",
    message: "",
  });
};

  return (
    <div className="min-h-screen bg-slate-50 pb-20 text-slate-900 md:pb-0">
      {/* Navbar */}
      {/* Navbar */}
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 px-6 py-2 text-center text-sm font-semibold text-white">
        <p>
          🚘 Grand Opening Special: 20% Off Your First Wash —
          <a
            href="tel:5551234567"
            className="ml-1 text-yellow-300 hover:text-yellow-200"
          >
            Call (555) 123-4567
          </a>
        </p>
      </div>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-extrabold text-blue-700">
            SplashPro Wash
          </h1>

          {/* Desktop Links */}
          <div className="hidden gap-6 font-medium md:flex">
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
            <a href="#pricing" className="hover:text-blue-700">
              Pricing
            </a>
            <a href="#booking" className="hover:text-blue-700">
              Book Now
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
            <a
              href="tel:5551234567"
              className="rounded-xl bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-800"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border px-3 py-2 text-xl font-bold md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 font-medium">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-700"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Services
              </a>

              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Pricing
              </a>

              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Book Now
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Contact
              </a>
              <a
                href="tel:5551234567"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-blue-700 px-4 py-3 text-center font-bold text-white hover:bg-blue-800"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
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
              Fast, affordable, and professional car wash services for drivers
              who want their vehicle looking fresh.
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
      {/* Special Offer */}
      <section className="bg-yellow-400 px-6 py-6 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest">
              Limited Time Offer
            </p>
            <h2 className="text-2xl font-extrabold">
              Grand Opening Special: 20% Off Your First Wash
            </h2>
            <p className="mt-1 text-sm font-medium">
              Book today and give your car the fresh start it deserves.
            </p>
          </div>

          <a
            href="#booking"
            className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white shadow hover:bg-slate-800"
          >
            Claim Offer
          </a>
        </div>
      </section>
      {/* About */}
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
              best. From quick exterior washes to full interior details, our
              team provides friendly service, quality products, and results you
              can see.
            </p>

            <p className="mb-8 text-slate-600">
              Whether you are getting ready for work, a weekend trip, or just
              want that fresh clean-car feeling, we make it simple to keep your
              ride shining.
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
                <p className="text-sm font-medium text-slate-600">
                  Cars Cleaned
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <p className="text-3xl font-extrabold text-blue-700">100%</p>
                <p className="text-sm font-medium text-slate-600">
                  Satisfaction
                </p>
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

      {/* Why Choose Us */}
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
                We use reliable cleaning products that help protect your
                vehicle.
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
      {/* Service Area */}
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
              We provide reliable car wash and detailing services for customers
              in Charlotte and nearby areas. Whether you need a quick wash or a
              full detail, we are ready to help keep your vehicle looking fresh.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-800">
                Charlotte, NC
              </div>

              <div className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-800">
                Concord, NC
              </div>

              <div className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-800">
                Huntersville, NC
              </div>

              <div className="rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-800">
                Matthews, NC
              </div>
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
              Customers can request service details through the booking form,
              and our team will confirm availability.
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
      {/* Services */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Our Services
            </h2>
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

      {/* Pricing */}
      <section id="pricing" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Wash Packages
            </h2>
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
        {/* Memberships */}
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
                <p className="my-4 text-4xl font-extrabold text-blue-700">
                  $29/mo
                </p>

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
                <p className="my-4 text-4xl font-extrabold text-blue-700">
                  $49/mo
                </p>

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
                <p className="my-4 text-4xl font-extrabold text-blue-700">
                  $79/mo
                </p>

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
        {/* Gallery */}
        <section className="bg-slate-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold md:text-4xl">
                See the Shine
              </h2>
              <p className="mt-3 text-slate-600">
                From quick washes to full details, we make every vehicle look
                its best.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80"
                alt="Car being washed"
                className="h-72 w-full rounded-2xl object-cover shadow"
              />

              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80"
                alt="Clean car"
                className="h-72 w-full rounded-2xl object-cover shadow"
              />

              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80"
                alt="Car detailing"
                className="h-72 w-full rounded-2xl object-cover shadow"
              />
            </div>
          </div>
        </section>{" "}
      </section>
      {/* Testimonials */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
              Customer Reviews
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              What Drivers Are Saying
            </h2>

            <p className="mt-3 text-slate-600">
              Real results, friendly service, and cars that leave looking fresh.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="mb-6 text-slate-600">
                “My car looked brand new after the full detail. The service was
                fast, professional, and worth every dollar.”
              </p>
              <div>
                <p className="font-bold text-slate-900">Marcus T.</p>
                <p className="text-sm text-slate-500">
                  Premium Detail Customer
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="mb-6 text-slate-600">
                “I stopped in for a quick wash and left with my car shining.
                Super friendly team and great prices.”
              </p>
              <div>
                <p className="font-bold text-slate-900">Angela R.</p>
                <p className="text-sm text-slate-500">Deluxe Wash Customer</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="mb-6 text-slate-600">
                “The inside of my SUV was a mess, and they made it feel clean
                again. I’ll definitely be coming back.”
              </p>
              <div>
                <p className="font-bold text-slate-900">Jasmine L.</p>
                <p className="text-sm text-slate-500">
                  Interior Cleaning Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
              Questions
            </p>

            <h2 className="text-3xl font-extrabold md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-slate-600">
              Quick answers before you book your wash.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-bold text-blue-700">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="border-t border-slate-100 px-6 pb-6">
                    <p className="pt-4 text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Booking */}
      <section id="booking" className="px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold">Book Your Wash</h2>
            <p className="mt-2 text-slate-600">
              Send a request and we’ll contact you to confirm.
            </p>
          </div>
          {submitted && (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
              Appointment request sent! We’ll contact you soon to confirm.
            </div>
          )}
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
              <option value="Van">Van</option>
            </select>

            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Select Package</option>
              <option value="Basic Wash">Basic Wash</option>
              <option value="Deluxe Wash">Deluxe Wash</option>
              <option value="Premium Detail">Premium Detail</option>
              <option value="Basic Monthly">Basic Monthly</option>
              <option value="Deluxe Monthly">Deluxe Monthly</option>
              <option value="Premium Monthly">Premium Monthly</option>
            </select>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your vehicle..."
              rows="4"
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </section>
      {/* Business Info */}
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
      {/* Map */}
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
      {/* Contact */}
      <footer id="contact" className="bg-slate-900 px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-2xl font-bold">SplashPro Wash</h3>
            <p className="text-slate-300">
              Clean cars, happy drivers, and service that shines.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-bold">Hours</h4>
            <p className="text-slate-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
            <p className="text-slate-300">Sunday: 10:00 AM - 4:00 PM</p>
          </div>

          <div>
            <h4 className="mb-3 font-bold">Contact</h4>
            <p className="text-slate-300">
              Phone:{" "}
              <a href="tel:5551234567" className="hover:text-white">
                (555) 123-4567
              </a>
            </p>
            <p className="text-slate-300">Email: hello@splashprowash.com</p>
            <p className="text-slate-300">Charlotte, NC</p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          © 2026 SplashPro Wash. All rights reserved.
        </p>
      </footer>
      {/* Back To Top Button */}
      <a
        href="#top"
        className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white shadow-lg hover:bg-blue-800 md:bottom-6"
      >
        ↑
      </a>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 shadow-lg md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="#booking"
            className="rounded-xl bg-blue-700 px-4 py-3 text-center font-bold text-white hover:bg-blue-800"
          >
            Book Now
          </a>

          <a
            href="tel:5551234567"
            className="rounded-xl bg-slate-900 px-4 py-3 text-center font-bold text-white hover:bg-slate-800"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
