export default function Footer() {
  return (
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

          <p className="text-slate-300">
            Email:{" "}
            <a
              href="mailto:hello@splashprowash.com"
              className="hover:text-white"
            >
              hello@splashprowash.com
            </a>
          </p>

          <p className="text-slate-300">Charlotte, NC</p>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-slate-400">
        © 2026 SplashPro Wash. All rights reserved.
      </p>
    </footer>
  );
}
