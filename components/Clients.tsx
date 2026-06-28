import Reveal from "./Reveal";
import { clients } from "@/lib/content";

export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section id="clients" className="border-y border-bone/10 bg-ink py-16">
      <Reveal>
        <p className="mb-8 px-5 text-center text-xs uppercase tracking-[0.3em] text-bone/40 md:px-8">
          Trusted by homeowners &amp; studios
        </p>
      </Reveal>
      <div className="no-scrollbar relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
          {row.map((c, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl uppercase tracking-tightest text-bone/30 md:text-3xl"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
