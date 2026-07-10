import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  blurb?: string;
}

export default function SectionHeading({ index, label, title, blurb }: SectionHeadingProps) {
  return (
    <div className="relative text-center mb-20">
      {/* Ghost chapter numeral */}
      <span
        aria-hidden
        className="ghost-numeral absolute left-1/2 -translate-x-1/2 -top-14 sm:-top-20 text-[110px] sm:text-[170px]"
      >
        {index}
      </span>

      <div className="relative pt-6 sm:pt-10">
        <span className="font-mono text-[11px] font-light text-brown-500 dark:text-brown-400 tracking-[0.35em] uppercase">
          {`№ ${index} — ${label}`}
        </span>

        <motion.div
          className="h-[2px] bg-gold dark:bg-gold-dark mx-auto my-4"
          initial={{ width: 0 }}
          whileInView={{ width: 56 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Masked line reveal — observe the h2 (the span is clipped, so it can't be observed) */}
        <motion.h2
          className="overflow-hidden text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream leading-[1.15] pb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {title}
          </motion.span>
        </motion.h2>

        {blurb && (
          <motion.p
            className="text-brown-500 dark:text-brown-400 mt-5 max-w-lg mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {blurb}
          </motion.p>
        )}
      </div>
    </div>
  );
}
