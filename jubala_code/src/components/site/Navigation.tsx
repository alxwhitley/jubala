import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { OrderOnlineButton } from "./OrderOnlineButton";

const LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Our Coffee", href: "#coffee" },
  { label: "Locations", href: "#locations" },
  { label: "Catering", href: "#catering" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10 lg:py-7">
        <a
          href="/"
          className="font-serif text-2xl tracking-tight text-[var(--cream)] lg:text-[1.6rem]"
        >
          Jubala <span className="italic font-normal">Coffee</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-[var(--cream)]/85 transition-colors hover:text-[var(--cream)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <OrderOnlineButton />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="rounded-md p-2 text-[var(--cream)] md:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[var(--espresso)] text-[var(--cream)] md:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-serif text-2xl">
              Jubala <span className="italic font-normal">Coffee</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-start gap-2 px-6 pt-8">
            {LINKS.map((l) => (
              <li key={l.label} className="w-full">
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-[color-mix(in_oklab,var(--cream)_15%,transparent)] py-5 font-serif text-3xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 pb-10 pt-6">
            <OrderOnlineButton variant="block" />
          </div>
        </div>
      )}
    </header>
  );
}