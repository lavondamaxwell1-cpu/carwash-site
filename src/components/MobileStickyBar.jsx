export default function MobileStickyBar() {
  return (
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
  );
}
