import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const LOCATIONS = [
  { name: "Lafayette", desc: "Lafayette Village" },
  { name: "Hillsborough St", desc: "NC State / Hillsborough" },
  { name: "North Hills", desc: "North Hills" },
  { name: "Downtown", desc: "Downtown Raleigh" },
];

type Props = {
  variant?: "solid" | "block";
  className?: string;
  label?: string;
};

export function OrderOnlineButton({ variant = "solid", className, label = "Order Online" }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", variant === "block" && "w-full", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-[10px] bg-[var(--amber)] px-6 font-medium text-[var(--cream)] transition-colors hover:bg-[var(--amber-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--amber)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variant === "block" ? "h-14 w-full text-base" : "h-11 text-sm",
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            "absolute z-50 mt-2 overflow-hidden rounded-[10px] border border-[color-mix(in_oklab,var(--espresso)_15%,transparent)] bg-[var(--cream)] shadow-lg shadow-[color-mix(in_oklab,var(--espresso)_18%,transparent)]",
            variant === "block"
              ? "left-0 right-0 bottom-full mb-2"
              : "right-0 w-72",
          )}
        >
          <div className="px-4 pt-3 pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--espresso)_70%,transparent)]">
            Pick a location
          </div>
          <ul className="pb-2">
            {LOCATIONS.map((loc) => (
              <li key={loc.name}>
                <a
                  href="#"
                  role="menuitem"
                  className="flex items-start gap-3 px-4 py-3 text-[var(--espresso)] transition-colors hover:bg-[var(--cream-deep)]"
                >
                  <MapPin className="mt-0.5 h-4 w-4 text-[var(--amber-deep)]" aria-hidden />
                  <div className="flex flex-col">
                    <span className="font-serif text-base leading-tight">{loc.name}</span>
                    <span className="text-xs text-[color-mix(in_oklab,var(--espresso)_65%,transparent)]">
                      {loc.desc}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}