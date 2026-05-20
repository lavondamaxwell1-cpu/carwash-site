import { siteConfig } from "../data/siteConfig";

export default function TopBar() {
  return (
    <div className="bg-slate-900 px-6 py-2 text-center text-sm font-semibold text-white">
      <p>
        🚘 {siteConfig.offer} —
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="ml-1 text-yellow-300 hover:text-yellow-200"
        >
          Call {siteConfig.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
