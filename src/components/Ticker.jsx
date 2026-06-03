const items = [
  '🔥 NEW BATCH STARTING JUNE 1 — LIMITED SLOTS',
  '★ FREE FIRST SESSION FOR NEW MEMBERS',
  "💪 RAMADAN SPECIAL: 30% OFF ALL PLANS",
  "🏆 IRONFORGE — ISLAMABAD'S #1 GYM 2024",
  '⚡ OPEN 24/7 — TRAIN ON YOUR SCHEDULE',
];

export default function Ticker() {
  // duplicate items for a seamless infinite marquee
  const fullList = [...items, ...items];

  return (
    <div className="bg-gold w-full overflow-hidden border-y border-black/10">
      <div className="flex h-12 items-center whitespace-nowrap animate-marquee">
        {fullList.map((text, i) => (
          <div
            key={i}
            className="flex items-center shrink-0 font-display text-black text-[18px] tracking-[0.18em] px-8"
          >
            <span>{text}</span>
            <span className="mx-8 text-black/70">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
