export default function SpecialOffer() {
  return (
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
  );
}
