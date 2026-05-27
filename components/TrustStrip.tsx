export default function TrustStrip() {
  const items = [
    "Above Trade-In",
    "Free Pickup",
    "Same-Day Possible",
    "Quote in 90 Seconds",
    "Clean Titles · Best Prices",
    "Licensed & Bonded",
    "NJ · NY · CT · PA",
    "Top Dollar Paid",
  ];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-4 text-bone">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-2xl tracking-widest">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-rust">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
