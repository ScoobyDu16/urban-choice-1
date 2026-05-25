const BRANDS = [
  '3M',
  'Honeywell',
  'TOTO',
  'Grohe',
  'Hansgrohe',
  'Geberit',
  'Legrand',
  'Schneider Electric',
  'Philips',
  'Havells',
  'Bosch',
  'DeWalt',
  'Makita',
  'Hilti',
  'Milwaukee',
  'Stanley',
  'Siemens',
  'Wavin',
  'RAK Ceramics',
  'Lafarge',
  'Saint-Gobain',
];

export default function BrandsMarquee() {
  // Duplicate list so the scroll looks seamless
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <div className="bg-card overflow-hidden border-y py-4" aria-label="Brands we carry">
      <div className="marquee-track flex gap-6" style={{ width: 'max-content' }}>
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold whitespace-nowrap"
            style={{
              borderColor: 'hsl(var(--color-border))',
              color: 'hsl(var(--color-foreground) / 0.70)',
            }}
          >
            {brand}
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
