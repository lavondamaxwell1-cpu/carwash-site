export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold text-blue-700">
          SplashPro Wash
        </h1>

        <div className="hidden items-center gap-6 font-medium md:flex">
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border px-3 py-2 text-xl font-bold md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

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
  );
}
