interface MarqueeDividerProps {
  phrases: string[];
}

function Row({ phrases }: MarqueeDividerProps) {
  return (
    <div className="flex items-center shrink-0">
      {phrases.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="font-display italic text-lg sm:text-xl text-brown-300 dark:text-brown-600 whitespace-nowrap px-10">
            {phrase}
          </span>
          <span className="text-gold/70 dark:text-gold-dark/60 text-[10px] leading-none">
            {"✦"}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeDivider({ phrases }: MarqueeDividerProps) {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-brown-200/50 dark:border-brown-700/40 bg-white/20 dark:bg-white/[0.015] py-4 select-none"
    >
      <div className="marquee-track">
        <Row phrases={phrases} />
        <Row phrases={phrases} />
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-parchment dark:from-sepia-bg to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-parchment dark:from-sepia-bg to-transparent pointer-events-none" />
    </div>
  );
}
