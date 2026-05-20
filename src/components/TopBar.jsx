export default function TopBar() {
  return (
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
  );
}
