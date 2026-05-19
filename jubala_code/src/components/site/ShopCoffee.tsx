import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import ethiopia from "@/assets/coffee-ethiopia.jpg";
import kenya from "@/assets/coffee-kenya.jpg";
import blend from "@/assets/coffee-blend.jpg";

const TABS = ["Year-Round Blends", "Single-Origins", "Coffee", "Subscriptions"] as const;

type Product = {
  origin: string;
  name: string;
  note: string;
  price: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    origin: "Kenya",
    name: "Kabuku AA",
    note: "Blackcurrant, brown sugar, ripe plum",
    price: "$22",
    image: kenya,
  },
  {
    origin: "Ethiopia",
    name: "Yirgacheffe Konga",
    note: "Jasmine, bergamot, lemon zest",
    price: "$20",
    image: ethiopia,
  },
  {
    origin: "House Blend",
    name: "Neighborhood Roast",
    note: "Milk chocolate, almond, gentle spice",
    price: "$18",
    image: blend,
  },
];

export function ShopCoffee() {
  const [active, setActive] = useState<(typeof TABS)[number]>("Year-Round Blends");

  return (
    <section
      id="coffee"
      className="bg-[var(--cream)] py-24 text-[var(--espresso)] lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--amber)]">
            Fresh Roasted, Shipped to You
          </span>
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Take Jubala <span className="italic font-normal">Home.</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 -mx-6 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div role="tablist" className="flex w-max items-center gap-3">
            {TABS.map((tab) => {
              const isActive = tab === active;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={cn(
                    "h-11 whitespace-nowrap rounded-[10px] px-5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[var(--espresso)] text-[var(--yellow)]"
                      : "border border-[color-mix(in_oklab,var(--espresso)_20%,transparent)] text-[var(--espresso)] hover:border-[var(--espresso)]",
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product grid: stacked mobile, scroll row tablet, 3-col desktop */}
        <div className="mt-12 -mx-6 overflow-x-auto px-6 md:overflow-visible md:px-0 md:mx-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-flow-col auto-cols-[78%] gap-6 sm:auto-cols-[55%] md:auto-cols-[40%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:gap-8">
            {PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col rounded-2xl border border-[color-mix(in_oklab,var(--espresso)_12%,transparent)] bg-[color-mix(in_oklab,var(--cream)_55%,white)] p-5 transition-colors hover:border-[color-mix(in_oklab,var(--espresso)_25%,transparent)]"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-[var(--cream-deep)]">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex flex-1 flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--amber)]">
                    {p.origin}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm font-light italic text-[color-mix(in_oklab,var(--espresso)_70%,transparent)]">
                    {p.note}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-serif text-xl">{p.price}</span>
                    <button
                      type="button"
                      className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[var(--espresso)] px-4 text-sm font-medium text-[var(--cream)] transition-colors hover:bg-[var(--espresso-soft)]"
                    >
                      <Plus className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#all-coffees"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--amber)] transition-colors hover:text-[var(--yellow)]"
          >
            View all coffees <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}