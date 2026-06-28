import Image from "next/image";
import Reveal from "./Reveal";
import { galleryImage } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-ink px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-clay">The Studio</p>
            <h2 className="font-display text-4xl uppercase leading-tight tracking-tightest text-bone md:text-6xl">
              Spaces that are
              <br />
              meant to be lived in
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-bone/60">
              Jo Mendes is an interior design and architecture studio working
              between restraint and warmth. We design homes as they are actually
              used — unhurried, tactile, and quietly resolved.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-bone/60">
              Every project moves from atmosphere to resolution, where each
              decision is shaped with clarity and intent.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={galleryImage}
              alt="A textured, lived-in interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
