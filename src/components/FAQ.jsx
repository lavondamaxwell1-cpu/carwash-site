import { faqs } from "../data/siteData";

export default function FAQ({ openFaq, setOpenFaq }) {
  return (
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
            <div key={faq.question} className="rounded-2xl bg-white shadow-sm">
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
  );
}
