import Reveal from "./Reveal";
import FloorPlan from "./FloorPlan";
import { processSteps, studio } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-black px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <FloorPlan className="w-full text-bone/70" />
            </div>
          </Reveal>

          <div className="relative">
            <Reveal>
              <p className="max-w-sm text-sm leading-relaxed text-bone/50">
                {studio.intro}
              </p>
            </Reveal>

            <h2 className="display-xl pointer-events-none mt-6 text-[22vw] leading-none text-bone/95 md:text-[12vw]">
              Process
            </h2>

            <ol className="mt-10 space-y-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <li className="flex gap-5 border-t border-bone/15 pt-5">
                    <span className="font-display text-sm text-clay">{step.n}</span>
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-tightest text-bone">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-bone/55">{step.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
