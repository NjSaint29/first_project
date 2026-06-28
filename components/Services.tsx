import Image from "next/image";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-ink px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 flex flex-col gap-4 border-t border-bone/15 pt-8 md:flex-row md:items-end md:justify-between">
            <h2 className="display-xl text-5xl text-bone md:text-7xl">Services</h2>
            <p className="max-w-sm text-bone/60">
              Three disciplines, one studio. We work across the full arc of a home —
              from the structure to the last object on the shelf.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <article className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-sm text-clay">{s.n}</span>
                  <h3 className="font-display text-2xl uppercase tracking-tightest text-bone">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-bone/60">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
