import { nav, studio } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-bone/15 pt-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="font-display text-2xl uppercase tracking-tightest text-bone">
          {studio.name}
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-bone/50 transition-colors hover:text-bone">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-bone/40">
          © {new Date().getFullYear()} {studio.name}. Curated Lived Spaces.
        </p>
      </div>
    </footer>
  );
}
