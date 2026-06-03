import useCountUp from '../hooks/useCountUp';

const stats = [
  { target: 2400, suffix: '+', label: 'Active Members' },
  { target: 15, suffix: '+', label: 'Certified Trainers' },
  { target: 50, suffix: '+', label: 'Weekly Classes' },
  { target: 98, suffix: '%', label: 'Member Satisfaction' },
];

function StatItem({ target, suffix, label }) {
  const [ref, value] = useCountUp(target, 2000);
  return (
    <div ref={ref} className="text-center px-4 flex-1">
      <div className="font-display text-5xl md:text-7xl lg:text-[88px] text-gold leading-none tracking-wider">
        {value}
        {suffix}
      </div>
      <div className="mt-3 text-[13px] uppercase tracking-[0.3em] text-white/60 font-body">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-dark-bg py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 diagonal-stripes opacity-100" />
      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gold/30">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
